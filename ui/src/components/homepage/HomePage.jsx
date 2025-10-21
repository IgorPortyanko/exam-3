import ItemHomePage from "./ItemHomePage";
import PromoSlider from "../promo/PromoSlider";
import { Link } from "react-router";

const HomePage = () => {

    return (
        <div className="p-4">
            <Link to='/promo'><PromoSlider/></Link>
            <h1 className="text-2xl font-bold text-center mb-5 md:text-4xl"> Спробуйте найсмачніші бургери, піцу та суші у місті</h1>
            <div className=" max-w-[1200px] mx-auto md:flex md:flex-wrap md:justify-center gap-9">
                
                <ItemHomePage page ='pizza' name ='Піца' img = 'pizza.jpg'/>
                <ItemHomePage page ='burger' name ='Бургер' img = 'burger.jpg'/>
                <ItemHomePage page ='rolls' name ='Роли' img = 'rolls.webp'/>
                <ItemHomePage page ='sets' name ='Сети' img = 'set.webp'/>
                <ItemHomePage page ='sushi' name ='Суші' img = 'sushi.webp'/>
            </div>
        </div>
    )
}

export default HomePage