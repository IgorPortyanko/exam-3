import { useDispatch, useSelector } from 'react-redux'
import { rollsList } from '../../store/rollsSlice'
import { useEffect } from 'react'
import RollsMenuCard from './RollsMenuCard'

const RollsPage = () => {
    const { allRolls, isLoading, error } = useSelector((state) => state.rolls)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(rollsList())
    }, [])

    if (isLoading) return <p className="text-center text-3xl text-gray-500 mt-10">Завантаження...</p>;
    if (error) return <p className="text-center text-red-500 mt-10">Помилка: {error}</p>;

    return(
        <div className='p-4 max-w-[1200px] mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
           { allRolls?.map((elem) => <RollsMenuCard key={elem.id}  {...elem}/>)}
        </div>
    )
}

export default RollsPage