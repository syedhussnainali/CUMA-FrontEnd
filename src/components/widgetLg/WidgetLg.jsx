import React from "react";
import "./widgetLg.css";
import windsor from "../../images/windsor.png";

const WidgetLg = () => {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Published Maps</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">program</th>
          <th className="widgetLgTh">date</th>
          <th className="widgetLgTh">scope</th>
          <th className="widgetLgTh">status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img className="widgetLgImg" src={windsor} alt="user" />
            <span className="widgetLgName">BA Honours in Economics</span>
          </td>
          <td className="widgetLgDate">21 Feb 2023</td>
          <td className="widgetLgAmount">Core/Elective</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img className="widgetLgImg" src={windsor} alt="user" />
            <span className="widgetLgName">Project</span>
          </td>
          <td className="widgetLgDate">21 Feb 2023</td>
          <td className="widgetLgAmount">Core/Elective</td>
          <td className="widgetLgStatus">
            <Button type="Decline" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img className="widgetLgImg" src={windsor} alt="user" />
            <span className="widgetLgName">Project</span>
          </td>
          <td className="widgetLgDate">21 Feb 2023</td>
          <td className="widgetLgAmount">Core/Elective</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img className="widgetLgImg" src={windsor} alt="user" />
            <span className="widgetLgName">BA in Economics</span>
          </td>
          <td className="widgetLgDate">21 Feb 2023</td>
          <td className="widgetLgAmount">Core/Elective</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default WidgetLg;
