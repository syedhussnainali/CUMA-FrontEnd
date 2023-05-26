import "./newProduct.css";

const NewProduct = () => {
  return (
    <div className="NewProduct">
      <h1 className="NewProductTitle">New Course</h1>

      <form className="addProductForm">
        <div className="addProductItem">
          <label>Upload File</label>
          <input type="file" id="file" />
        </div>
        <div className="addProductItem">
          <label>Name</label>
          <input type="text" placeholder="Course" />
        </div>
        <div className="addProductItem">
          <label>ID</label>
          <input type="text" placeholder="COMP..." />
        </div>
        <div className="addProductItem">
          <label>Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <button className="addProductButton">create</button>
      </form>
    </div>
  );
};

export default NewProduct;
