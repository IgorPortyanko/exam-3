import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react";
import { promoList } from "../../store/promoSlice";
import PromoItem from "./PromoItem";

const PromoPage = () => {

    const allPromo = useSelector(state => state.promo.promo)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(promoList())
    }, [dispatch])

    return (
        <div className="p-4 max-w-[1200px] mx-auto">
            {allPromo.map(promo => (
                <PromoItem key={promo.id} promo = {promo}/>
            ))}
        </div>
    )
}

export default PromoPage