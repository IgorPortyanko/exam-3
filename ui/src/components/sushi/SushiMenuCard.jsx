import { useDispatch } from 'react-redux'
import { addToCart } from '../../store/cartSlice'
import ButtonAddToCart from "../buttons/ButtonAddToCart"


const SushiMenuCard = (props) => {

    const item = {
        id: Date.now(),
        name: props.name,
        img: `./src/assets/img/sushi/${props.img}`,
        price: props.price
    }

    const dispatch = useDispatch()

    function handleAddToCart () {
        dispatch(addToCart(item))
    }

    return (
        <div className="border-2 rounded-3xl overflow-hidden mb-3 p-4 flex flex-col justify-between">
            <div className="">
                <img src={`./src/assets/img/sushi/${props.img}`} className="mx-auto rounded-3xl" alt={props.name} />
            </div>

            <h2 className="text-xl font-bold text-center"> {props.name} </h2>

            <div className="menu-card-composition">
                <p className="text-lg text-center leading-none mb-3"> {props.composition} </p>
            </div>

            <div className="flex justify-between items-center">
                <div className="w-[130px] h-[40px] text-center bg-teal-500 leading-9 text-xl font-semibold rounded-2xl">
                    {props.price}грн
                </div>
                <ButtonAddToCart addItemToCart = {handleAddToCart} item = {item}/>
            </div>
        </div>
    )
}

export default SushiMenuCard