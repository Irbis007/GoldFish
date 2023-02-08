

import ButtonComponent from '../../button/Button';

import './contactsForm.css'

const ContactsForm = () =>{

    return(
        <form className='contacts__form'>
            <label htmlFor="input-name" className='contact__label'>Your name</label>
            <input type="text" 
                className="contact__name contact__input" 
                id='input-name'
                placeholder='Name'
            />
            <label htmlFor="input-phone" className='contact__label'>Your phone number</label>
            <input type="number" 
                className="contact__phone contact__input" i
                d='input-phone'
                placeholder='+7 ___ _______'
            />
            <label htmlFor="input-comment" className='contact__label'>Your comment</label>
            <textarea  id="input-comment" 
                className='contact__comment contact__input'
                placeholder='Comment'
            ></textarea>
            <div className="form__button">
                <ButtonComponent classes={'button fos__19'}>Request a call</ButtonComponent>
            </div>
            <div className="policy">
                    By clicking on the "Request a call" button, <a href="#">I agree to processing of personal data.</a>
                </div>
        </form>
    )
}

export default ContactsForm;