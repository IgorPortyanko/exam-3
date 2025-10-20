import { EnvironmentOutlined, MailOutlined, PhoneOutlined, ClockCircleOutlined, FacebookOutlined, XOutlined, InstagramOutlined} from '@ant-design/icons'
import ContactForm from './ContactForm'
import MapView from './MapView'

const ContactsPage = () => {

    return (
        <div className="p-4 max-w-[1200px] mx-auto">
            <h2 className="text-3xl font-bold text-center mb-5">Контакти</h2>
            <div className='lg:flex items-center justify-center pb-8'>
                <div className='leading-[2] text-center lg:pl-20 lg:text-left'>
                    <p><ClockCircleOutlined/> 10:00 - 21:00</p>
                    <p><EnvironmentOutlined/> Київ, пр. Берестейський 22</p>
                    <p><PhoneOutlined/> (096) 555 44 33</p>
                    <p><PhoneOutlined/> (050) 555 44 33</p>
                    <p className='mb-3'><MailOutlined/> ruta-pizza@gmail.com</p>
                    <FacebookOutlined style={{ fontSize: '24px', marginRight: '20px', cursor: 'pointer'}} />
                    <XOutlined style={{ fontSize: '24px', marginRight: '20px', cursor: 'pointer' }} />
                    <InstagramOutlined style={{ fontSize: '24px', cursor: 'pointer' }} />
                </div>
                <ContactForm/>
            </div>
            <MapView/>
        </div>
    )
}

export default ContactsPage