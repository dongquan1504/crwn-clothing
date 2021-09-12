import HomePage from "./pages/homepage/homepage.component.jsx";
import ShopPage from "./pages/shop/shop.component.jsx";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx";
import Header from "./components/header/header.component.jsx";

import { Switch, Route } from "react-router-dom";

import "./App.css";

// const HatsPage = props => (
//   <div>
//     <h1>HATs PAGE</h1>
//   </div>
// );

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage}/>
        <Route path="/sign" component={SignInAndSignUpPage}/>
        {/* <Route path="/hats" component={HatsPage} />
        <Route path="/jackets" component={JacketsPage} />
        <Route path="/sneakers" component={SneakersPage} />
        <Route path="/women" component={WomenPage} />
        <Route path="/mens" component={MensPage} /> */}
      </Switch>
    </div>
  );
}

export default App;
