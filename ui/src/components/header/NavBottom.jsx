import {ShoppingCartOutlined, UserOutlined } from '@ant-design/icons'
import { Link } from 'react-router'
import CartIcon from './CartIcon'

const NavBottom = () => {


    return (
        <div className="flex flex-auto justify-around sm:justify-between md:pt-5 items-center">
            <div className="max-sm:hidden">
              <ul className="flex justify-between gap-5">
                <li><Link to='/pizza'>Піца</Link> </li>
                <li><Link to='/burger'>Бургери</Link></li>
                <li><Link to='/sushi'>Сушi</Link></li>
                <li><Link to='/sets'>Сети</Link></li>
                <li><Link to='/rolls'>Роли</Link></li>
              </ul>    
            </div>
            <button className="group block relative w-[40px] h-5 sm:hidden">
                <span className="top-0 absolute bg-black w-full h-[1px] group-[.active]:rotate-45 group-[.active]:translate-y-2"></span>
                <span className="top-1/2 absolute bg-black w-full h-[1px] group-[.active]:opacity-0"></span>
                <span className="bottom-0 absolute bg-black w-full h-[1px] group-[.active]:-translate-y-[10px] group-[.active]:-rotate-45"></span>
            </button>
            <div className="bottom-right">
              <ul className="flex justify-between gap-5">
                <li className='text-4xl'><UserOutlined/></li>
                <li className='text-4xl'><CartIcon/></li>
              </ul>
            </div>
        </div>
    )
}

export default NavBottom