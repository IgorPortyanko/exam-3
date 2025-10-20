import { useDispatch, useSelector } from 'react-redux'
import { setsList } from '../../store/setsSlice'
import { useEffect } from 'react'
import SetsMenuCard from './SetsMenuCard'

const SetsPage = () => {
    const { allSets, isLoading, error } = useSelector((state) => state.sets)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(setsList())
    }, [])

    if (isLoading) return <p className="text-center text-3xl text-gray-500 mt-10">Завантаження...</p>;
    if (error) return <p className="text-center text-red-500 mt-10">Помилка: {error}</p>;

    return(
        <div className='p-4 max-w-[1200px] mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
           { allSets?.map((elem) => <SetsMenuCard key={elem.id}  {...elem}/>)}
        </div>
    )
}

export default SetsPage