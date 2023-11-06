import React from 'react';
import image3 from "./3.jpg"
import "./Thirdpage.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Thirdpage() {
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
                                <div className='Thirdpage' >바선생 앱 내부사진 </div>
                                <Swiper
                                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                                    spaceBetween={50}
                                    slidesPerView={1}
                                    navigation
                                    pagination={{ clickable: true }}
                                    scrollbar={{ draggable: true }}
                                >
                                    <SwiperSlide><img src="https://source.unsplash.com/random/600x400?sig=1" /></SwiperSlide>
                                    <SwiperSlide><img src="https://source.unsplash.com/random/600x400?sig=2" /></SwiperSlide>
                                    <SwiperSlide><img src="https://source.unsplash.com/random/600x400?sig=3" /></SwiperSlide>
                                    <SwiperSlide><img src="https://source.unsplash.com/random/600x400?sig=4" /></SwiperSlide>
                                    <SwiperSlide><img src="https://source.unsplash.com/random/600x400?sig=5" /></SwiperSlide>
                                </Swiper>
                            </div>
                        </div>

                    </div>
                </div>
            </section >
        </>

    );
};

export default Thirdpage;
