import React from 'react';
import SlickSlider from 'react-slick';
import './slider.scss';
import './slider-mobile.scss';

export const Slider = (props: {
    steps: any,
    className?: string,
    arrows?: boolean,
    auto?: boolean,
}) => {
    const defaultConf = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: props.auto,
        autoplaySpeed: 5000,
        arrows: props.arrows
    };

    return (
        <SlickSlider
            className={`slider ${props.className}`}
            {...defaultConf}
        >
            {props.steps}
        </SlickSlider>
    );
}