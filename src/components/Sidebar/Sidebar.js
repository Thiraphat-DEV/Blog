import "./Sidebar.css";
//required user from useAuthContext Hook
import {useAuthContext} from '../../hooks/useAuthContext'
//required user Avatar
import Avatar from '../Avatar/Avatar'
//required NavLink
import { NavLink } from "react-router-dom";
//required icon
import DashboardIcon from "../../assets/dashboard_icon.svg";
import AddIcon from "../../assets/add_icon.svg";

import React from "react";

const Sidebar = () => {
  const {user}  = useAuthContext()
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="user">
          <Avatar image={user?.photoURL}/>
          {/* avatar and userName */}
          <p>{user?.displayName}</p>
        </div>

        <nav className="links">
          <ul>
            <li>
              {/* exact path default for pages */}
              <NavLink exact to="/">
                <img src={DashboardIcon} alt="DashboardIcon" />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/create">
                <img src={AddIcon} alt="AddIcon" />
                <span>New Project</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
