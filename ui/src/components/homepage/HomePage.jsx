import ItemHomePage from "./ItemHomePage";
import PromoSlider from "../promo/PromoSlider";
import { Link } from "react-router";

const HomePage = () => {

    return (
        <div className="p-4 max-w-[1200px] mx-auto">
            <Link to='/promo'><PromoSlider/></Link>
            <div className="md:flex md:flex-wrap md:justify-between">
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