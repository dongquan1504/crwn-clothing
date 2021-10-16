import React from "react";
import { Route } from "react-router";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import WithSpinner from "../../components/with-spinner/with-spinner.component";

import { selectCollectionFetching } from "../../redux/shop/shop.selectors";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import Collection from "../collection/collection.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionWithSpinner = WithSpinner(Collection);

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match, isCollectionFetching } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner
              isLoading={isCollectionFetching}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionWithSpinner
              isLoading={isCollectionFetching}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectCollectionFetching,
});
const mapDisPatchToProps = (disPatch) => ({
  fetchCollectionsStartAsync: () => disPatch(fetchCollectionsStartAsync()),
});

export default connect(mapStateToProps, mapDisPatchToProps)(ShopPage);
