import React from "react";
import { BrowserView } from "react-device-detect";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import "./Projects.scss";

export default function Projects() {
    return (
        <div>
            <BrowserView className="desktop-projects">
                <div className="project-title text-big">
                    <div className="orange-text">Alma</div>
                    <div className="right-text"> is NOW in development !</div>
                </div>
                <div className="image-swiper">
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                        spaceBetween={0}
                        slidesPerView={1}
                        autoplay={{
                            delay: 2000,
                        }}
                        loop={true}
                        loopedSlides={5}
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        >
                        <SwiperSlide>
                            <div className="image-cut">
                                <img src="swiper1.JPG"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="image-cut">
                                <img src="swiper2.JPG"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="image-cut">
                                <img src="swiper3.JPG"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="image-cut">
                                <img src="swiper4.JPG"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="image-cut">
                                <img src="swiper5.JPG"/>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="project-close">
                    <div className="soon-text">Coming soon !</div>
                    <div className="pun-text">(you know, like a liar)</div>
                </div>
            </BrowserView>
        </div>
    );
}