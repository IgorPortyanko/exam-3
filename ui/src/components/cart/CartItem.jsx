import { useDispatch } from "react-redux"
import { increment, decrement, deleteFromCart } from "../../store/cartSlice"
import { DeleteFilled } from '@ant-design/icons'

const CartItem = (props) => {

    const dispatch = useDispatch()

    function handleMinus () {
        dispatch(decrement(props.id))
    }

    function handlePlus () {
        dispatch(increment(props.id))
    }

    function handleDeleteItem () {
        dispatch(deleteFromCart(props.id))
    }

    return(
        <div className="p-1 border-b flex text-base items-center justify-center gap-3">
            <div className="min-w-[70px]">
                <img className="size-[70px] rounded-[50%]" src={props.img} alt="" />
            </div>
            <div className="flex-auto text-center leading-none">
                {props.name}
            </div>
            <div className="text-center">
                <div
                    className="size-[15px] text-center leading-[10px] bg-[#2ec4b6] rounded-[50%]"
                    onClick={handlePlus}
                > 
                    +
                </div>
                <div className="">{ props.number }</div>
                <div 
                    className="size-[15px] text-center leading-[12px] bg-[#2ec4b6] rounded-[50%]"
                    onClick={handleMinus}
                > 
                    -
                </div>
                
            </div>
            <div className="text-base min-w-[60px]"> { props.number * props.price }грн</div>
            <div className="">
                <DeleteFilled onClick={handleDeleteItem} style={{color: 'red'}}/>
            </div>
        </div>
    )
}

export default CartItem