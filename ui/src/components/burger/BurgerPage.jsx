import { useDispatch, useSelector } from 'react-redux'
import { burgerList } from '../../store/burgerSlice'
import { useEffect } from 'react'
import BurgerMenuCard from './BurgerMenuCard'

const BurgerPage = () => {

    const allBurger = useSelector((state) => state.burger.burger)
    const dispatch = useDispatch()

    const getAllBurger = () => {
        dispatch(burgerList())
    }

    useEffect(() => {
        getAllBurger()
    }, [dispatch])

    return(
        <div className='p-4 max-w-[1200px] mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
           { allBurger?.map((elem) => <BurgerMenuCard key={elem.id}  {...elem}/>)}
        </div>
    )
}

export default BurgerPage