import { Component } from 'react';
import { Link } from 'react-router-dom';


import MenuItem from './menuItem/MenuTtem';
import MenuNav from './menuNav/MenuNav';

import './menu.css'


class Menu extends Component{
    constructor(props) {
        super(props)
    }

    render() {
        let active = 'active'
        if(this.props.menuActive){
            active = 'active' 
        } else {
            active = ''
        }
        return(
        <>
           <div className={"background " + active}></div>
            <div className={"menu " + active}>
                <div className="container">
                    <aside className='all__categories'>
                        <div className="all__categories-top">
                            <div className="all__categories-close" onClick={this.props.menuToggle}></div> All categories
                        </div>
                        <div className="all__categories-list categories__list">
                            <MenuItem text={'Table games'} />
                            <MenuItem text={'Warhammer 40000'}/>
                            <MenuItem text={'Magic: the Gathering'}/>
                            <MenuItem text={'Game accessories'}/>
                            <MenuItem text={'Paints'}/>
                            <MenuItem text={'Goods for kids'}/>
                            <MenuItem text={'Modeling accessories'}/>
                        </div>
                        <div className="menu__bottom">
                            <MenuItem text={'Events'}/>
                            <Link to={'/blog'}><MenuItem text={'Blog'}/></Link>
                            <MenuItem text={'About the center'}/>
                            <MenuItem text={'Contacts'}/>
                        </div>
                    </aside>
                    <div className="menu__body">
                        <div className="category__name">Warhammer 40000</div>
                        <MenuNav/>
                    </div>
                </div>
            </div>
        </>
        )
    }
}

export default Menu;