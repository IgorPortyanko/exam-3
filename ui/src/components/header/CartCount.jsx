import { useSelector } from "react-redux"
import { getCartLength } from "../../store/cartSlice"


const CartCount = () => {

    const count = useSelector(getCartLength) 
    
    return (
        <div className="size-[20px] bg-red-700 text-lg text-white absolute z-1 -top-1 -right-1 flex items-center justify-center rounded-full">
            {count}
        </div>
    )
}

export default CartCount