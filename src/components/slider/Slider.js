
import React, { Component } from "react";
import Slider from "react-slick";


import "./slick-1.8.1/slick/slick.css"; 
import "./slick-1.8.1/slick/slick-theme.css";
import './slider.css'
import slide1 from '../../images/slide-1.jpg'
import slide2 from '../../images/slide-2.jpg'
import slide3 from '../../images/slide-3.jpg'


export default class SimpleSlider extends Component {
  render() {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 5000,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        responsive: [
            {
              breakpoint: 767,
              settings: {
                slidesToShow: .7,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows: false
              }
            }
          ]
    };
    return (
      <div className="slider">
        <Slider {...settings}>
          <div className="slide__block">
            <h3 className="slide__wrapper slide1"><img src={slide1} alt="slide1" /></h3>
            <div className="slide__txt slide__content">
                <div className="slider__subtitle ">Самая популярная карточная игра</div>
                <div className="slider__title ">Magic: the Gathering</div>
            </div>
            <button className="slider__button slide__content">Подробнее</button>
          </div>
          <div className="slide__block">
            <h3 className="slide__wrapper slide2"><img src={slide2} alt="slide2" /></h3>
            <div className="slide__txt slide__content">
                <div className="slider__subtitle ">Попробуй игры разных жанров</div>
                <div className="slider__title ">Весь католог </div>
            </div>
          </div>
          <div className="slide__block">
            <h3 className="slide__wrapper slide3"><img src={slide3} alt="slide3" /></h3>
            <div className="slide__txt slide__content">
                <div className="slider__subtitle">Настольная игра варгейм</div>
                <div className="slider__title">Warhmmer games</div>
            </div>
            <button className="slider__button slide__content">Подробнее</button>
          </div>
        </Slider>
      </div>
    );
  }
}