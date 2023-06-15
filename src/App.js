import Landingpage from "./pages/landingPage/LandingPage";
import Login from "./pages/login/Login";
import Layout from "./Layout";
import "./app.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Landingpage />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/logout">
            <Login />
          </Route>
          <Route path="/home">
            <Layout />
          </Route>
          <Route path="/userProfile">
            <Layout />
          </Route>
          <Route path="/project">
            <Layout />
          </Route>
          <Route path="/edit-project">
            <Layout />
          </Route>
          <Route path="/create-program">
            <Layout />
          </Route>
          <Route path="/program">
            <Layout />
          </Route>
          <Route path="/program-list">
            <Layout />
          </Route>
          <Route path="/edit-program/:programId">
            <Layout />
          </Route>
          <Route path="/create-project">
            <Layout />
          </Route>
          <Route path="/course-list">
            <Layout />
          </Route>
          <Route path="/product/:productId">
            <Layout />
          </Route>
          <Route path="/create-course">
            <Layout />
          </Route>
          <Route path="/curiMaps">
            <Layout />
          </Route>
          <Route path="/newMap">
            <Layout />
          </Route>
          <Route path="/editMap">
            <Layout />
          </Route>
          <Route path="/board">
            <Layout />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;