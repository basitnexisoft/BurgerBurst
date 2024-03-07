import React from "react";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewCard from "../layouts/ReviewCard";

const Review = () => {
    const data = [
        {
            id: 1,
            desc:  "Lorem ipsum dolor sit amet, consectetur adip. Qui eveniter impedit saepe illo cumque assumenda maxime modi, nam accusanium!",
            name: "Alex Thompson",

        },
        {
          id: 2,
          desc:  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis,tempora quisquam nisi saepe dolorem fugiat Quidem, fugiat? Voluptatum,eum!",
          name: "Emily Rodriguez",
        },
        {
          id: 3,
          desc:  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, corporis!",
          name: "jordan Patel",
        },
        {
          id: 4,
          desc:  "Lorem ipsum dolor sit amet, consectetur adip. Qui eveniter impedit saepe illo cumque assumenda maxime modi, nam accusanium!",
            name: "Morgan Harper",
        },
        {
          id: 5,
          desc:  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis,tempora quisquam nisi saepe dolorem fugiat Quidem, fugiat? Voluptatum,eum!",
            name: "jordan Morales",
        },
    ];

    const setting = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      arrows: false,
      responsive: [
        {
           breakPoint: 1023,
           setting: {
             slidesToShow: 1,
             slidesToScroll: 1,
             infinite: true,
           },
        },
        {
          breakPoint: 768,
          setting: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          },
       },
       {
        breakPoint: 480,
        setting: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        },
     },
      ],
    };
  return (
    <div className=" dark:bg-gray-900 dark:text-secondary">

        {/* heading  */}
        <h1 className=" font-semibold text-4xl text-center text-secondary pt-24">Our Review</h1>

        <div className=" py-10 mx-4 md:mx-0">
          <Slider {...setting} >
              {data.map((item) => (
                  <ReviewCard Key={item.id} name={item.name} desc={item.desc} />
              ))}

          </Slider>
        </div>
    </div>
  );
};

export default Review
