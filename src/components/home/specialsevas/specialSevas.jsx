import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import CampaignCard from './campaignCard';


export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <h2 className='main_text_3' style={{marginTop:80}}> Special Sevas </h2>
        <p className='sub_text' style={{textAlign: 'center',marginBottom:50}}>Let's all of us connect here and create a pure bond by engaging in Seva, Be fully alive by the spirit of existence. </p>
        <Slider {...settings} className='tk_slider'>
          <div>
            <CampaignCard/>
          </div>
          <div>
            <CampaignCard/>
          </div>
          <div>
            <CampaignCard/>
          </div>
          <div>
             <CampaignCard/>
          </div>
          <div>
            <CampaignCard/>
          </div>
          <div>
             <CampaignCard/>
          </div>
          <div>
             <CampaignCard/>
          </div>
          <div>
             <CampaignCard/>
          </div>
        </Slider>
      </div>
    );
  }
}
