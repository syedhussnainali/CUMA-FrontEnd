import programTabStyle from "./tab-program.module.css";
import React, { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "../../button/button";
import { Link } from "react-router-dom";
import classes from "../../button/button.module.css";

const TabProgram = () => {
  return (
    <div className="mt-4 mb-4">
      <h3>Programs</h3>
      <div className="row">
        <div className="col-12">
          <ButtonGroup>
            <Button>Import official programs</Button>
            <Link to={"/new-program/"}>
              <Button className={classes.primary}>Create new program</Button>
            </Link>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
};

export default TabProgram;
