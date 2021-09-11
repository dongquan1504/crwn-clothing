import HomePage from "./pages/homepage.component.jsx";
import { Switch, Route, Link } from "react-router-dom";

import "./App.css";

const HatsPage = props => (
  <div>
    <h1>HATs PAGE</h1>
    <Link to={`${props.match.url}/`}></Link>
  </div>
);
const JacketsPage = props => (
  <div>
    <h1>JACKETs PAGE {props.match.params.topicId}</h1>
  </div>
);
const SneakersPage = () => (
  <div>
    <h1>SNEAKERs PAGE</h1>
  </div>
);
const WomenPage = () => (
  <div>
    <h1>WOMENs PAGE</h1>
  </div>
);
const MensPage = () => (
  <div>
    <h1>MENs PAGE</h1>
  </div>
);
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
        <Route path="/jackets" component={JacketsPage} />
        <Route path="/sneakers" component={SneakersPage} />
        <Route path="/women" component={WomenPage} />
        <Route path="/mens" component={MensPage} />
      </Switch>
    </div>
  );
}

export default App;
