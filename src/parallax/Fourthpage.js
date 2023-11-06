import React from 'react';
import image3 from "./3.jpg"
import "./Thirdpage.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Fourthpage() {
    return (
        <>
            <section >
                <div className="outer">
                    <div className="inner">
                        <div
                            className="bg one"
                            style={{ backgroundImage: `url(${image3})` }} // 배경이미지변경
                        >
                            <div className='ThirdpageCover'>
                                <div className='Thirdpage' >학생 앱 내부사진 </div>
                                <Swiper
                                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                                    spaceBetween={50}
                                    slidesPerView={1}
                                    navigation
                                    pagination={{ clickable: true }}
                                    scrollbar={{ draggable: true }}
                                >
                                    <SwiperSlide><img alt='google' src="https://source.unsplash.com/random/600x400?sig=6" /></SwiperSlide> 
                                    <SwiperSlide><img alt='google' src="https://source.unsplash.com/random/600x400?sig=7" /></SwiperSlide>
                                    <SwiperSlide><img alt='google' src="https://source.unsplash.com/random/600x400?sig=8" /></SwiperSlide>
                                    <SwiperSlide><img alt='google' src="https://source.unsplash.com/random/600x400?sig=9" /></SwiperSlide>
                                    <SwiperSlide><img alt='google' src="https://source.unsplash.com/random/600x400?sig=10" /></SwiperSlide>
                                </Swiper>
                            </div>
                        </div>

                    </div>
                </div>
            </section >
        </>

    );
};

export default Fourthpage;
