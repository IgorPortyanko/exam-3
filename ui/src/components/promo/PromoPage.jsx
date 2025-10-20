import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react";
import { promoList } from "../../store/promoSlice";
import PromoItem from "./PromoItem";

const PromoPage = () => {
    const { allPromo, isLoading, error } = useSelector((state) => state.promo)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(promoList())
    }, [])

    if (isLoading) return <p className="text-center text-3xl text-gray-500 mt-10">Завантаження...</p>;
    if (error) return <p className="text-center text-red-500 mt-10">Помилка: {error}</p>;

    return (
        <div className="p-4 max-w-[1200px] mx-auto">
            {allPromo.map(promo => (
                <PromoItem key={promo.id} promo = {promo}/>
            ))}
        </div>
    )
}

export default PromoPage