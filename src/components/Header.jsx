import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo2.png"
import "./Header.css";
import { useCart } from "../context/CartContext";

export const Header = () => {
  const { cartList } = useCart();

  return (
    <header>
      <Link to="/" className="logo">
        <img src={Logo} alt="SyncSeduce Logo" />
        <span>Shopping Cart - Context and Reducer</span>
      </Link>
      <nav className="navigation">
        <NavLink to="/" className="link" end>Home</NavLink>
        <NavLink to="/cart" className="link">Cart</NavLink>
      </nav>
      <Link to="/cart" className="items">
        <span>Cart: {cartList.length}</span>
      </Link>
    </header>
  )
}
