import { Link } from 'react-router'

const FooterInfo = () => {

    return (
        <div className="footer-info">
            <h3 className='font-bold text-xl'>RuTa</h3>
            <ul className="footer-list">
                <Link to='./'><li>Головна</li></Link>
                <Link to='./promo'><li>Акції</li></Link>
                <Link to='./about'><li>Про нас</li></Link>
                <Link to='./delivery'><li>Доставка та оплата</li></Link>
                <Link to='./contacts'><li>Контакти</li></Link>
            </ul>
        </div>
    )
}

export default FooterInfo