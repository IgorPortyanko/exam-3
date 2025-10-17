
const InputMessage = ({ register, errors }) => {

    return (
        <div>
        <label className="block mb-1 font-medium">Повідомлення</label>
        <textarea
          {...register("message", {
            required: "Напишіть повідомлення",
            minLength: {
              value: 5,
              message: "Повідомлення занадто коротке",
            },
          })}
          className="border border-gray-300 rounded-lg w-full p-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Ваше повідомлення..."
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>
    )
}

export default InputMessage