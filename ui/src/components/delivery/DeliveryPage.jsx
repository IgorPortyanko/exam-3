

const DeliveryPage = () => {

    return (
        <div className="p-4 max-w-[1200px] mx-auto">
            <div className="flex flex-col mb-5">
                <h2 className="text-3xl text-center font-bold mb-3">Доставка і оплата</h2>
                <img src="./src/assets/img/delivery/delivery.jpg" className="block mx-auto sm:w-lg" alt="delivery" />
            </div>

            <div className=" mb-5">
                <h3 className="text-2xl text-center font-bold mb-4">Працюємо на доставку та самовивіз</h3>
                <ul className="text-center">
                    <li className="leading-none mb-2">- безкоштовна доставка по Правому і Лівому берегу в зонах власної доставки</li>
                    <li className="leading-none mb-2">- знижка 10% на самовивіз</li>
                    <li className="leading-none mb-2">- мінімальне замовлення для безкоштовної доставки – 499 грн, при замовленні на 251-498 грн – доставка 50 грн, менше 250 грн – тільки самовивіз</li>
                    <li className="leading-none mb-2">- оплатити замовлення можна на сайті або готівкою при отриманні</li>
                    <li className="leading-none mb-2">- доставляємо за 60-90 хвилин</li>
                </ul>
            </div>
            <div className=" mb-5 text-center">
                <h3 className="text-2xl font-bold mb-2">Способи оплати</h3>
                <ul className="">
                    <li className="leading-none mb-2">Готівкою кур'єру при передачі замовлення</li>
                    <li className="leading-none mb-2">Карткою кур'єру</li>
                    <li className="leading-none mb-2">Карткою на сайті</li>
                </ul>
            </div>
            <div className=" mb-5 text-center">
                <h3 className="text-2xl font-bold mb-2">Обмін та повернення</h3>
                <p>Обмін та повернення товару здійснюється згідно закону України про захист прав споживачів та Постанови КМУ від 19.03.1994 №172, якою визначено перелік товарів належної якості, що не підлягають поверненню. В цьому переліку є продовольчі товари. </p>
                <p>Відповідно до даних нормативних актів обміну чи поверненню підлягають тільки продукти харчування неналежної якості. На вимогу покупця може бути здійснено обмін або повернення сплачених коштів.</p>
            </div>
            <div className=" mb-5 text-center">
                <h3 className="text-2xl font-bold mb-2">Важлива інформація</h3>
                <ul className="">
                    <li className="leading-none mb-2">- Якщо у вашому будинку не працює ліфт, доставка можлива лише до 5-го поверха.</li>
                    <li className="leading-none mb-2">- Запізненням вважається замовлення, час очікування якого перевищує 9 хвилин.</li>
                    <li className="leading-none mb-2">- Запізнимося більше, ніж на 9 хвилин - подаруємо промокод на 150 грн (не дiє, якщо доставка вiдбувається пiд час повiтряної тривоги, або поганих погодних умов).</li>
                    <li className="leading-none mb-2">- Допустиме відхилення ваги продукції становить ±3% від заявленої ваги меню.</li>
                    <li className="leading-none mb-2">- Передзамовлення оформлюються на зазначений час із допустимим інтервалом ±15 хвилин.</li>
                </ul>
            </div>
        </div>
    )
}

export default DeliveryPage