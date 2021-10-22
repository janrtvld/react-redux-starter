// Router
import { Switch, Route, useLocation } from "react-router-dom";
import { Home } from "./components/Home";

function App() {
  const location = useLocation();

  return (
    <div>
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
