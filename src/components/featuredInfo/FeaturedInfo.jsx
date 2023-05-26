import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./featuredInfo.css";
import { ArrowUpward } from "@material-ui/icons";
import experience from "../../images/experience.png";
import experience1 from "../../images/experience1.png";
import experience2 from "../../images/experience2.png";
import { Link } from "react-router-dom";

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
      <div className="slide">
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
    <div className="featured">
      <main className="featuredItem">
        <span className="featuredTitle">Programs</span>
        <section className="featuredMoneyContainer">
          <span className="featuredMoney">261</span>
          <span className="featuredMoneyRate">
            <ArrowUpward className="featuredIcon positive" />
          </span>
        </section>
        <Link to={"/program"}>
          <span className="featuredSub">All Uwindsor Programs</span>
        </Link>
      </main>
      <main className="featuredItem">
        <span className="featuredTitle">Courses</span>
        <section className="featuredMoneyContainer">
          <span className="featuredMoney">524</span>
          <span className="featuredMoneyRate">
            <ArrowUpward className="featuredIcon positive" />
          </span>
        </section>
        <Link to={"/products"}>
          <span className="featuredSub">All Uwindsor Courses</span>
        </Link>
      </main>
      <main className="featuredItem">
        <span className="featuredTitle">Maps</span>
        <section className="featuredMoneyContainer">
          <span className="featuredMoney">20</span>
          <span className="featuredMoneyRate">
            <ArrowUpward className="featuredIcon positive" />
          </span>
        </section>
        <Link to={"/curiMaps"}>
          <span className="featuredSub">Total Maps Created</span>
        </Link>
      </main>
    </div>
  );
};

export default FeaturedInfo;
