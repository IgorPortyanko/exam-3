import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react";
import { promoList } from "../../store/promoSlice";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";

const PromoSlider = () => {
    const { allPromo, isLoading, error } = useSelector((state) => state.promo)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(promoList())
    }, [])

    if (isLoading) return <p className="text-center text-3xl text-gray-500 mt-10">Завантаження...</p>;
    if (error) return <p className="text-center text-red-500 mt-10">Помилка: {error}</p>;

    return (
        <div className="relative z-0 mb-5">
            <Swiper
                spaceBetween={15}
                slidesPerView={1.6}
                centeredSlides={true}
                modules={[Navigation, Pagination, A11y, Autoplay]}
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{delay: 3000}}
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