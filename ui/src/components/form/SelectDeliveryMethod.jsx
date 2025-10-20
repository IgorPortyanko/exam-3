const SelectDeliveryMethod = ({ register, errors, setMethod } ) => {

    const handleSetMethod = (value) => {
        if (value === '1') setMethod(false)
        else setMethod(true)
    }

    return (
        <div>
            <label className="block mb-1 font-medium">Спосіб доставки</label>
            <select
                {...register("deliveryMethod", { required: "Оберіть спосіб доставки" })}
                className="border border-gray-300 rounded-lg w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                defaultValue=""
                onChange={(e) => handleSetMethod(e.target.value)}
            >
                <option value="" disabled>Оберіть спосіб доставки</option>
                <option value="1">Самовивіз</option>
                <option value="2">Кур'єром</option>
            </select>
            {errors.paymentMethod && (
                <p className="text-red-500 text-sm mt-1">{errors.deliveryMethod.message}</p>
            )}
        </div>
    )
}

export default SelectDeliveryMethod