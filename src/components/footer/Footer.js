import { Link } from 'react-router-dom';


import ButtonComponent from '../button/Button';

import './footer.css'

import logo from '../../images/icons/logo.svg'
import instagram from '../../images/icons/instagram.svg'
import fb from '../../images/icons/facebook.svg'
import vk from '../../images/icons/vk.svg'
import mir from '../../images/icons/mir.svg'
import visa from '../../images/icons/visa.svg'
import mastercart from '../../images/icons/mastercart.svg'

const Footer = () =>{
    return(
        <div className="footer">
            <div className="container footer__top">
                <div className="footer__logo">
                    <Link to={'/'}><img src={logo} alt="footer logo" /></Link>
                </div>
                <div className="footer__address">
                    Moscow, metro station Taganskaya Maly Drovyanoy Lane 6
                </div>
                <div className="footer__catalog">
                    <div className="footer__catalog-title">Catalog</div>
                    <ul className='list'>
                        <li className="item">
                            <a href="#" className="link">Warhammer 40000</a>
                        </li>
                        <li className="item">
                            <a href="#" className="link">Table games</a>
                        </li>
                        <li className="item">
                            <a href="#" className="link">Magic: the Gathering</a>
                        </li>
                        <li className="item">
                            <a href="#" className="link">Game accessories</a>
                        </li>
                        <li className="item">
                            <a href="#" className="link">Paints</a>
                        </li>
                        <li className="item">
                            <a href="#" className="link">Accessories for modeling</a>
                        </li>
                    </ul>
                </div>
                <nav className="footer__nav">
                    <ul className="list">
                        <li className="item">
                            <a href="#" className="link">Club rules</a>
                        </li>
                        <li className="item">
                            <a href="#" className="link">Events</a>
                        </li>
                        <li className="item">
                            <a href="#" className="link">About us</a>
                        </li>
                        <li className="item">
                            <a href="#" className="link">Contacts</a>
                        </li>
                        <li className="item">
                            <a href="#" className="link">Blog</a>
                        </li>
                    </ul>
                </nav>
                <div className="footer__instructions">
                    <ul className="list">
                        <li className="item">
                            <a href="#" className="link">Payment and delivery</a>
                        </li>
                        <li className="item">
                            <a href="#" className="link">Warranty and returns</a>
                        </li>
                    </ul>
                </div>
                <div className="footer__button">
                    <ButtonComponent classes={'button button__transparent fos__19 button__radius'}>Request a call</ButtonComponent>
                </div>
                <div className="footer__contacts">
                    <a href="#" className="footer__phone">+7 (495) 911-10-11</a>
                    <a href="#" className="footer__email">msk@magicgoldfish.ru</a>
                    <div className="footer__social">
                        <div className="instagram"><a href="#"><img src={instagram} alt="instagram" /></a></div>
                        <div className="vk"><a href="#"><img src={fb} alt="facebook" /></a></div>
                        <div className="fb"><a href="#"><img src={vk} alt="vk" /></a></div>
                    </div>
                </div>
            </div>
            <hr className="footer__line" />
            <div className="container subfooter">
                <div className="subfooter__policy">© 2021 MagicGoldFish.ru <br/> <a href="#" className='subfooter__link'>Privacy Policy</a></div>
                <div className="subfooter__cart">
                    <div className="cart__mir"><img src={mir} alt="cart mir" /></div>
                    <div className="cart__visa"><img src={visa} alt="cart visa" /></div>
                    <div className="cart__mastercart"><img src={mastercart} alt="cart mastercart" /></div>
                </div>
                <div className="subfooter__agreement">The content is not a public offer <br/> <a href="#" className='subfooter__link'>User Agreement</a></div>
                <div className="subfooter__policy-mobile">Политика конфиденциальности Содержимое не является публичной офертой Пользовательское соглашение © 2021 MagicGoldFish.ru</div>
            </div>
        </div>
    )
}

export default Footer;