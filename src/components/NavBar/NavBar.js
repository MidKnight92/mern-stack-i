import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";

export default function NavBar({ user, setUser }) {
  const d = new Date();

  const handleLogOut = () => {
    userService.logOut();
    // Update the state will also cause a re-render
    setUser(null);
  };
  return (
    <nav>
      <p>
        Welcome, {user.name} it's {d.toLocaleDateString()}
      </p>
      <Link to="/orders">Order History</Link> &nbsp; | &nbsp;
      <Link to="/orders/new">New Order</Link> &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut}>
        Log Out
      </Link>
    </nav>
  );
}
