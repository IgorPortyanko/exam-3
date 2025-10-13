import { useState } from "react"
import { ShoppingCartOutlined } from '@ant-design/icons'

const RollsMenuCard = (props) => {

    return (
        <div className="border-2 rounded-3xl overflow-hidden mb-3 p-4 flex flex-col justify-between">
            <div className="">
                <img src={`./src/assets/img/rolls/${props.img}`} className="mx-auto" alt={props.name} />
            </div>

            <h2 className="text-xl font-bold text-center"> {props.name} </h2>

            <div className="menu-card-composition">
                <p className="text-lg text-center leading-none mb-3"> {props.composition} </p>
            </div>

            <div className="flex justify-between items-center">
                <div className="w-[130px] h-[40px] text-center bg-teal-500 leading-9 text-xl font-semibold rounded-2xl">
                    {props.price}грн
                </div>
                <div className="menu-card-button-add">
                    <button className="w-[130px] h-[40px] rounded-2xl bg-amber-700 font-semibold shadow-[2px_2px_4px_#000] flex items-center justify-center gap-2 text-white hover:bg-amber-800 transition cursor-pointer"><ShoppingCartOutlined /> В КОШИК</button>
                </div>
            </div>
        </div>
    )
}

export default RollsMenuCard