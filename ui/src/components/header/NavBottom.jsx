import { UserOutlined } from '@ant-design/icons'
import { Link } from 'react-router'
import { useState } from 'react'
import ResponsiveMenu from './responsiveMenu/ResponsiveMenu'
import CartIcon from './CartIcon'

const NavBottom = () => {

  const [isOpenResponsiveMenu, setIsOpenResponsiveMenu] = useState(false)

  const handleOpenResponsiveMenu = () => {
    setIsOpenResponsiveMenu(!isOpenResponsiveMenu)
  }

  return (
    <div className="flex flex-auto justify-around sm:justify-between md:pt-5 items-center ">
      {isOpenResponsiveMenu && <ResponsiveMenu onClose={handleOpenResponsiveMenu}/>}
      <div className="max-sm:hidden">
        <ul className="flex justify-between gap-5">
          <li><Link to='/pizza'>Піца</Link> </li>
          <li><Link to='/burger'>Бургери</Link></li>
          <li><Link to='/sushi'>Сушi</Link></li>
          <li><Link to='/sets'>Сети</Link></li>
          <li><Link to='/rolls'>Роли</Link></li>
        </ul>
      </div>
      <button
        onClick={handleOpenResponsiveMenu}
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