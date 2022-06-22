import { useEffect, useState } from "react";

import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

function Routes() {
  const [autenticado, setAutenticado] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("@KenzeHub:token");

    if (token) {
      return setAutenticado(true);
    }
  }, [autenticado]);

  return (
    <Switch>
      <Route exact path="/">
        <Login autenticado={autenticado} setAutenticado={setAutenticado} />
      </Route>

      <Route exact path="/register">
        <Register autenticado={autenticado} />
      </Route>

      <Route exact path="/home">
        <Home autenticado={autenticado} />
      </Route>
    </Switch>
  );
}

export default Routes;
