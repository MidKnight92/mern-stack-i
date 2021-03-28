import { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

// Components
import AuthPage from "../AuthPage/AuthPage";
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";
import NewOrderPage from "../NewOrderPage/NewOrderPage";
import NavBar from "../../components/NavBar/NavBar";

// Styles
import "./App.css";

export default function App() {
  const [user, setUser] = useState(null);
  return (
    <main className="App">
      {user ? (
        <>
          <NavBar />
          <Switch>
            <Route path="/orders/new">
              <NewOrderPage />
            </Route>
            <Route path="/orders">
              <OrderHistoryPage />
            </Route>
            <Redirect to="/orders" />
          </Switch>
        </>
      ) : (
        <AuthPage />
      )}
    </main>
  );
}
