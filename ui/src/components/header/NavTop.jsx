

const NavTop = () => {


    return (
        <div className="hidden md:flex flex-auto justify-between pb-5 border-b">
            <div className="top-left">
              <ul className="flex justify-between gap-5">
                <li>Контакти</li>
                <li>Час роботи: 10:00 - 21:00</li>
              </ul>
            </div>
            <div className="top-right">
              <ul className="flex justify-between gap-5">
                <li>Акції</li>
                <li>Доставка</li>
              </ul>
            </div>
        </div>
    )
}

export default NavTop