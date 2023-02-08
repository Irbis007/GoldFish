

import './aboutGoldFish.css'
import img from '../../images/about-GoldFish.jpg'


const AboutGoldFish = () =>{
    return(
        <div className="about__goldfish-section">
            <div className="container">
                    <div className="about__goldfish-title title">About the game center "GoldFish"</div>
                    <div className="about__goldfish-text">
                    <p className="about__goldfish-p">
                    "GoldFish" is a store where you can buy a great gift for yourself and your loved ones.
                    </p>
                    <p className="about__goldfish-p">
                    The assortment of our store includes thousands of board games for every taste: simple and more difficult, 
                    family and only for adults, for two and for large companies, detective and logic, role-playing and strategic 
                    board games. GoldFish also regularly hosts its own games library: Magic: the Gathering (by Wizards of the 
                    coast) and Warhammer (by Games Workshop) tournaments.
                    </p>
                    <p className="about__goldfish-p">
                    In our store you can find the necessary accessories for your favorite games (protectors for cards and collections),
                    tools for self-decoration and painting of figurines (cases, stands, Vallejo paints, etc.) and much more. 
                    </p>
                    <p className="about__goldfish-p">
                    "GoldFish" is not only a board game store, but also a full-fledged hobby center. Here you can rent tables for 
                    games with friends, take training and master classes on the games you are interested in, make new acquaintances 
                    and join the gaming community!
                    </p>
                </div>
                <div className="about__goldfish-img"><img src={img} alt='about GoldFish' /></div>
            </div>
        </div>
    )
}

export default AboutGoldFish;