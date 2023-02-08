


import SimpleSlider from "../components/slider/Slider";
import Category from "../components/category/Category";
import CommoditySlider from "../components/commoditySlider/CommoditySlider";
import Events from "../components/events/Events";
import InterestingInfo from "../components/interestingInfo/InterestingInfo";
import AboutGoldFish from "../components/aboutGolgFish/AboutGoldFish";
import ContactsSection from "../components/contactsSection/ContactsSection";

const Home = () =>{

    return(
        <div className="home">
            <SimpleSlider/>
            <Category/>
            <CommoditySlider discountSlider={false} title={'Hurry up to buy'}/>
            <CommoditySlider discountSlider={true} title={'Special offers'}/>
            <Events/>
            <InterestingInfo/>
            <AboutGoldFish/>
            <ContactsSection/>
        </div>
    )
}

export default Home;