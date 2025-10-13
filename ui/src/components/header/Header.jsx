import Logo from './Logo'
import NavTop from './NavTop'
import NavBottom from './NavBottom'

const Header =  () => {

    return (
        <header className="bg-[#a1a096] py-4 text-2xl header">
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