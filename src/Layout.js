import { Switch, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import UserProfile from "./pages/userProfile/UserProfile";
import Home from "./pages/home/Home";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Project from "./pages/project/Project";
import EditProject from "./pages/editProject/EditProject";
import TestProject from "./pages/testProject/TestProject";
import Program from "./pages/program/Program";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import CuriMaps from "./pages/curiMaps/CuriMaps";
import NewMap from "./pages/newMap/NewMap";
import EditMap from "./pages/editMaps/EditMap";
import Board from "./pages/board/Board";

function Dashboard() {
  return (
    <>
      <Topbar />
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <Switch>
            <Route path="/userProfile">
              <UserProfile />
            </Route>
            <Route path="/project">
              <Project />
            </Route>
            <Route path="/editProject">
              <EditProject />
            </Route>
            <Route path="/testProject">
              <TestProject />
            </Route>
            <Route path="/program">
              <Program />
            </Route>
            <Route path="/users">
              <UserList />
            </Route>
            <Route path="/user/:userId">
              <User />
            </Route>
            <Route path="/newUser">
              <NewUser />
            </Route>
            <Route path="/products">
              <ProductList />
            </Route>
            <Route path="/product/:productId">
              <Product />
            </Route>
            <Route path="/newproduct">
              <NewProduct />
            </Route>
            <Route path="/curiMaps">
              <CuriMaps />
            </Route>
            <Route path="/newMap">
              <NewMap />
            </Route>
            <Route path="/editMap">
              <EditMap />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/board">
              <Board />
            </Route>
          </Switch>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
