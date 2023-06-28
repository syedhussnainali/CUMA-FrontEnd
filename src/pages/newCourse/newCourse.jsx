import createCourseStyle from "./newCourse.module.css";
import Button from "../../components/button/button";
import classes from "../../components/button/button.module.css";

const NewCourse = () => {
  return (
    <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10 mt-4 mb-4">
      <h3>New Course</h3>
      <div className="row mt-3 mb-3">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <form className="row addProductForm">
            <div className="col-12 mt-3 addProductItem">
              <label>Upload File</label>
              <input type="file" id="file" className="form-control"/>
            </div>
            <div className="col-12 mt-3 addProductItem">
              <label>Name</label>
              <input type="text" placeholder="Course" className="form-control" />
            </div>
            <div className="col-12 mt-3 addProductItem">
              <label>ID</label>
              <input type="text" placeholder="COMP..." className="form-control" />
            </div>
            <div className="col-12 mt-3 addProductItem">
              <label>Active</label>
              <select name="active" id="active" className="form-control">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className="mt-3">
              <Button className={classes.primary}>Create Course</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewCourse;
