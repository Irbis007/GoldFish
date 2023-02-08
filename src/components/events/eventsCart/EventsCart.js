


import './eventsCart.css'

const EventCart = ({src, alt, title, descr, date}) =>{

    return(
        <div className="event-cart cart">
            <div className="cart-img"><img src={src} alt={alt}/></div>
            <div className="cart-content">
                <div className="cart-title">{title}</div>
                <div className="cart-date">{date}</div>
                <div className="cart-descr">{descr}</div>
            </div>
        </div>
    )
}

export default EventCart