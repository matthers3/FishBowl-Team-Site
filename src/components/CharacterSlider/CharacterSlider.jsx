import React from "react";
import { isDesktop } from 'react-device-detect';
import "./CharacterSlider.scss";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';


export default function CharacterSlider() {

    const characters = [
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {}
    ]
    if (isDesktop) {
        //Desktop.
        return (
            <div className="character-slider-container">
                <h1>THE COOLEST CAST</h1>

                <div class="slider-wall" style={{backgroundImage: `url(./MURALLA-FULL-CAST.png)`}}>
                    <Swiper
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: false
                        }}
                        simulateTouch={true}
                        slidesPerView={9}
                        loop={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        >
                        {characters.map((d) => {
                            return <SwiperSlide>
                                <img src={"./fishboy.png"} alt=""/>
                            </SwiperSlide>;
                        })}
                    </Swiper>
                </div>
            </div>);
    } else {
        return (<></>);
    }
}