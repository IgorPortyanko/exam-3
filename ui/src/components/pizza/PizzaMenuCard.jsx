import { useState } from "react"
import ButtonAddToCart from "../buttons/ButtonAddToCart"
import PizzaRadioBtn from "./PizzaRadioBtn"
import { useDispatch } from 'react-redux'
import { addToCart } from '../../store/cartSlice'


const PizzaMenuCard = (props) => {
    
    const [price, setPrice] = useState(props.price1)
    const [selectedSize, setSelectedSize] = useState(30);

    const handleChange = (size) => {
        let price = 0
        setSelectedSize(size)
        switch(size) {
            case 30: price = props.price1
            break
            case 40: price = props.price2
            break
            case 50: price = props.price3
            break
        }
        setPrice(price)
    }

    const item = {
        id: props.id+props.name+price,
        name: props.name,
        img: `./src/assets/img/pizza/${props.img}`,
        price: price
    }

    const dispatch = useDispatch()

    function handleAddToCart () {
        dispatch(addToCart(item))
    }

    return (
        <div className="border-2 rounded-3xl overflow-hidden mb-3 p-4 flex flex-col justify-between">
            <div className="">
                <img src={`./src/assets/img/pizza/${props.img}`} className="mx-auto" alt={props.name} />
            </div>

            <h2 className="text-3xl font-bold text-center"> {props.name} </h2>

            <div className="menu-card-composition">
                <p className="text-lg text-center leading-none mb-3"> {props.composition} </p>
            </div>

            <PizzaRadioBtn
                id = {props.id}
                selectedSize={selectedSize}
                onChange={handleChange}
            />

            <div className="flex justify-between items-center">
                <div className="w-[130px] h-[40px] text-center bg-teal-500 leading-9 text-xl font-semibold rounded-2xl">
                    {price}грн
                </div>
                <ButtonAddToCart addItemToCart = {handleAddToCart} item = {item}/>
            </div>
        </div>
    )
}

export default PizzaMenuCard