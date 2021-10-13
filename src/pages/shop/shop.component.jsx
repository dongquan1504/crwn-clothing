import React from "react";
import { Route } from "react-router";
import { connect } from "react-redux";

import WithSpinner from "../../components/with-spinner/with-spinner.component";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import Collection from "../collection/collection.component";
import { updateCollections } from "../../redux/shop/shop.actions";
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionWithSpinner = WithSpinner(Collection);

class ShopPage extends React.Component {
  state = {
    isLoading: true,
  }

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot(async snapshot => {
      const collectionMap = convertCollectionsSnapshotToMap(snapshot)
      updateCollections(collectionMap);
      this.setState({ isLoading: false })
    })
  }

  render() {
    const { match } = this.props;
    const { isLoading } = this.state;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`}
          render={(props) =>
            <CollectionsOverviewWithSpinner isLoading={isLoading} {...props} />} />
        <Route path={`${match.path}/:collectionId`}
          render={(props) =>
            <CollectionWithSpinner isLoading={isLoading} {...props} />} />
      </div>
    )
  };
}

const mapDisPatchToProps = (disPatch) => ({
  updateCollections: (collectionsMap) => disPatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDisPatchToProps)(ShopPage);
