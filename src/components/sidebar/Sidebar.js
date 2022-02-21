import React from "react";
import "./sidebar.css";
import closingIcon from "../../icons/closing icon.png";
import toggle from "../../icons/Dark toggle.png";
import world from "../../icons/Language.png";
import { SideBarData } from "./SidebarData";

export const Sidebar = () => {
  return (
    <>
      <div className="sidebar-container">
        <div className="title">
          <button className="logo">N</button>
          <p className="name">Name</p>
          <img src={closingIcon} className="closing"></img>
        </div>
        <div className="sidebar">
          <ul className="sidebar-list">
            {SideBarData.map((item, index) => (
              <li className="row" key={index}>
                <img className="icons" src={item.icon} />
                <p className="title">{item.title}</p>
              </li>
            ))}
          </ul>
        </div>
        <button
          className="b1"
          style={{ marginLeft: "43px", marginTop: "70px" }}
        >
          $0.90
        </button>
        <div
          className="tier"
          style={{ padding: "4px", fontSize: "14px", marginTop: "-25px" }}
        >
          Buy $XYZ
        </div>
        <div className="footer">
          <img src={world} className="world"></img>
          <img src={toggle} className="toggle"></img>
        </div>
      </div>
    </>
  );
};
