import React from "react";
import { isDesktop } from 'react-device-detect';
import "./CharacterSlider.scss";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';


export default function CharacterSlider() {

    const characters = [
        {file: "./WEB-fishboy.png"},
        {file: "./WEB-robin.png"},
        {file: "./WEB-gus.png"},
        {file: "./WEB-romeo.png"},
        {file: "./WEB-valentina.png"},
        {file: "./WEB-vet.png"},
        {file: "./WEB-botanica.png"},
        {file: "./WEB-sr_toledo.png"},
        {file: "./WEB-Alma.png"},
        {file: "./WEB-manchitas.png"},
        {file: "./WEB-flora.png"},
        {file: "./WEB-celeste.png"},
        {file: "./WEB-emi.png"},
        {file: "./WEB-murphy.png"},
        {file: "./WEB-lucky.png"},
        {file: "./WEB-marina.png"},
        {file: "./WEB-isaac.png"}
    ]

    if (true) {
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
                                <img src={d.file} alt=""/>
                            </SwiperSlide>;
                        })}
                    </Swiper>
                </div>
            </div>);
    } else {
        return (<></>);
    }
}