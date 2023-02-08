

import './personalAreaAside.css'

const PersonalAreaAside = () =>{
    return(
        <aside className="personal__area-aside">
            <div className="personal__area-title title">Personal Area</div>
            <nav className="personal__area-nav">
               <ul className="list">
                    <li className="item">
                        <a href="#" className="link">Profile</a>
                    </li>
                    <li className="item">
                        <a href="#" className="link">Orders</a>
                    </li>
                    <li className="item">
                        <a href="#" className="link">Events</a>
                    </li>
                    <li className="item">
                        <a href="#" className="link">Settings</a>
                    </li>
               </ul>
            </nav>
        </aside>
    )
}

export default PersonalAreaAside