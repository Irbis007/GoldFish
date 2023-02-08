
import ContactsForm from './contactsSectionForm/ContactsForm';

import './contactsSection.css'

import phone from '../../images/icons/contact-phone.svg'
import message from '../../images/icons/contact-message.svg'
import address from '../../images/icons/contact-address.svg'
import time from '../../images/icons/contact-time.svg'

const ContactsSection = () =>{

    return(
        <div className="contacts__section">
            <div className="container">
                <div className="contacts__block contacts">
                    <div className="contacts__title title">Contacts</div>
                    <div className="contacts__phone phone contact__block">
                        <div className="phone__img contact__img"><img src={phone} alt="phone" /></div>
                        <div className="phone__text"><span className='text__bold'>Phone:</span>+7 (495) 911-10-11</div>
                    </div>
                    <div className="contacts__email email contact__block">
                        <div className="email__img contact__img"><img src={message} alt="message" /></div>
                        <div className="email__text"><span className='text__bold'>E-mail:</span>msk@magicgoldfish.ru</div>
                    </div>
                    <div className="contacts__address address contact__block">
                        <div className="address__img contact__img"><img src={address} alt="address" /></div>
                        <div className="address__text"><span className='text__bold'>The address:</span>Moscow, metro station Taganskaya (ring) Maly Drovyanoy lane 6</div>
                    </div>
                    <div className="contacts__time time contact__block">
                        <div className="time__img contact__img"><img src={time} alt="time" /></div>
                        <div className="time__text"><span className='text__bold'>Club working hours:</span>11:00-23:00 (daily)</div>
                    </div>
                </div>
                <div className="map__block">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4491.710667314741!2d37.650915578801765!3d55.743642522203544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46962fabc47c19a5%3A0x36da3429d8e81216!2sGoldFish!5e0!3m2!1sru!2str!4v1661814177661!5m2!1sru!2str"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="form__block">
                    <div className="form__title title">Do you have any questions?</div>
                    <ContactsForm/>
                </div>
            </div>
        </div>
    )
}

export default ContactsSection;