import React from "react";
import { Link } from "react-router-dom";
import { Banner } from "../components/Banner";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { CoursesData } from "../data/CourseData";

export const Home = () => {
    return (
        <main className="headerheight">
            <Banner additionalClasses="home-banner">
                <div className="content">
                    <h1>Empowering Minds, Shaping Futures</h1>
                    <p>
                        Fostering knowledge, skills, and creativity to empower individuals
                        and shape a brighter tomorrow.
                    </p>
                    <Link to="" className="explr-btn">
                        Explore Now
                    </Link>
                </div>
            </Banner>
            <div className="home-secA">
                <div className="container">
                    <div className="heading text-center">
                        <h3>Our Courses</h3>
                    </div>
                    <div className="course-demo">
                        <Splide
                            className="courses-slider"
                            options={{
                                type: "loop",
                                rewind: true,
                                gap: "20px",
                                drag: 'free',
                                snap: true,
                                pauseOnHover: true,
                                perPage: 3,
                                autoplay: false,
                                pagination: false,
                                breakpoints: {
                                    675: {
                                        perPage: 3,
                                    },
                                    420: {
                                        gap: "20px",
                                        perPage: 3,
                                    },
                                },
                            }}
                            aria-label="Courses Slider"
                        >
                            {CoursesData &&
                                CoursesData.map((course) => {
                                    const { id, name, pic, price, desc, duration } = course;
                                    return (
                                        <SplideSlide key={id}>
                                            <div className="item">
                                                <Link to="/pricing" onClick={() => window.scrollTo(0, 0)}>
                                                    <figure>
                                                        <img src={require(`../assets/images/home/${pic}`)} alt="img"></img>
                                                    </figure>
                                                    <figcaption>
                                                        <div className="sub-name">{name}</div>
                                                        <div className="desc">{desc}</div>
                                                        <div className="price-duration">
                                                            <p>{price}</p>/<p>{duration}</p>
                                                        </div>
                                                        <div className="explr-btn">
                                                            Explore More
                                                        </div>
                                                    </figcaption>
                                                </Link>
                                            </div>
                                        </SplideSlide>
                                    );
                                })}
                        </Splide>
                    </div>
                </div>
            </div>
        </main>
    );
};
