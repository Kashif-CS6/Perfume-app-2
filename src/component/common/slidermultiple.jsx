import React from "react";
import Slider from "react-slick";
import data from "../../dumy/data";
import Card from "../card";

const SliderMultiple = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {data.map((item, index) => {
          return (
            <div className="mx-12 md:mx-3 mb-10 md:mb-0">
              <Card
                brand={item.brand}
                name={item.name}
                price={item.price}
                id={item.id}
                rating={item.rating}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SliderMultiple;
