import { ShoppingCartOutlined } from '@ant-design/icons'

const ButtonAddToCart = ({addItemToCart, item}) => {

    return (
        <div className="menu-card-button-add">
            <button 
                className="w-[130px] h-[40px] rounded-2xl bg-amber-700 font-semibold shadow-[2px_2px_4px_#000] flex items-center justify-center gap-2 text-white hover:bg-amber-800     transition cursor-pointer"
                onClick={() => {
                    addItemToCart(item)
                }}
            >
                <ShoppingCartOutlined /> В КОШИК
            </button>
        </div>
    )
}

export default ButtonAddToCart