import ItemHomePage from "./ItemHomePage";

const HomePage = () => {

    return (
        <div className="p-4 max-w-[1200px] mx-auto">
            {/* <div className="promo-carousel-containeer">
                <CarouselComponent imgList = {promoImg}/>
            </div> */}
            <div className="md:flex md:flex-wrap md:justify-around">
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