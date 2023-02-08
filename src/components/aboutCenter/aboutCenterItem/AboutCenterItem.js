
import './aboutCenterItem.css'


const AboutCenterItem = ({title, descr, src1, src2, reverce}) =>{
    let clases = ''
    if(reverce){
        clases = 'reverce'
    }
    return(
        <div className={"about__center-item item " + clases}>
            <div className="item__title">{title}</div>
            <div className="item__descr">{descr}</div>
            <div className="item__images">
                <img src={src1} alt="about center img1" />
                <img src={src2} alt="about center img2" />
            </div>
        </div>
    )
}

export default AboutCenterItem;