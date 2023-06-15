import courseTabStyle from "./tab-course.module.css";
import React, { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "../../button/button";
import { Link } from "react-router-dom";
import classes from "../../button/button.module.css";

const TabCourse = () => {
  return (
    <div className="mt-4 mb-4">
      <h3>Courses</h3>
      <div className="row">
        <div className="col-12">
          <ButtonGroup>
            <Button>Import official courses</Button>
            <Link to={"/new-course/"}>
              <Button className={`${classes.primary} ml-2`}>
                Create new course
              </Button>
            </Link>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
};

export default TabCourse;
