
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';


export const Header = () => {
  const cart = useSelector((state) => state.cart);  

  return (
    <div className="header-section">
 
      <div>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/products'>Products</NavLink>
      <NavLink to='/cart'>Cart  ({cart.length})</NavLink>
      </div>

    </div>
  );
};
