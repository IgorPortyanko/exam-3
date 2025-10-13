import { useDispatch, useSelector } from 'react-redux'
import { pizzaList} from '../../store/pizzaSlice'
import { useEffect } from 'react'
import PizzaMenuCard from './PizzaMenuCard'

const PizzaPage = () => {

    const allPizza = useSelector((state) => state.pizza.pizza)
    const dispatch = useDispatch()

    const getAllPizza = () => {
        dispatch(pizzaList())
    }

    useEffect(() => {
        getAllPizza()
    }, [dispatch])

    return(
        <div className='p-4 max-w-[1200px] mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
           { allPizza?.map((elem) => <PizzaMenuCard key={elem.id}  {...elem}/>)}
        </div>
    )
}

export default PizzaPage