
import AboutCenterItem from './aboutCenterItem/AboutCenterItem';

import './aboutCenter.css'

import aboutCenter1 from '../../images/about-center1.jpg'
import aboutCenter2 from '../../images/about-center2.jpg'
import aboutCenter3 from '../../images/about-center3.jpg'
import aboutCenter4 from '../../images/about-center4.jpg'


const AboutCenter = () =>{
    return(
        <div className="about__center">
            <div className="container">
                <div className="about__center-title title">О центре</div>
               <div className="about__center-wrapper">
                <AboutCenterItem 
                        title={'Our mission'}
                        descr={'The diverse and rich experience of strengthening and developing the structure largely determines the creation of a development model. Diverse and rich experience consulting with a wide asset allows you to perform important tasks in the development of a personnel training system that meets urgent needs. Everyday practice shows that the beginning of daily work on the formation of a position allows you to perform important tasks in the development of new proposals. Everyday practice shows that the further development of various forms of activity largely determines the creation of new proposals.'}
                        src1={aboutCenter1}
                        src2={aboutCenter2}
                    />
                    <AboutCenterItem
                        title={'Our events'}
                        descr={'It should not be forgotten, however, that the strengthening and development of the structure is an interesting experiment in testing the development model. On the other hand, the implementation of the planned targets to a large extent determines the creation of systems of mass participation.'}
                        src1={aboutCenter3}
                        src2={aboutCenter4}
                        reverce={true}
                    />
               </div>
            </div>
        </div>
    )
}

export default AboutCenter;