const InputPassword = ({ register, errors }) => {
    return (
        <div>
            <label className="block mb-1 font-medium">Пароль</label>
            <input
                type="password"
                {...register("password", {
                    required: "Введіть пароль",
                    minLength: {
                        value: 4,
                        message: "Пароль має містити щонайменше 6 символів",
                    },
                    pattern: {
                        //value: /^(?=.*[A-Z])(?=.*\d).+$/,
                        //message: "Пароль має містити хоча б одну велику літеру та цифру",
                    },
                })}
                className="border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Ваш пароль"
            />
            {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
        </div>
    )
}

export default InputPassword