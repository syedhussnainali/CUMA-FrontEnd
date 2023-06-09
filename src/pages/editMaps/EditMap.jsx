import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
  GetApp,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import windsor from "../../images/windsor.png";
import editMapStyle from "./editmap.module.css";
import Button from "../../components/button/button";
import classes from "../../components/button/button.module.css";
import Card from "../../components/card/card";

const User = () => {
  return (
    <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10 mt-5">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
          <h3>Edit Map</h3>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
          <Link to="">
            <Button>
              PDF <GetApp />
            </Button>
          </Link>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Button>
            Excel <GetApp />
          </Button>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-12">
          <Card>
            <form className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div>
                  <h4>Map (Kind)</h4>
                </div>
                <div className="mt-3">
                  <label>Internal comments (Project members only)</label>
                  <textarea
                    id="freeform"
                    name="freeform"
                    rows="4"
                    cols="50"
                    className="form-control"
                  >
                    Enter text here...
                  </textarea>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <h4>Edit comments</h4>
                <div className="mt-3">
                  <label>Published comments</label>
                  <textarea
                    id="freeform"
                    name="freeform"
                    rows="4"
                    cols="50"
                    className="form-control"
                  >
                    Enter text here...
                  </textarea>
                </div>
              </div>
              <div className="mt-3">
                <Button className={classes.primary}>Update</Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default User;
