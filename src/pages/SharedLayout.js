import { Link, Outlet } from "react-router-dom";
import StyledNavbar from "../components/stylednavbar.js";
import ProfileDisplay from "../components/Profiledisplay";
function SharedLayout({ children }) {
  return (
    <>
      <StyledNavbar />
      <Outlet />
      <ProfileDisplay />
      {children}
    </>
  );
}
export default SharedLayout;
