
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'


import instagram from '../../../images/icons/instagram.svg'
import vk from '../../../images/icons/vk.svg'
import facebook from '../../../images/icons/facebook.svg'
import './headerNav.css'

import About from '../../../pages/About'

const HeaderNav = ({menuToggle}) =>{
    
    return(
        <>
            <div className="header__nav">
                <div className="container">
                    <div className="haeder__nav-categories categories" onClick={menuToggle}>
                        <div className="catalog-hamburger">
                            <span className="line"></span>
                            <span className="line"></span>
                            <span className="line"></span>
                        </div>
                        <div className="categories-txt">Catalog</div>
                    </div>
                    <nav className="header__nav-list">
                        <ul className="list">
                            <li className="item">
                                <Link to="/warhammer" className="link">Wharhammer</Link>
                            </li>
                            <li className="item">
                                <a href="#" className="link">Magic:the Cathering</a>
                            </li>
                            <li className="item">
                                <a href="#" className="link">Мероприятия</a>
                            </li>
                            <li className="item">
                                <Link to='/about' className="link">О центре</Link>
                            </li>
                            <li className="item">
                                <a href="#" className="link">Контакты</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="header__nav-social">
                        <div className="instagram"><img src={instagram} alt="instagram" /></div>
                        <div className="vk"><img src={vk} alt="vk" /></div>
                        <div className="facebook"><img src={facebook} alt="facebook" /></div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default HeaderNav;