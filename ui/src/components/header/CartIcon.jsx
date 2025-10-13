import {ShoppingCartOutlined } from '@ant-design/icons'
import CartModal from '../cart/CartModal'
import { useState } from 'react'

const CartIcon = () => {

    const [isOpen, setIsOpen] = useState(false)

    function handleCartOpen () {
        setIsOpen(true)
    }

    function handleCartClose () {
        setIsOpen(false)
    }

    return (
        <div className='cursor-pointer'>
            {isOpen && <CartModal onClose={handleCartClose}/>}
            <ShoppingCartOutlined onClick={handleCartOpen}/>
        </div>
    )
}

export default CartIcon