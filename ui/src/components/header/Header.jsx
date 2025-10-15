import Logo from './Logo'
import NavTop from './NavTop'
import NavBottom from './NavBottom'
import { useDispatch } from 'react-redux'
import { getCartFromLocalStorage, initializeCart } from '../../store/cartSlice'
import { useEffect } from 'react'

const Header =  () => {

    const dispatch = useDispatch()

    useEffect(() => {
        const cartList = getCartFromLocalStorage()
        if (cartList) {
            dispatch(initializeCart(cartList))
        }
    }, [])

    return (
        <header className="bg-[#a1a096] py-4 text-2xl header fixed left-0 right-0 z-50">
            <div className='flex items-center gap-5 mx-auto px-4 max-w-[1200px]'>
                <Logo />
                <nav className="flex-auto">
                    <NavTop />
                    <NavBottom />
                </nav>
            </div>
        </header>
    )
        
}
export default Header