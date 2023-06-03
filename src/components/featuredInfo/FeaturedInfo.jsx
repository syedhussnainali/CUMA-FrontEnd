import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "./featuredInfo.module.css";
import { ImArrowUp } from "react-icons/im";
import experience from "../../images/experience.png";
import experience1 from "../../images/experience1.png";
import experience2 from "../../images/experience2.png";
import { Link } from "react-router-dom";
import Button from "../button/button";
import classes from "../button/button.module.css";
import Card from "../card/card";

export class PauseOnHover extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      arrows: false,
    };
    return (
      <div className={styled.slide}>
        <main className="featuredItem">
          <Slider {...settings}>
            <div>
              <img src={experience} alt="slider" />
            </div>
            <div>
              <img src={experience1} alt="slider" />
            </div>
            <div>
              <img src={experience2} alt="slider" />
            </div>
          </Slider>
        </main>
      </div>
    );
  }
}

const FeaturedInfo = () => {
  return (
    <div className="row">
      <div className="col-md-4">
        <Card>
          <span className="featuredTitle">Programs</span>
          <section className="featuredMoneyContainer">
            <span className="featuredMoney">261</span>
            <span className="featuredMoneyRate">
              <ImArrowUp size={30} className="text-success" />
            </span>
          </section>
          <Link to={"/program"}>
            <Button className={classes.primary}>All Programs</Button>
          </Link>
        </Card>
      </div>
      <div className="col-md-4">
      <Card>
        <span className="featuredTitle">Courses</span>
        <section className="featuredMoneyContainer">
          <span className="featuredMoney">524</span>
          <span className="featuredMoneyRate">
            <ImArrowUp size={30} className="text-success" />
          </span>
        </section>
        <Link to={"/products"}>
          <Button className={classes.primary}>All Courses</Button>
        </Link>
      </Card>
      </div>
      <div className="col-md-4">
      <Card>
        <span className="featuredTitle">Maps</span>
        <section className="featuredMoneyContainer">
          <span className="featuredMoney">20</span>
          <span className="featuredMoneyRate">
            <ImArrowUp size={30} className="text-success" />
          </span>
        </section>
        <Link to={"/curiMaps"}>
          <Button className={classes.primary}>All Maps</Button>
        </Link>
      </Card>
      </div>
    </div>
  );
};

export default FeaturedInfo;
