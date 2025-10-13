import Header from "../header/Header"
import Footer from "../footer/Footer"
import { Outlet } from 'react-router'

const Layout = () => {

    return(
        <div className='flex flex-col min-h-screen'>
            <Header/>
            <main className='flex-auto'>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}

export default Layout