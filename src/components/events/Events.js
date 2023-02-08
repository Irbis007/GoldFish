

import EventCart from './eventsCart/EventsCart'
import ButtonComponent from '../button/Button'

import './events.css'
import cartImage1 from '../../images/events-image1.jpg'
import cartImage2 from '../../images/events-image2.jpg'

const Events = () =>{

    return (
        <div className="events">
            <div className="container">
                <div className="events__title">Upcoming events</div>
               <div className="events__content">
                    <div className="events__wrapper">
                        <EventCart src={cartImage2} 
                            alt={'Halloween with GoldFish'} 
                            title={'Halloween with GoldFish'} 
                            descr={'We will gather to find out who was the Mafia after all and what will happen to those who were killed..'} 
                            date={'October 31, 2021 19:00'}
                        />
                        <EventCart src={cartImage1} 
                            alt={'Tournament Warhammer'} 
                            title={'Tournament Warhammer'} 
                            descr={'Ready to take on the fierce Warhammer battle? Not? We are you be sure to teach!'} 
                            date={'October 31, 2021 19:00'}
                        />
                    </div>
               </div>
               <div className="events__button">
                    <ButtonComponent classes={'button big__button'}>show more</ButtonComponent>
               </div>
            </div>
        </div>
    )
}

export default Events;