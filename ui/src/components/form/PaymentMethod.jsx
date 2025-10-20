
const PaymentMethod = ({ register, errors } ) => {

    return (
        <div>
            <label className="block mb-1 font-medium">Спосіб оплати</label>
            <select
                {...register("paymentMethod", { required: "Оберіть спосіб оплати" })}
                className="border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                defaultValue=""
            >
                <option value="" disabled>Оберіть спосіб оплати</option>
                <option value="cash">Оплата готівкою</option>
                <option value="card">Оплата карткою</option>
            </select>
            {errors.paymentMethod && (
                <p className="text-red-500 text-sm mt-1">{errors.paymentMethod.message}</p>
            )}
        </div>
    )
}

export default PaymentMethod