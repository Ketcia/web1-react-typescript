import { Switch, Route } from "react-router-dom";
import { Trepcismo, Home, Sobre } from "pages";

const Routes = () => {
  return (
    <Switch>
      <Route path="/Trepcismo" component={Trepcismo}/>
      <Route path="/Sobre" component={Sobre}/>
      <Route path="/" component={Home}/>
    </Switch>
  );
};

export default Routes;