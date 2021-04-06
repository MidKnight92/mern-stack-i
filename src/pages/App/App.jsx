import { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

// Services
import { getUser } from "../../utilities/users-service";

// Components
import AuthPage from "../AuthPage/AuthPage";
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";
import NewOrderPage from "../NewOrderPage/NewOrderPage";

// Styles
import "./App.css";

export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      {user ? (
        <Switch>
          <Route path="/orders/new">
            <NewOrderPage user={user} setUser={setUser} />
          </Route>
          <Route path="/orders">
            <OrderHistoryPage />
          </Route>
          <Redirect to="/orders" />
        </Switch>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
