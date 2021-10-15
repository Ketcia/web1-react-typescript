import { Switch, Route } from "react-router-dom";
import { Trepcismo, Home, Sobre, Galeria } from "pages";

const Routes = () => {
  return (
    <Switch>
      <Route path="/Trepcismo" component={Trepcismo}/>
      <Route path="/Sobre" component={Sobre}/>
      <Route path="/" component={Home}/>
      <Route path="/Galeria" component={Galeria}/>
    </Switch>
  );
};

export default Routes;