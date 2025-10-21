import { UserOutlined } from '@ant-design/icons'
import { Link } from 'react-router'
import { useState } from 'react'
import ResponsiveMenu from './responsiveMenu/ResponsiveMenu'
import CartIcon from './CartIcon'

const NavBottom = () => {

  const [isOpenResponsiveMenu, setIsOpenResponsiveMenu] = useState(false)

  const closeMenu = () => setIsOpenResponsiveMenu(false);
  const toggleMenu = () => setIsOpenResponsiveMenu(prev => !prev);

  const hoverStyle = 'relative after:absolute after:h-[2px] after:w-full after:left-0 after:-bottom-1 after:bg-black after:scale-0 hover:after:scale-100 after:transition-transform'

  return (
    <div className="flex flex-auto justify-around sm:justify-between md:pt-5 items-center ">
      {isOpenResponsiveMenu && <ResponsiveMenu onClose={closeMenu} />}
      <div className="max-sm:hidden">
        <ul className="flex justify-between gap-5">
          <li className={hoverStyle}>
            <Link to='/pizza'>Піца</Link>
          </li>
          <li className={hoverStyle}>
            <Link to='/burger'>Бургери</Link>
          </li>
          <li className={hoverStyle}>
            <Link to='/sushi'>Сушi</Link>
          </li>
          <li className={hoverStyle}>
            <Link to='/sets'>Сети</Link>
          </li>
          <li className={hoverStyle}>
            <Link to='/rolls'>Роли</Link>
          </li>
        </ul>
      </div>
      <button
        onClick={toggleMenu}
        className="group block relative w-[40px] h-5 sm:hidden">
        <span className="top-0 absolute bg-black w-full h-[1px] group-[.active]:rotate-45 group-[.active]:translate-y-2"></span>
        <span className="top-1/2 absolute bg-black w-full h-[1px] group-[.active]:opacity-0"></span>
        <span className="bottom-0 absolute bg-black w-full h-[1px] group-[.active]:-translate-y-[10px] group-[.active]:-rotate-45"></span>
      </button>
      <div className="bottom-right">
        <ul className="flex justify-between gap-5">
          <li className='text-4xl'><Link to='/auth'><UserOutlined /></Link></li>
          <li className='text-4xl'><CartIcon /></li>
        </ul>
      </div>
    </div>
  )
}

export default NavBottom