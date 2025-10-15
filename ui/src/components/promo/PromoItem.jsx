
const PromoItem = ({ promo }) => {

    return (
        <div key={promo.id} className=" bg-emerald-100 mb-7 rounded-2xl overflow-hidden md:py-3">
            <h2 className="text-2xl font-black uppercase text-center text-orange-800 bg-emerald-100  p-1 md:text-3xl md:pb-3">{promo.name}</h2>
            <div >
                <img src={`src/assets/img/promotion/${promo.img}`} alt="promo" className="md:pb-3" />
            </div>
            <p className="text-xl md:text-2xl text-center whitespace-pre-line px-1">{promo.describePromo}</p>
        </div>
    )
}

export default PromoItem