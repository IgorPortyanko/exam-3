

const CartSummaryItem = ({ item }) => {

    return (

        <li className="border-b flex items-center justify-between">
            <span className="mr-2">{item.name}</span>
            <div>
                <span className="mr-2">{item.number}шт</span>
                <span>{item.price}грн</span>
            </div>
        </li>

    )
}

export default CartSummaryItem