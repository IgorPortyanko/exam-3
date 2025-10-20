import { useDispatch, useSelector } from 'react-redux'
import { burgerList } from '../../store/burgerSlice'
import { useEffect } from 'react'
import BurgerMenuCard from './BurgerMenuCard'

const BurgerPage = () => {
    const { allBurger, isLoading, error } = useSelector((state) => state.burger)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(burgerList())
    }, [])

    if (isLoading) return <p className="text-center text-3xl text-gray-500 mt-10">Завантаження...</p>;
    if (error) return <p className="text-center text-red-500 mt-10">Помилка: {error}</p>;

    return (
        <div className='p-4 max-w-[1200px] mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {allBurger?.map((elem) => <BurgerMenuCard key={elem.id}  {...elem} />)}
        </div>
    )
}

export default BurgerPage