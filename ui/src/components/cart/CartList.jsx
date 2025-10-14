import { useSelector } from "react-redux"
import CartItem from "./CartItem"

const CartList = () => {

    const cartList = useSelector(state => state.cart.cart)

    return (
        <div className=" ">
            {cartList.map(el => <CartItem key={el.id} id={el.id} name={el.name} img={el.img} price={el.price} number={el.number}/>)}
        </div>
    )
}

export default CartList