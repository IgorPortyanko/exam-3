

const PizzaRadioBtn = ({ id, onChange, selectedSize }) => {

    const sizes = [30, 40, 50];

    return (
        
        <div className="flex justify-center gap-4 mb-3">
            {sizes.map((size) => (
                <label
                    key={size}
                    className="text-center block w-[90px] h-[40px] rounded-[50%] cursor-pointer"
                >
                    <input
                        type="radio"
                        name={`price-${id}`}
                        value={size}
                        checked={selectedSize === size}
                        onChange={() => onChange(size)}
                        className="hidden peer"
                    />
                    <span className={`block leading-[40px] text-xl font-semibold text-white rounded-[50%] transition
                        ${selectedSize === size ? 'bg-red-800' : 'bg-emerald-500'}`}>
                        {size} см
                    </span>
                </label>
            ))}
        </div>
    )
}

export default PizzaRadioBtn