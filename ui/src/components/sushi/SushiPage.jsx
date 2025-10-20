import { useDispatch, useSelector } from 'react-redux'
import { sushiList } from '../../store/sushiSlice'
import { useEffect } from 'react'
import SushiMenuCard from './SushiMenuCard'

const SushiPage = () => {
    const { allSushi, isLoading, error } = useSelector((state) => state.sushi)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(sushiList())
    }, [])

    if (isLoading) return <p className="text-center text-3xl text-gray-500 mt-10">Завантаження...</p>;
    if (error) return <p className="text-center text-red-500 mt-10">Помилка: {error}</p>;

    return(
        <div className='p-4 max-w-[1200px] mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
           { allSushi?.map((elem) => <SushiMenuCard key={elem.id}  {...elem}/>)}
        </div>
    )
}

export default SushiPage