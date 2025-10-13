import { useDispatch, useSelector } from 'react-redux'
import { setsList } from '../../store/setsSlice'
import { useEffect } from 'react'
import SetsMenuCard from './SetsMenuCard'

const SetsPage = () => {

    const allSets = useSelector((state) => state.sets.sets)
    const dispatch = useDispatch()

    const getAllSets = () => {
        dispatch(setsList())
    }

    useEffect(() => {
        getAllSets()
    }, [dispatch])

    return(
        <div className='p-4 max-w-[1200px] mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
           { allSets?.map((elem) => <SetsMenuCard key={elem.id}  {...elem}/>)}
        </div>
    )
}

export default SetsPage