

import './interestingInfoCart.css'


const InterestingInfoCart = ({src, alt, title, subtitle}) =>{

    return(
        <div className="info__cart cart">
            <div className="cart-img"><img src={src} alt={alt}/></div>
            <div className="cart-content">
                <div className="cart-title">{title}</div>
                <div className="cart-subtitle">{subtitle}</div>
            </div>
        </div>
    )
}


export default InterestingInfoCart;