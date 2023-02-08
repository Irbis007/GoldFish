
import ButtonComponent from '../button/Button'
import InterestingInfoCart from './interestingInfoCart/InterestingInfoCart'


import './interestingInfo.css'
import infoImage1 from '../../images/info-image1.jpg'
import infoImage2 from '../../images/info-image2.jpg'
import infoImage3 from '../../images/info-image3.jpg'

const InterestingInfo = () =>{

    return(
        <div className="interesting__info">
            <div className="container">
                <div className="interesting__info-title">More interesting information</div>
                    <div className="interesting__info-content">
                        <div className="interesting__info-wrapper">
                            <InterestingInfoCart src={infoImage1} 
                                alt={'infoImage1'} 
                                title={'Aeronautics Imperialis: An Introduction to the Game'} 
                                subtitle={"Let's get acquainted with the rules of the game in detail"}
                            />
                            <InterestingInfoCart src={infoImage2} 
                                alt={'infoImage2'} 
                                title={'The best board games on Steam to play with quarantined friends'} 
                                subtitle={'Rated 2021 '}
                            />
                            <InterestingInfoCart src={infoImage3} 
                                alt={'infoImage3'} 
                                title={'Desired but unlikely releases'} 
                                subtitle={'A small list of "what if ..." '}
                            />
                        </div>
                    </div>
                <div className="interesting__info-button">
                    <ButtonComponent classes={'button button__transparent big__button'}>Learn more</ButtonComponent>
                </div>
            </div>
        </div>
    )
}

export default InterestingInfo;