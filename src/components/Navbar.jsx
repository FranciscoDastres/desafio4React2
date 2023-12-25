import { useContext } from "react";
import { PizzaContext } from "../contexts/PizzaContext";
import { NavLink } from "react-router-dom";

const Navbar = () => {
 const { total } = useContext(PizzaContext);

 return (
    <nav className="navbar navbar-expand-lg">
      <div className="navbar-collapse justify-content-between">
        <div className="navbar-nav align-items-start">
          <NavLink exact activeClassName="active" to="/">
            {" "}
            Home{" "}
          </NavLink>
        </div>
        <div className="navbar-nav align-items-end totalCart text-white"></div>
        <NavLink activeClassName="active" to="/Cart">
          {" "}
          🍕<span>${total}</span>{" "}
        </NavLink>
      </div>
    </nav>
 );
};

export default Navbar;