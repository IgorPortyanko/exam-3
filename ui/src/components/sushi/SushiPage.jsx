import { useDispatch, useSelector } from 'react-redux'
import { sushiList } from '../../store/sushiSlice'
import { useEffect } from 'react'
import SushiMenuCard from './SushiMenuCard'

const SushiPage = () => {

    const allSushi = useSelector((state) => state.sushi.sushi)
    const dispatch = useDispatch()

    const getAllSushi = () => {
        dispatch(sushiList())
    }

    useEffect(() => {
        getAllSushi()
    }, [dispatch])

    return(
        <div className='p-4 max-w-[1200px] mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
           { allSushi?.map((elem) => <SushiMenuCard key={elem.id}  {...elem}/>)}
        </div>
    )
}

export default SushiPage