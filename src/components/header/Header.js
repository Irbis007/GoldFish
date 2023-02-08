import {Component} from 'react'



import HeaderTop from "./headerTop/HeaderTop";
import HeaderNav from "./headerNav/HeaderNav";
import Menu from '../menu/Menu'

import './header.css'


class Header extends Component{
    state = {
        menuActive: false
    }


    toggleMenu = () =>{
        this.setState(({menuActive}) => ({
            menuActive: !menuActive
        }))
    } 

    render() {
        return(
            <div className="header">
                <HeaderTop menuToggle={this.toggleMenu} menuActive={this.state.menuActive}/>
                <HeaderNav menuToggle={this.toggleMenu}/>
                <Menu menuActive={this.state.menuActive} menuToggle={this.toggleMenu}/>
            </div>
        )
    }
}

export default Header;