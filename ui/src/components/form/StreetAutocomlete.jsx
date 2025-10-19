import { useState, useEffect, useRef } from "react";

export default function StreetAutocomplete({ value = "", onChange }) {
    const [q, setQ] = useState(value);
    const [items, setItems] = useState([]);
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [activeIdx, setActiveIdx] = useState(-1);
    const inputRef = useRef(null);
    const listRef = useRef(null);
    const wrapperRef = useRef(null);
    const abortControllerRef = useRef(null);
    const cacheRef = useRef(new Map());

    useEffect(() => {
        setQ(value);
    }, [value]);

    // Debounce та fetch
    useEffect(() => {
        if (q.length < 2) {
            setItems([]);
            setOpen(false);
            setError(null);
            return;
        }

        // Перевіряємо кеш
        if (cacheRef.current.has(q)) {
            const cached = cacheRef.current.get(q);
            setItems(cached);
            setOpen(cached.length > 0);
            setActiveIdx(-1);
            return;
        }

        setLoading(true);
        setError(null);

        const t = setTimeout(() => {
            // Скасовуємо попередній запит
            if (abortControllerRef.current) {
                abortControllerRef.current.abort();
            }
            abortControllerRef.current = new AbortController();

            fetchSuggestions(q, abortControllerRef.current.signal)
                .then(results => {
                    cacheRef.current.set(q, results);
                    setItems(results);
                    setOpen(results.length > 0);
                    setActiveIdx(-1);
                    setLoading(false);
                })
                .catch(err => {
                    if (err.name !== 'AbortError') {
                        setItems([]);
                        setOpen(false);
                        setError("Помилка завантаження");
                        
                    }
                    setLoading(false);
                });
        }, 300);

        return () => {
            clearTimeout(t);
            if (abortControllerRef.current) {
                abortControllerRef.current.abort();
            }
        };
    }, [q]);

    // Закриття при кліку поза компонентом
    useEffect(() => {
        function handleClickOutside(e) {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Навігація клавіатурою
    function onKeyDown(e) {
        if (!open) {
            if (e.key === "ArrowDown" && items.length) {
                setOpen(true);
                setActiveIdx(0);
            }
            return;
        }
        if (e.key === "ArrowDown") {
            e.preventDefault();
            const newIdx = Math.min(activeIdx + 1, items.length - 1);
            setActiveIdx(newIdx);
            scrollIntoView(newIdx);
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            const newIdx = Math.max(activeIdx - 1, 0);
            setActiveIdx(newIdx);
            scrollIntoView(newIdx);
        } else if (e.key === "Enter") {
            e.preventDefault();
            if (activeIdx >= 0 && items[activeIdx]) {
                selectItem(items[activeIdx]);
            }
        } else if (e.key === "Escape") {
            setOpen(false);
            setActiveIdx(-1);
        }
    }

    function scrollIntoView(idx) {
        const ul = listRef.current;
        if (!ul || idx < 0 || idx >= ul.children.length) return;
        const el = ul.children[idx];
        if (el) el.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }

    function selectItem(item) {
        setQ(item.display_name);
        setOpen(false);
        setActiveIdx(-1);
        if (onChange) onChange(item.display_name);
    }

    return (
        <div ref={wrapperRef} className="relative w-full max-w-md">
            <label className="block mb-1 font-medium">Введіть назву вулиці (Київ)</label>
            <input
                ref={inputRef}
                className="border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Почніть вводити вулицю..."
                value={q}
                onChange={(e) => {
                    setQ(e.target.value);
                    if (onChange) onChange(e.target.value);
                }}
                onKeyDown={onKeyDown}
                onFocus={() => { if (items.length) setOpen(true) }}
            />
            {loading && (
                <div className="absolute right-3 top-10 text-gray-400">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                </div>
            )}
            {error && (
                <div className="absolute right-3 top-3 text-red-500 text-sm">{error}</div>
            )}
            {open && (
                <ul
                    id="street-listbox"
                    ref={listRef}
                    className="absolute z-20 mt-1 max-h-60 overflow-auto w-full bg-white border rounded shadow-lg"
                    role="listbox"
                >
                    {items.map((it, i) => (
                        <li
                            key={it.place_id}
                            id={`street-item-${i}`}
                            role="option"
                            aria-selected={i === activeIdx}
                            onMouseDown={(e) => e.preventDefault()}
                            onClick={() => selectItem(it)}
                            onMouseEnter={() => setActiveIdx(i)}
                            className={`px-3 py-2 cursor-pointer transition-colors ${
                                i === activeIdx ? "bg-blue-100" : "hover:bg-gray-50"
                            }`}
                        >
                            <div className="text-sm">{it.display_name}</div>
                        </li>
                    ))}
                    {items.length === 0 && (
                        <li className="px-3 py-2 text-sm text-gray-500">Нічого не знайдено</li>
                    )}
                </ul>
            )}
        </div>
    );
}

async function fetchSuggestions(query, signal) {
    const q = `${query}, Kyiv, Ukraine`;
    const url = `https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&limit=10&q=${encodeURIComponent(q)}`;

    const resp = await fetch(url, {
        signal,
        headers: {
            "Accept-Language": "uk"
        }
    });
    
    if (!resp.ok) throw new Error("Network error");
    const data = await resp.json();

    return data
        .filter(isStreet)
        .map(d => ({
            place_id: d.place_id,
            display_name: formatDisplay(d),
            raw: d
        }));
}

function isStreet(d) {
    const streetTypes = ["road", "residential", "street", "avenue", "highway", "path", "pedestrian", "cycleway"];
    const type = (d.type || "").toLowerCase();
    
    // Перевіряємо тип
    if (streetTypes.some(st => type.includes(st))) return true;
    
    // Перевіряємо клас
    if (d.class === "highway") return true;
    
    // Перевіряємо адресу
    if (d.address) {
        const addr = d.address;
        return !!(addr.road || addr.pedestrian || addr.residential || addr.cycleway);
    }
    
    return false;
}

function formatDisplay(d) {
    const addr = d.address || {};
    const road = addr.road || addr.pedestrian || addr.cycleway || addr.residential || d.display_name.split(",")[0];
    const district = addr.suburb || addr.city_district || addr.town || "";
    return `${road}${district ? ` — ${district}` : ""}, Київ`;
}

