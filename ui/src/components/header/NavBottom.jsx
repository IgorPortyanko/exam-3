import { UserOutlined } from '@ant-design/icons'
import { Link } from 'react-router'
import { useState } from 'react'
import ResponsiveMenu from './responsiveMenu/ResponsiveMenu'
import CartIcon from './CartIcon'
import MenuList from './MenuList'
import ResponsiveMenuButton from './responsiveMenu/ResponsiveMenuButton'

const NavBottom = () => {

  const [isOpenResponsiveMenu, setIsOpenResponsiveMenu] = useState(false)

  const closeMenu = () => setIsOpenResponsiveMenu(false);
  const toggleMenu = () => setIsOpenResponsiveMenu(prev => !prev);

  return (
    <div className="flex flex-auto justify-around sm:justify-between md:pt-5 items-center ">
      {isOpenResponsiveMenu && <ResponsiveMenu onClose={closeMenu} />}
      <MenuList/>
      <ResponsiveMenuButton toggleMenu={toggleMenu}/>
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