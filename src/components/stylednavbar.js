import { BrowserRouter, NavLink } from "react-router-dom";

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

const Navbar = () => {
  return (
    <nav className="nav-bar sidebar">
      {" "}
      {/* add the "sidebar" class name */}
      <NavLink to="/" className="link" exact onClick={scrollToTop}>
        Home
      </NavLink>
      <NavLink to="/Tickets" className="link" exact onClick={scrollToTop}>
        Tickets
      </NavLink>
      <NavLink to="/BTB" className="link" exact onClick={scrollToTop}>
        BTB
      </NavLink>
      <NavLink to="/POS" className="link" exact onClick={scrollToTop}>
        POS
      </NavLink>
    </nav>
  );
};

export default Navbar;
