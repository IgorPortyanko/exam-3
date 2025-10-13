import { Link } from 'react-router'

const ItemHomePage = ({page, name, img}) => {

    return(
        <Link to={`/${page}`} className='md:basis-4/9'>
            <div className="w-full border-4 rounded-xl mb-3  ">
                <div className="home-page-menu-img">
                    <img src={`../src/assets/img/mainPageMenu/${img}`} className='rounded-lg w-full' alt={name} />
                </div>
                <div className="text-center text-4xl/[2] font-bold">{name}</div>
            </div>
        </Link>
    )
}

export default ItemHomePage