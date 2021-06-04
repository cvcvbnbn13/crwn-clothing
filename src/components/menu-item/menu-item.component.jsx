import React from "react";
import "./styles/menu-item.styles.css";

const MenuItem = (props) => (
  <div className={`${props.size} menu-item`}>
    <div
      className="background-image"
      style={{ backgroundImage: `url(${props.img})` }}
    ></div>
    <div className="content">
      <h1 className="title">{props.title}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;
