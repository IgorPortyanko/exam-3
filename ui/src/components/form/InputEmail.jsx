

const InputEmail = ({ register, errors }) => {

    return (
        <div>
                <label className="block mb-1 font-medium">Email</label>
                <input
                    type="email"
                    {...register("email", {
                        required: "Введіть свій email",
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Некоректний формат email",
                        },
                    })}
                    className="border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="example@gmail.com"
                />
                {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
            </div>
    )
}

export default InputEmail