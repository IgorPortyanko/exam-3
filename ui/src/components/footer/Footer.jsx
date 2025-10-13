
import FooterInfo from './FooterInfo'
import FooterMenu from './FooterMenu'
import FooterContacts from './FooterContacts'

const Footer = () => {

    return(
        <footer className="footer bg-[#a1a096] p-4 ">
            <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center sm:flex-row sm:flex-wrap sm:justify-around">
                <FooterInfo/>
                <FooterMenu/>
                <FooterContacts/>
            </div>
        </footer>
    )
}

export default Footer