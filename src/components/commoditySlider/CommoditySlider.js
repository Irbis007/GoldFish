
import CommodityCart from "./commodityCart/CommodityCart"

import cartImage1 from '../../images/cart-image1.jpg'
import cartImage2 from '../../images/cart-image2.jpg'
import cartImage3 from '../../images/cart-image3.jpg'
import React, { Component } from "react";
import Slider from "react-slick";

import './commoditySlider.css'


import "../../components/slider/slick-1.8.1/slick/slick.css"; 
import "../../components/slider/slick-1.8.1/slick/slick-theme.css";


export default class CommoditySlider extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const settings = {
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1110,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: false,
              dots: false
            }
          },
          {
            breakpoint: 870,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 605,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };
    return (
        <div >
            <div className="container">
                <div className="commodity__slider-title">{this.props.title}</div>
                <div className="commodity__slider">
                    <Slider {...settings}>
                    <div className="commodity__slide-wrapper">
                        <div className="slide__block">
                            <h3><CommodityCart src={cartImage1} 
                                    alt={'cart image'} 
                                    cartTitle={"Warhammer 40,000: Chaos Space Marines"} 
                                    newPrice={'3657'}
                                    oldPrice={'4350'}
                                    discountSlider={this.props.discountSlider}
                                  /></h3>
                        </div>
                     </div>
                    <div className="commodity__slide-wrapper">
                        <div className="slide__block">
                            <h3><CommodityCart src={cartImage2} 
                                    alt={'cart image'} 
                                    cartTitle={"On Mars"} 
                                    newPrice={'3657'}
                                    oldPrice={'4350'}
                                    discountSlider={this.props.discountSlider}
                                  /></h3>
                        </div>
                     </div>
                    <div className="commodity__slide-wrapper">
                        <div className="slide__block">
                            <h3><CommodityCart src={cartImage3} 
                                    alt={'cart image'} 
                                    cartTitle={"Broken Realms: Horrek's Dreadlance"} 
                                    newPrice={'3657'}
                                    oldPrice={'4350'}
                                    discountSlider={this.props.discountSlider}
                                  /></h3>
                        </div>
                     </div>
                    <div className="commodity__slide-wrapper">
                        <div className="slide__block">
                            <h3><CommodityCart src={cartImage1} 
                                    alt={'cart image'} 
                                    cartTitle={"Warhammer 40,000: Chaos Space Marines"} 
                                    newPrice={'3657'}
                                    oldPrice={'4350'}
                                    discountSlider={this.props.discountSlider}
                                  /></h3>
                        </div>
                     </div>
                    <div className="commodity__slide-wrapper">
                        <div className="slide__block">
                            <h3><CommodityCart src={cartImage2} 
                                    alt={'cart image'} 
                                    cartTitle={"Broken Realms: Horrek's Dreadlance"} 
                                    newPrice={'3657'}
                                    oldPrice={'4350'}
                                    discountSlider={this.props.discountSlider}
                                  /></h3>
                        </div>
                     </div>
                    <div className="commodity__slide-wrapper">
                        <div className="slide__block">
                            <h3><CommodityCart src={cartImage3} 
                                    alt={'cart image'} 
                                    cartTitle={"On Mars"} 
                                    newPrice={'3657'}
                                    oldPrice={'4350'}
                                    discountSlider={this.props.discountSlider}
                                  /></h3>
                        </div>
                     </div>
                    <div className="commodity__slide-wrapper">
                        <div className="slide__block">
                            <h3><CommodityCart src={cartImage1} 
                                    alt={'cart image'} 
                                    cartTitle={"Warhammer 40,000: Chaos Space Marines"} 
                                    newPrice={'3657'}
                                    oldPrice={'4350'}
                                    discountSlider={this.props.discountSlider}
                                  /></h3>
                        </div>
                     </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
  }
}