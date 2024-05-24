import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
  return (
    <div>
         <h2 className='text-black font-semibold text-7xl m-10 text-center font-Roboto
'>Read Our Blogs</h2>
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
        
      <SwiperSlide>
        <img className='' width={300} height={100} src='https://static-00.iconduck.com/assets.00/nodejs-icon-2048x2048-rueyo8fw.png' />
   <h1 className='m-4 font-bold'>NodeJs</h1>
   <p className='text-justify m-2'>
   Node.js® is a free, open-source,
   <br /> cross-platform 
   JavaScript runtime 
   <br />environment 
   </p>
      </SwiperSlide>
      <SwiperSlide> <img className='' width={300} height={100} src='https://static-00.iconduck.com/assets.00/nodejs-icon-2048x2048-rueyo8fw.png' />
   <h1 className='m-4 font-bold'>NodeJs</h1>
   <p className='text-justify m-2'>
   Node.js® is a free, open-source,
   <br /> cross-platform 
   JavaScript runtime 
   <br />environment 
   </p></SwiperSlide>
      <SwiperSlide> <img className='' width={300} height={100} src='https://static-00.iconduck.com/assets.00/nodejs-icon-2048x2048-rueyo8fw.png' />
   <h1 className='m-4 font-bold'>NodeJs</h1>
   <p className='text-justify m-2'>
   Node.js® is a free, open-source,
   <br /> cross-platform 
   JavaScript runtime 
   <br />environment 
   </p></SwiperSlide>
      <SwiperSlide> <img className='' width={300} height={100} src='https://static-00.iconduck.com/assets.00/nodejs-icon-2048x2048-rueyo8fw.png' />
   <h1 className='m-4 font-bold'>NodeJs</h1>
   <p className='text-justify m-2'>
   Node.js® is a free, open-source,
   <br /> cross-platform 
   JavaScript runtime 
   <br />environment 
   </p></SwiperSlide>
      ...
    </Swiper>
    </div>
  );
};