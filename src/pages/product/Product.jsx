import { Link } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart";
import { productData } from "../../dummyData";
import windsor from "../../images/windsor.png";
import { Publish } from "@material-ui/icons";

const Product = () => {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Course</h1>
        <Link to="/newproduct">
          <button className="productAddButton">create</button>
        </Link>
      </div>
      <section className="productTop">
        <div className="productTopLeft">
          <Chart
            data={productData}
            dataKey="Sales"
            title="Course Performance"
          />
        </div>
        <section className="productTopRight ">
          <div className="productInfoTop">
            <img src={windsor} alt="item" className="productInfoImg" />
            <span className="productName">Basic Info</span>
          </div>
          <div className="productInfoBottom">
            <div className="prodcutInfoItem">
              <span className="productInfoKey">Id:</span>
              <span className="productInfoValue">COMP-8967</span>
            </div>
            <div className="prodcutInfoItem">
              <span className="productInfoKey">No of Students:</span>
              <span className="productInfoValue">5123</span>
            </div>
            <div className="prodcutInfoItem">
              <span className="productInfoKey">Approved:</span>
              <span className="productInfoValue">yes</span>
            </div>
            <div className="prodcutInfoItem">
              <span className="productInfoKey">Active:</span>
              <span className="productInfoValue">yes</span>
            </div>
          </div>
        </section>
      </section>
      <section className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Course Name</label>
            <input type="text" placeholder="Internship/Project II" />
            <label>Approved</label>
            <select name="inStock" id="inStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img src={windsor} alt="product" className="productUploadImg" />
              <label for="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Product;
