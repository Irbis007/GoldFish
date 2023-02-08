import ButtonComponent from '../../button/Button'

import './commodityCart.css'
import maxPlayers from '../../../images/icons/max-players.svg'
import gameTime from './../../../images/icons/game-time.svg'
import cart from '../../../images/icons/commodity-cart.svg'


const CommodityCart = ({src, alt, cartTitle, oldPrice, newPrice, discountSlider}) =>{

    let clas = ''
    let price = ''
    if(discountSlider){
      clas = ' discount__slide'
      price = (oldPrice || '') + ' ₽'
    } else{
      clas = ''
    }
    return(
        <div className={"commodity__cart cart" + clas}>
            <div className="cart-img"><img src={src} alt={alt}/></div>
            <div className="cart-instruction instruction">
                <div className="instruction-max__players">
                    <div className="max__players-icon"><img src={maxPlayers} alt='max-players'/></div>
                    2-4
                </div>
                <div className="instruction-game__time">
                    <div className="game__time-icon"><img src={gameTime} alt='game-time'/></div>
                    30-60
                </div>
                <div className="instruction-min__age">+18</div>
            </div>
            <div className="cart-body">
                <div className="cart-title">{cartTitle}</div>
                <div className="cart-prices">
                    <div className="old-price">{price}</div>
                    <div className="new-price">{newPrice + ' ₽'}</div>
                </div>
                <ButtonComponent classes={'button commodity__slider-button'}>
                    Add to cart <div className="button-cart"><img src={cart} alt="" /></div>
                </ButtonComponent>
                <ButtonComponent classes={'button commodity__slider-button button__transparent'}>
                    Buy in 1 click
                </ButtonComponent>
            </div>
        </div>
    )
}

export default CommodityCart;