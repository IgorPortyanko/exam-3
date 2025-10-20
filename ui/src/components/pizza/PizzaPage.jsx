import { useDispatch, useSelector } from 'react-redux'
import { pizzaList} from '../../store/pizzaSlice'
import { useEffect } from 'react'
import PizzaMenuCard from './PizzaMenuCard'

const PizzaPage = () => {
    const { allPizza, isLoading, error } = useSelector((state) => state.pizza)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(pizzaList())
    }, [])

    if (isLoading) return <p className="text-center text-3xl text-gray-500 mt-10">Завантаження...</p>;
    if (error) return <p className="text-center text-red-500 mt-10">Помилка: {error}</p>;

    return(
        <div className='p-4 max-w-[1200px] mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
           { allPizza?.map((elem) => <PizzaMenuCard key={elem.id}  {...elem}/>)}
        </div>
    )
}

export default PizzaPage