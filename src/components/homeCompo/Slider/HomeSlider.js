import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import Link from "next/link";
import "./slider-animation.css";
import "./styles.css";

const HomeSlider = () => {
  const content = [
    {
      title: "LONDON SCHOOL OF EXCELLENCE",
      description:
        "London School Of Excellence helps you submit your application with no errors and highest chance of acceptance.",
      button: "Get Started with Admission HUB",
      image:
        "https://res.cloudinary.com/lsoe/image/upload/v1663415302/images/banner-img-one_ge4nge.jpg",
    },
    {
      title: "LONDON SOURCE OF EMPLOYMENT",
      description: "Learn-Teach-Lead",
      button: "Get Started with Employment HUB",
      image:
        "https://res.cloudinary.com/lsoe/image/upload/v1663415302/images/banner-img-two_j7rkc1.jpg",
    },
    {
      title: "LSOE Career HUB",
      description:
        "London School Of Excellence helps you submit your application with no errors and highest chance of acceptance.",
      button: "Get Started with Career HUB",
      image:
        "https://res.cloudinary.com/lsoe/image/upload/v1666384262/images/DvmN8Hx_tyaev6.jpg",
    },
  ];
  return (
    <Slider autoplay={3000}>
      <div
        className="slider-content"
        style={{
          background: `url('https://res.cloudinary.com/lsoe/image/upload/v1663415302/images/banner-img-one_ge4nge.jpg') no-repeat center center`,
        }}
      >
        <div className="inner">
          <h1>LONDON SCHOOL OF EXCELLENCE</h1>
          <p>
            London School Of Excellence helps you submit your application with
            no errors and highest chance of acceptance.
          </p>
          <Link href="/university-admission">
            <button className="btn btn-secondary text-white font-bold">
              Get Started with Admission HUB
            </button>
          </Link>
        </div>
      </div>
      <div
        className="slider-content"
        style={{
          background: `url('https://res.cloudinary.com/lsoe/image/upload/v1663415302/images/banner-img-two_j7rkc1.jpg') no-repeat center center`,
        }}
      >
        <div className="inner">
          <h1>LONDON SOURCE OF EMPLOYMENT</h1>
          <p>Learn-Teach-Lead</p>
          <Link href="/employment">
            <button className="btn btn-accent text-white font-bold">
              Get Started with Employment HUB
            </button>
          </Link>
        </div>
      </div>
      <div
        className="slider-content"
        style={{
          background: `url('https://res.cloudinary.com/lsoe/image/upload/v1666384262/images/DvmN8Hx_tyaev6.jpg') no-repeat center center`,
        }}
      >
        <div className="inner">
          <h1>LSOE Career HUB</h1>
          <p>
            London School Of Excellence helps you submit your application with
            no errors and highest chance of acceptance.
          </p>
          <Link href="/university-admission">
            <button className="btn btn-primary text-white font-bold">
              Get Started with Career HUB
            </button>
          </Link>
        </div>
      </div>
    </Slider>
  );
};

export default HomeSlider;
