

const InputName = ({ register, errors }) => {

    return (
        <div>
                <label className="block mb-1 font-medium">Ім’я</label>
                <input
                    type="text"
                    {...register("name", {
                        required: "Введіть своє ім’я",
                        minLength: {
                            value: 2,
                            message: "Ім’я має бути довше двох символів",
                        },
                    })}
                    className="border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Ваше ім’я"
                />
                {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
            </div>
    )
}

export default InputName