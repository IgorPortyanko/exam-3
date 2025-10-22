import { Link } from 'react-router'

const MenuList = () => {

    const hoverStyle = 'relative after:absolute after:h-[2px] after:w-full after:left-0 after:-bottom-1 after:bg-black after:scale-0 hover:after:scale-100 after:transition-transform'

    return (
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
    )
}

export default MenuList