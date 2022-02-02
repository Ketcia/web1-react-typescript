import { Switch, Route } from "react-router-dom";
import React from "react"
import { Trepcismo, Home, Sobre, Galeria, Faqpage, Login, Registrar} from "pages";


const Routes = () => {
  return (
    <Switch>
      <Route path="/Login" component={Login}/>
      <Route path="/Galeria" component={Galeria}/>
      <Route path="/Faq" component={Faqpage}/>
      <Route path="/Trepcismo" component={Trepcismo}/>
      <Route path="/Sobre" component={Sobre}/>
      <Route path="/Registrar" component={Registrar}/>
      <Route path="/" component={Home}/>
      
    </Switch>
  );
};

export default Routes;