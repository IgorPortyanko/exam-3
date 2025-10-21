import { CloseCircleOutlined } from '@ant-design/icons'
import CartList from './CartList'
import { useSelector } from 'react-redux'
import { selectTotalSum } from '../../store/cartSlice'
import { Link } from 'react-router'

const CartModal = ({ onClose }) => {

    const total = useSelector(selectTotalSum)

    return (
        <div className="fixed inset-0 bg-black/40 z-50">
            <div className='fixed z-60 top-0 right-0 left-0 bottom-0 h-screen flex flex-col md:w-[500px] md:left-auto'>
                <div className=" bg-gray-300 relative py-5 text-center">
                    <h3 className='font-semibold'>Корзина товарів</h3>
                    <span className='absolute top-0 left-1'>
                        <CloseCircleOutlined
                            style={{ color: 'red' }}
                            onClick={onClose}
                        />
                    </span>
                </div>
                <div className="main flex-auto bg-gray-200 overflow-y-auto">
                    <CartList />
                </div>
                <div className="footer  bg-gray-300 px-4 py-3" >
                    <div className='text-2xl mb-2 flex justify-around'>
                        <span>До оплати:</span>
                        <span>{total} грн</span>
                    </div>
                    <Link to='./checkout'>
                        <button
                            className={`text-xl bg-[#9e2a2b] text-white py-2 px-3 rounded-2xl mx-auto block ${(total===0)? 'opacity-50': 'opacity-100'} `}
                            onClick={onClose}
                            disabled={total===0}
                        >
                            ОФОРМИТИ ЗАМОВЛЕННЯ
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CartModal