import React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";

import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import "./menu-item.styles.scss";

class MenuItem extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const changeRouteOnCLick = () => history.push(`${match.url}${linkUrl}`);
    const { title, imageUrl, size, history, linkUrl, match } = this.props;
    return (
      <div className={`${size} menu-item`}>
        <div
          className="background-image"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
          onClick={changeRouteOnCLick}
        />
        <div className="content" onClick={changeRouteOnCLick}>
          <h1 className="title">{title}</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
    );
  }
}
const mapDisPatchToProps = (disPatch) => ({
  fetchCollectionsStartAsync: () => disPatch(fetchCollectionsStartAsync()),
});
export default connect(null, mapDisPatchToProps)(withRouter(MenuItem));
