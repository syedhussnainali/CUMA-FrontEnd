import React from "react";
import widgetStyle from "./widgetLg.module.css";
import windsor from "../../images/windsor.png";
import Label from "../label/label";
import labelStyle from "../label/label.module.css";


const WidgetLg = () => {
  return (
    <div>
      <h3 className={widgetStyle.widgetLgTitle}>Published Maps</h3>
      <table className="table table-responsive no-border widgetLgTable">
        <tr className="widgetLgTr">
          <th></th>
          <th className="widgetLgTh">program</th>
          <th className="widgetLgTh">date</th>
          <th className="widgetLgTh">scope</th>
          <th className="widgetLgTh">status</th>
        </tr>
        <tr className="widgetLgTr">
          <td>
            <img className="widgetLgImg" src={windsor} alt="user" />
          </td>
          <td className="">
            <span className="widgetLgName">BA Honours in Economics</span>
          </td>
          <td className="widgetLgDate">21 Feb 2023</td>
          <td className="widgetLgAmount">Core/Elective</td>
          <td className="widgetLgStatus">
            <Label className={labelStyle.success}>Approved</Label>
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td>
            <img className="widgetLgImg" src={windsor} alt="user" />
          </td>
          <td className="widgetLgUser">
            <span className="widgetLgName">Project</span>
          </td>
          <td className="widgetLgDate">21 Feb 2023</td>
          <td className="widgetLgAmount">Core/Elective</td>
          <td className="widgetLgStatus">
            <Label className={labelStyle.danger}>Decline</Label>
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td>
            <img className="widgetLgImg" src={windsor} alt="user" />
          </td>
          <td className="widgetLgUser">
            <span className="widgetLgName">Project</span>
          </td>
          <td className="widgetLgDate">21 Feb 2023</td>
          <td className="widgetLgAmount">Core/Elective</td>
          <td className="widgetLgStatus">
            <Label className={labelStyle.warning}>Pending</Label>
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td>
            <img className="widgetLgImg" src={windsor} alt="user" />
          </td>
          <td className="widgetLgUser">
            <span className="widgetLgName">BA in Economics</span>
          </td>
          <td className="widgetLgDate">21 Feb 2023</td>
          <td className="widgetLgAmount">Core/Elective</td>
          <td className="widgetLgStatus">
            <Label className={labelStyle.success}>Approved</Label>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default WidgetLg;
