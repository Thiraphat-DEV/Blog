import "./Navbar.css";
//require hook logout
import { useLogout } from "../../hooks/useLogout";
//require Link from react-router-dom
import { Link } from "react-router-dom";
//logo
import TemplateLogo from "../../assets/temple.svg";
import React from "react";
import { useAuthContext } from "../../hooks/useAuthContext";

const Navbar = () => {
  const { logout, error, isPending } = useLogout();
  const { user } = useAuthContext();
  return (
    <div className="navbar">
      <ul>
        <li className="logo">
          <img src={TemplateLogo} alt="logo" />
          <span>The Boaty</span>
        </li>
        {!user && (
          <>
            <li>
              <Link to="/singup">Signup</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </>
        )}
        {user && (
          <>
            <li>
              {!isPending && (
                <button className="btn" onClick={logout}>
                  Logout
                </button>
              )}
              {isPending && (
                <button className="btn" disabled>
                  Logout...
                </button>
              )}
            </li>
            {error && <p>{error}</p>}
          </>
        )}
      </ul>
    </div>
  );
};
export default Navbar;
