import { Link } from 'react-router'

const FooterMenu = () => {

    return (
        <div className="footer-menu">
            <h3 className='font-bold text-xl'>Меню</h3>
            <ul className="footer-list">
                <Link to='./pizza'><li>Піца</li></Link>
                <Link to='./burger'><li>Бургери</li></Link>
                <Link to='./sushi'><li>Суші</li></Link>
                <Link to='./rolls'><li>Роли</li></Link>
                <Link to='./sets'><li>Сети</li></Link>
            </ul>
        </div>
    )
}

export default FooterMenu