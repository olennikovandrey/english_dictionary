import routes from "./config/routes";
import { BrowserRouter as Switch, Route, RouteComponentProps } from "react-router-dom";
import React from "react";

const App: React.FC = () => {
  return(
    <Switch>
      { routes.map((route, index) => {
        return (
          <Route
            key={ index }
            path={ route.path }
            exact={ route.exact }
            render={ (props: RouteComponentProps) => (
              <route.component
                name={ route.name }
                { ...props }
                { ...route.props }
              />
            ) }
          />
        );
      }) }
    </Switch>
  );
};

export default App;
