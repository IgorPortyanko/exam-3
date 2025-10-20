import { Link } from "react-router"
import { useEffect, useRef } from "react";

const ResponsiveMenu = ({ onClose }) => {

    const menuRef = useRef(null);
    const liClassName = 'bg-gradient-to-t from-[#ebe6e6] to-[#b4bdc5] px-6 py-2 rounded-xl shadow-sm hover:shadow-md transition'

    const menuItems = [
        { to: '/pizza', label: 'Піца' },
        { to: '/burger', label: 'Бургери' },
        { to: '/sushi', label: 'Суші' },
        { to: '/sets', label: 'Сети' },
        { to: '/rolls', label: 'Роли' },
        { to: '/promo', label: 'Акції' },
        { to: '/delivery', label: 'Доставка' },
        { to: '/contacts', label: 'Контакти' },
    ]

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [onClose]);

    return (
        <div className="absolute top-26 sm:hidden left-0 right-0 bottom-0 bg-gray-200/50 min-h-screen" onClick={onClose}>
            <ul 
                ref={menuRef}
                className="p-4 leading-[2.2] uppercase font-semibold bg-gray-200"
                onClick={(e) => e.stopPropagation()}
            >
                {menuItems.map((item) => (
                    <li key={item.to} className={liClassName}>
                        <Link to={item.to} onClick={onClose} style={{ display: 'block', width: '100%' }}>
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ResponsiveMenu