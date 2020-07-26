import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import style from "./carousel.module.scss";

export default function SpecializationCarousel() {
  const [progIcons, setProgIcons] = useState([
    {
      alt: "java",
      src: require("../../../../images/static_files/specialization_icons/java.svg"),
    },
    {
      alt: "react",
      src: require("../../../../images/static_files/specialization_icons/react.svg"),
    },
    {
      alt: "css",
      src: require("../../../../images/static_files/specialization_icons/css.svg"),
    },
    {
      alt: "angular",
      src: require("../../../../images/static_files/specialization_icons/angular.svg"),
    },
    {
      alt: "spring",
      src: require("../../../../images/static_files/specialization_icons/spring.svg"),
    },
    {
      alt: "strapi",
      src: require("../../../../images/static_files/specialization_icons/strapi.svg"),
    },
    {
      alt: "js",
      src: require("../../../../images/static_files/specialization_icons/js.png"),
    },
  ]);



  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}
    >
      <Carousel
        responsive={responsive}
        ssr={true}
        infinite={true}
        transitionDuration={500}
        autoPlay={true}
        autoPlaySpeed={1200}
        // customTransition="all .5"
        transitionDuration={600}
        arrows={false}
        containerClass={style.carouselContainer}
        itemClass="carousel-item"
      >
        {progIcons.map((obj, index) => {
          return (
            <div key={index}>
              <img src={obj.src} alt={obj.alt} height={48} width={48}></img>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
