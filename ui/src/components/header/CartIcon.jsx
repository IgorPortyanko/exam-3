import { ShoppingCartOutlined } from '@ant-design/icons'
import { useState } from 'react'
import CartModal from '../cart/CartModal'
import CartCount from './CartCount'

const CartIcon = () => {

    const [isOpen, setIsOpen] = useState(false)

    function handleCartOpen() {
        setIsOpen(true)
    }

    function handleCartClose() {
        setIsOpen(false)
    }

    return (
        <div className='cursor-pointer relative'>
            {isOpen && <CartModal onClose={handleCartClose} />}
            <CartCount />
            <ShoppingCartOutlined onClick={handleCartOpen} />
        </div>
    )
}

export default CartIcon