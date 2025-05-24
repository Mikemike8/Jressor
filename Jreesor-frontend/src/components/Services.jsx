import React from 'react';
import { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import camp from "../assets/alexandre-dinaut-RLgk20TT_6Y-unsplash.jpg";
import point from "../assets/photo-1603738115219-d2d66074819d.avif";
import legal from "../assets/pexels-photo-327533.jpeg";

// Example images for your services
const services = [
  {
    title: "Commercial Debt Collection",
    description: "Recover outstanding debts efficiently with our expert commercial debt collection solutions tailored to your business needs.",
    img: camp,
  },
  {
    title: "Fleet Debt Recovery",
    description: "Specialized debt recovery services for trucking fleets to keep your operations moving without financial disruption.",
    img: point,
  },
  {
    title: "Legal Support",
    description: "Comprehensive legal assistance to ensure compliance and support during the debt recovery process.",
    img: legal,
  },
];

const ServicesOverview = () => {
      const paginationRef = useRef(null);
  return (
  <section className="mx-auto px-6 py-16 max-w-5xl">
      <h2 className="text-4xl md:text-5xl font-serif text-center mb-10 tracking-wide">
        Reliable expertise to drive your greatest success
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          el: paginationRef.current,
          clickable: true,
        }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        spaceBetween={30}
        slidesPerView={1}
        loop
        onBeforeInit={(swiper) => {
          // This fixes swiper not finding the pagination element on first init
          swiper.params.pagination.el = paginationRef.current;
          swiper.pagination.init();
          swiper.pagination.update();
        }}
        className="relative rounded-lg shadow-lg"
      >
        {services.map((service, index) => (
        
        
        <SwiperSlide
  key={index}
  className="relative w-full rounded-lg overflow-hidden shadow-md"
>
  <img
    src={service.img}
    alt={service.title}
    className="w-full h-[400px] object-cover"
  />
  <div
    className="absolute bottom-0 left-0 w-full bg-black/5 p-4"
    style={{ height: "25%" }} // covers 35% height of the card
  >
    <h3
      className="text-white font-semibold"
      style={{ fontSize: "1.75rem", lineHeight: 1.3 }}
    >
      {service.title}
    </h3>
    <p
      className="text-white"
      style={{ fontSize: "1rem", lineHeight: 1.6, marginTop: "0.5rem" }}
    >
      {service.description}
    </p>
  </div>
</SwiperSlide>

        ))}

        {/* Navigation Buttons */}
        <div className="swiper-button-prev !w-10 !h-10 !rounded-full !flex !items-center !justify-center !text-white !shadow-md hover:!bg-gray-800 transition-colors"></div>
        <div className="swiper-button-next !w-10 !h-10 !rounded-full !flex !items-center !justify-center !text-white !shadow-md hover:!bg-gray-800 transition-colors"></div>
      </Swiper>

      {/* Pagination dots container */}
      <div ref={paginationRef} className="custom-swiper-pagination mt-6 flex justify-center"></div>
    </section>



  );
};

export default ServicesOverview;
