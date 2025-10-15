import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react";
import { promoList } from "../../store/promoSlice";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";

const PromoSlider = () => {

    const allPromo = useSelector(state => state.promo.promo)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(promoList())
    }, [dispatch])

    return (
        <div className="relative z-0 mb-5">
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                modules={[Navigation, Pagination, A11y]}
                pagination={{ clickable: true }}
                loop={true}
            >
                {allPromo.map(promo => (
                    <SwiperSlide key={promo.id}>
                        <img
                            src={`src/assets/img/promotion/${promo.img}`}
                            alt={promo.title || 'promotion'}
                            className="w-full h-auto object-cover rounded-lg"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default PromoSlider