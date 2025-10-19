import { Link } from "react-router"

const ResponsiveMenu = ({ onClose }) => {

    const liClassName = 'bg-gradient-to-t from-[#ebe6e6] to-[#b4bdc5] px-6 py-2 rounded-xl shadow-sm hover:shadow-md transition'

    const menuItems = [
        { to: '/pizza', label: 'Піца' },
        { to: '/burger', label: 'Бургери' },
        { to: '/sushi', label: 'Суші' },
        { to: '/sets', label: 'Сети' },
        { to: '/rolls', label: 'Роли' },
        { to: '/promo', label: 'Акції' },
        { to: '/delivery', label: 'Доставка' },
        { to: '/contacts', label: 'Контакти' },
    ]

    return (
        <div className="absolute top-26 sm:hidden left-0 right-0 bottom-0 bg-gray-200 min-h-screen">
            <ul className="p-4 leading-[2.2] uppercase font-semibold">
                {menuItems.map((item) => (
                    <li key={item.to} className={liClassName}>
                        <Link to={item.to} onClick={onClose} style={{display:'block', width:'100%'}}>
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ResponsiveMenu