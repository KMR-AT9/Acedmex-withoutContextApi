import { React, useRef } from 'react';
import $ from "jquery";
import { Banner } from '../components/Banner';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AboutData } from "../data/AboutData";


export const About = () => {

    const aboutSliderRef = useRef(null);
    const aboutbtnSliderRef = useRef(null);

    const goToPreviousSlide = () => {
        aboutSliderRef.current.go('-1');
        aboutbtnSliderRef.current.go('-1');
        const aboutSlideIndex = aboutSliderRef.current.splide.index;
        handleItemClick(aboutSlideIndex)
    };

    const goToNextSlide = () => {
        aboutSliderRef.current.go('+1');
        aboutbtnSliderRef.current.go('+1');
        const aboutSlideIndex = aboutSliderRef.current.splide.index;
        handleItemClick(aboutSlideIndex)
    };


    const handleItemClick = (id) => {
        $('.about-button-slider .splide__slide').eq(id).addClass('on').prevAll().addClass('on').end().nextAll().removeClass('on');
        aboutbtnSliderRef.current.go(id, { focus: 'center' });
        aboutSliderRef.current.go(id);
    };

    return (
        <main className='headerheight'>
            <Banner additionalClasses="about-banner">
                <div className="content">
                    <h1>About us</h1>
                    <p>Nurturing expertise, craftsmanship, and innovation to empower individuals and sculpt a promising future.</p>
                </div>
                <div className="secA-wrap">
                    <div className="about-btn-demo">
                        <Splide ref={aboutbtnSliderRef}
                            className="about-button-slider"
                            options={{
                                type: "slide",
                                rewind: true,
                                gap: "70px",
                                pauseOnHover: true,
                                perPage: 5,
                                perMove: 1,
                                autoplay: false,
                                pagination: false,
                                arrows: false,
                                focus: 'center',
                            }}
                            aria-label="About Button Slider"
                        >
                            {AboutData &&
                                AboutData.map((about) => {
                                    const { id } = about;
                                    return (
                                        <SplideSlide key={id}
                                            onClick={(e) => {
                                                const currentSlide = e.currentTarget;
                                                const slideindex = Array.from(currentSlide.parentNode.children).indexOf(currentSlide);
                                                aboutSliderRef.current.go(slideindex);
                                                handleItemClick(slideindex);
                                            }}
                                        >
                                            <div className="item">
                                                {id}
                                            </div>
                                        </SplideSlide>

                                    );
                                })}
                        </Splide>
                        <div className="custom-btn-arrow">
                            <button className="prev" onClick={goToPreviousSlide}>
                                <img src={require('../assets/icon/right.png')} alt="" />
                            </button>
                            <button className="next" onClick={goToNextSlide}>
                                <img src={require('../assets/icon/right.png')} alt="" />
                            </button>
                        </div>
                    </div>
                    <div className="about-demo">
                        <Splide ref={aboutSliderRef}
                            className="about-slider"
                            onMove={(newIndex) => {
                                handleItemClick(newIndex.index);
                            }}
                            options={{
                                type: "slide",
                                rewind: true,
                                gap: "0px",
                                pauseOnHover: true,
                                perPage: 1,
                                autoplay: false,
                                pagination: false,
                                arrows: false,
                                wheel: true,
                                releaseWheel: true,
                                wheelSleep: 400,
                                breakpoints: {
                                    675: {
                                        perPage: 1,
                                    },
                                    420: {
                                        perPage: 1,
                                    },
                                },
                            }}
                            aria-label="About Slider"
                        >
                            {AboutData &&
                                AboutData.map((about) => {
                                    const { id, title, icon, description } = about;
                                    return (
                                        <SplideSlide key={id}>
                                            <div className="item">
                                                <div className="card">
                                                    <div className="title">
                                                        <img src={require(`../assets/images/about/icons/${icon}`)} alt="" />
                                                        <h6>{title}</h6>
                                                    </div>
                                                    <div className="content-p">
                                                        <p>{description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </SplideSlide>
                                    );
                                })}
                        </Splide>
                    </div>
                </div>
            </Banner>
        </main>
    );
};
