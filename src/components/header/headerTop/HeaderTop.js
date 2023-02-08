
import { Link } from 'react-router-dom';

import logo from '../../../images/icons/logo.svg';
import search from '../../../images/icons/search.svg';
import phone from '../../../images/icons/phone.svg'
import profile from '../../../images/icons/profile.svg'
import cart from '../../../images/icons/cart.svg'

import './headerTop.css';
import '../../basicStyles/basicStyles.css';


const HeaderTop = ({menuToggle, menuActive}) =>{



    let classe = ''
    if(menuActive){
        classe = ' active'
    } else {
        classe = ''
    }
    return(
        <div className="header__top">
            <div className="container">
                <div className={"hamburger" + classe} onClick={menuToggle}>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                </div>
                <Link to='/' className="header__top-logo"><img src={logo} alt="logo"/></Link>
                <div className="header__top-search search">
                    <input type="text" className="search-txt" placeholder="Find a game"/>
                    <button className="search-btn"><img src={search} alt="search" className="search-icon"/></button>
                </div>
                <div className="header__top-phone">
                    <div className="phone__icon-box">
                        <img src={phone} alt="phone" />
                    </div>
                    <a href="number:77777777777">+7 (777) 777-77-77</a>
                </div>
                <div className="header__top-icons">
                    <div className="profile-icon"><Link to={'/personalArea'}><img src={profile} alt="profile"/></Link></div>
                    <div className="cart-icon"><img src={cart} alt="cart" /></div>
                </div>
            </div>
        </div>
    )
}


export default HeaderTop;