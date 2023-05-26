import React from "react";
import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import { userData } from "../../dummyData";
//import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  let username = window.sessionStorage.getItem("username")
  return (
    <main className="home">
      <FeaturedInfo />
      {username=='admin' &&<Chart
        data={userData}
        title="CuMA Analytics"
        grid
        dataKey="Active User"
      />}
      
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </main>
  );
};

export default Home;
