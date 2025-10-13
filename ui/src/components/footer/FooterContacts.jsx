import {FacebookOutlined, XOutlined, InstagramOutlined } from '@ant-design/icons'

const FooterContacts = () => {

    return (
        <div className="footer-contacts">
            <h3 className='font-bold text-xl'>Контакти</h3>
            <ul className="footer-list">
                <li>(096) 555 44 33</li>
                <li>(050) 555 44 33</li>
                <li>ruta-pizza@gmail.com</li>
                <li>Київ, пр. Берестейський 22</li>
                <li>
                    <FacebookOutlined style={{ fontSize: '24px', marginRight: '20px' }} />
                    <XOutlined style={{ fontSize: '24px', marginRight: '20px' }} />
                    <InstagramOutlined style={{ fontSize: '24px' }} />
                </li>
            </ul>
        </div>
    )
}

export default FooterContacts