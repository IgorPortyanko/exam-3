import { useSelector } from "react-redux"
import { selectTotalSum } from "../../store/cartSlice"
import CartSummaryItem from "./CartSummaryItem"

const CartSummary = () => {

    const cart = useSelector(state => state.cart.cart)
    const sum = useSelector(selectTotalSum)

    return (
        <div className="px-4">
            <ul className="mb-4">
                {cart.map(item =>
                    <CartSummaryItem key={item.id} item={item}/>
                )}
            </ul>
            <p className="text-xl text-blue-800 font-bold">Загальна сума: {sum}грн</p>
        </div>
    )
}

export default CartSummary