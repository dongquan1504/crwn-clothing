import React from "react";
import { withRouter } from "react-router";

import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div className={`${size} menu-item`}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    />
    <div className="content"
      onClick={() => history.push(`${match.url}${linkUrl}`)}>
      <h1 className="title">{title}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
