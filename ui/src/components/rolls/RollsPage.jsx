import { useDispatch, useSelector } from 'react-redux'
import { rollsList } from '../../store/rollsSlice'
import { useEffect } from 'react'
import RollsMenuCard from './RollsMenuCard'

const RollsPage = () => {

    const allRolls = useSelector((state) => state.rolls.rolls)
    const dispatch = useDispatch()

    const getAllRolls = () => {
        dispatch(rollsList())
    }

    useEffect(() => {
        getAllRolls()
    }, [dispatch])

    return(
        <div className='p-4 max-w-[1200px] mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
           { allRolls?.map((elem) => <RollsMenuCard key={elem.id}  {...elem}/>)}
        </div>
    )
}

export default RollsPage