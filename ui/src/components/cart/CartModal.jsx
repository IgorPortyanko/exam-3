import { CloseCircleOutlined } from '@ant-design/icons'

const CartModal = () => {

    return (
        <div className=''>
             <div className=" bg-gray-400">
                <h3>Корзина товарів</h3>
                <span><CloseCircleOutlined/></span>
             </div>
             <div className="main"></div>   
             <div className="footer  bg-gray-400">
                <div>
                    <span>До оплати:</span>
                    <span>sum</span>
                </div>
                <button>ОФОРМИТИ ЗАМОВЛЕННЯ</button>
             </div>
        </div>
    )
}

export default CartModal