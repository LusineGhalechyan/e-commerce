import "./App.scss";
import NavMenu from "./components/NavMenu/NavMenu";
import Interior from "./components/pages/Interior/Interior";
import NotFound from "./components/pages/NotFound/NotFound";
import { Route, Switch, Redirect } from "react-router-dom";
import Furniture from "./components/pages/Furniture/Furniture";
import CartBasket from "./components/CartBasket/CartBasket";
import Purchase from "./components/Purchase/Purchase";

function App() {
  return (
    <div>
      <NavMenu />

      <Switch>
        <Route path="/" exact component={Interior} />
        <Route path="/furniture" exact component={Furniture} />
        <Route path="/purchase" exact component={Purchase} />
        <Route path="/checkout" exact component={CartBasket} />
        <Route path="/404" exact component={NotFound} />
        <Redirect to="/404" />
      </Switch>
    </div>
  );
}

export default App;
