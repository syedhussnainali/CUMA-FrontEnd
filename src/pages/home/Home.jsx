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
    <div className="col-md-10 mt-4 mb-4">
      <FeaturedInfo />
      {username == 'admin' && <Chart
        data={userData}
        title="CuMA Analytics"
        grid
        dataKey="Active User"
      />}

      <div className="mt-4 mb-4">
        <div className="row">
          <div className="col-md-6">
            <WidgetSm />
          </div>
          <div className="col-md-6">
            <WidgetLg />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
