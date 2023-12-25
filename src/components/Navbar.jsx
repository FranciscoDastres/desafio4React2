import { useContext } from "react";
import { PizzaContext } from "../contexts/PizzaContext";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const {total} = useContext(PizzaContext)
  const setActiveClass = ({ isActive}) => (isActive ? "active" : undefined)
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="navbar-collapse justify-content-between">
        <div className="navbar-nav align-items-start">
          <NavLink className={ setActiveClass} to="/" > Home </NavLink> 
        </div>
        <div className="navbar-nav align-items-end totalCart text-white"></div>
        <NavLink className={ setActiveClass} to="/Cart"> <p> 🍕<span>${total}</span></p></NavLink>
       
      </div>
    </nav>
  );
};
export default Navbar;
