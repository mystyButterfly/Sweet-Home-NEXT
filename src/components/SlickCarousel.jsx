'use client'
import React from 'react';
import Slider from 'react-slick';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const FavoriteCarousel = ({ favorites }) => {

  // Settings for the slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,  // Number of items to show at once
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <p>Popular Products</p>
      <Slider {...settings}>
        {favorites.map((fav) => (
          <Link href={`/product/${fav.id}`} key={uuidv4()}>
            <div className="h-product">
              <span title={fav.title}>
                <p>{fav.title}</p>
              </span>
              <img src={fav.imageSmall} alt={fav.title} />
              <h3>${fav.price}</h3>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default FavoriteCarousel;
