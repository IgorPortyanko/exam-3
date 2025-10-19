
const InputNumber = ({ register, errors, label, nameField }) => {

    return (
        <div>
                <label className="block mb-1 font-medium">{label}</label>
                <input
                    type="text"
                    {...register(nameField, {
                        required: "   ",
                        
                    })}
                    className="border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder={`Введіть ${label}`}
                />
                {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
            </div>
    )
}

export default InputNumber