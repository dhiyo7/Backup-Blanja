import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as styles from './style.js'


export default class CarouselComponent extends Component {
  render() {
    const settings = {
      dots: true,
      centerMode: true,
      centerPadding: '80px',
      slidesToShow: 2,
      lazyload: 'ondemand',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '20px',
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '20px',
            slidesToShow: 1
          }
        }
      ]
    };
    return (
      <div style={{ marginTop: '150px' }}>
        <Slider {...settings}>
          <div>
            <img
              style={styles.style.carouselItemTwo}
              src="https://res.cloudinary.com/devloops7/image/upload/v1605457356/newBlanja/Pi7compressedcard2_ylx5vi.jpg"
              alt="..." />
              <h1 style={styles.style.centered}>TEXT</h1>
          </div>

          <div>
            <img
              style={styles.style.carouselItemThree}
              src="https://res.cloudinary.com/devloops7/image/upload/v1605457357/newBlanja/Pi7compressedcard4_ucgn9d.jpg"
              alt="..." />
              <h1 style={styles.style.centered}>TEXT 2</h1>
          </div>

          <div>
            <img
              style={styles.style.carouselItemFour}
              src="https://res.cloudinary.com/devloops7/image/upload/v1605457357/newBlanja/Pi7compressedcard3_phv8c5.jpg"
              alt="..." />
          </div>

          <div>
            <img
              style={styles.style.carouselItemOne}
              src="https://res.cloudinary.com/devloops7/image/upload/v1605457356/newBlanja/Pi7compressedcard1_bi8igz.jpg"
              alt="..." />
          </div>
        </Slider>
      </div>
    );
  }
}