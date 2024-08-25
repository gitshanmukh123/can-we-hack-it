

'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { useState, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import '../styles/Carousel.css';
const App = () => {
  const [stretch, setStretch] = useState(150);
  const image = "https://wallpapers.com/images/featured/valorant-305kescxw5dpup7y.jpg";
  // Function to update stretch based on window width
  const updateStretch = () => {
    const width = window.innerWidth;
    if (width < 640) {
      setStretch(100); // Mobile
    } else if (width < 768) {
      setStretch(150); // Tablet
    } else if (width < 1024) {
      setStretch(500); // Small screens (like laptops)
    } else {
      setStretch(1000); // Large screens (desktops)
    }
  };

  useEffect(() => {
    updateStretch(); // Set initial value
    window.addEventListener('resize', updateStretch); // Update on resize

    return () => {
      window.removeEventListener('resize', updateStretch); // Cleanup on unmount
    };
  }, []); 

  return (
    <div className="container">
      <h1 className="heading">Game Gallery</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        loop={true}
        slidesPerView={'auto'}
        initialSlide={2}
        coverflowEffect={{
          rotate: 50,  // Increase rotation for a more pronounced effect
          stretch: 200, 
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className='swiper_container'
      >
        <SwiperSlide>
          <img src={image} alt="Game1" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={image} alt="Game1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image} alt="Game1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image} alt="Game1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image} alt="Game1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image} alt="Game1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image} alt="Game1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image} alt="Game1" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default App;
