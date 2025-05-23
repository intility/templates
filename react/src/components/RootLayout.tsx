import { faUser } from "@fortawesome/pro-solid-svg-icons";
import { Nav } from "@intility/bifrost-react";
import { Link, NavLink, Outlet } from "react-router";
import { ColorModePicker } from "./ColorMode";

/**
 * Root Layout component for the app.
 * Used in a react-router layout route
 */
export default function RootLayout() {
  return (
    <Nav
      logo={
        <Link className="bf-neutral-link" to="/">
          <Nav.Logo>Intility App</Nav.Logo>
        </Link>
      }
      top={
        <>
          <NavLink to="/profile">
            <Nav.Item icon={faUser}>Profile</Nav.Item>
          </NavLink>
          <ColorModePicker />
        </>
      }
    >
      <Outlet />
    </Nav>
  );
}
