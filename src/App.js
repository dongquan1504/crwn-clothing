import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils.js";
import "./App.css";

import CheckOut from "./pages/checkout/checkout.component.jsx";
import HomePage from "./pages/homepage/homepage.component.jsx";
import ShopPage from "./pages/shop/shop.component.jsx";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx";
import Header from "./components/header/header.component.jsx";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUsers } from "./redux/user/user.selectors.js";

class App extends React.Component {
  unsubscribeFromAuth = null;

  //insert firebase
  componentDidMount() {
    const { setCurrentUser, /*collectionsArray*/ } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
      // addCollectionAndDocuments('collections',
      // collectionsArray.map(({ title, items }) => ({ title, items })));
    }, err=>console.log(err));
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/check" component={CheckOut} />
          <Route
            exact
            path="/sign"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUsers,
});
const mapDisPatchToProps = (disPatch) => ({
  setCurrentUser: (user) => disPatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDisPatchToProps)(App);
