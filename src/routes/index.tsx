import { Switch, Route } from "react-router-dom";
import { Trepcismo, Home, Sobre, Galeria, Faqpage, Login} from "pages";


const Routes = () => {
  return (
    <Switch>
      <Route path="/Galeria" component={Galeria}/>
      <Route path="/Faq" component={Faqpage}/>
      <Route path="/Trepcismo" component={Trepcismo}/>
      <Route path="/Sobre" component={Sobre}/>
      <Route path="/" component={Home}/>
      
    </Switch>
  );
};

export default Routes;