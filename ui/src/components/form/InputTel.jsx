
const InputTel = ({ register, errors }) => {

    return (
        <div>
                <label className="block mb-1 font-medium">Телефон</label>
                <input
                    type="tel"
                    {...register("phone", {
                        required: "Введіть свій номер телефону",
                        pattern: {
                            value: /^[0-9]{10}$/,
                            message: "Некоректний формат номеру телефону (10 цифр без +38)",
                        },
                    })}
                    className="border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="0971111111"
                />
                {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                )}
            </div>
    )
}

export default InputTel