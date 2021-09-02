import { Switch, Route } from "react-router-dom";
import { Trepcismo,Home } from "pages";

const Routes = () => {
  return (
    <Switch>
      <Route path="/Trepcismo" component={Trepcismo}/>
      <Route path="/" component={Home}/>
    </Switch>
  );
};

export default Routes;