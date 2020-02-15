import React from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

const NavigationComponent = props => {
  const dynamicLink = (route, linkText) => {
    return (
      <div className="nav-link-wrapper">
        <NavLink to={route} activeClassName="nav-link-active">
          {linkText}
        </NavLink>
      </div>
    );
  };

  const handleSignOut = () => {
    axios
      .delete("http://127.0.0.1:8000/api/logout", { withCredentials: true })
      .then(response => {
        if (response.status === 200) {
          props.history.push("/");
          props.handleSuccessfulLogout();
        }
        return response.data;
      })
      .catch(error => {
        console.log("Error signing out", error);
      });
  };

  return (
    <div className="nav-wrapper">
      <div className="left-side">
        <div className="nav-link-wrapper">
          <NavLink exact to="/" activeClassName="nav-link-active">
            Home
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink to="/about-me" activeClassName="nav-link-active">
            About Us
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink to="/contact" activeClassName="nav-link-active">
            Contact
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink to="/menus" activeClassName="nav-link-active">
            Our Menus
          </NavLink>
        </div>

            <div className="menus-nav-link-wrapper">
                <NavLink to="/breakfast" activeClassName="nav-link-active">
                    Breakfast Menu
                </NavLink>
            </div>

            <div className="menus-nav-link-wrapper">
                <NavLink to="/lunch" activeClassName="nav-link-active">
                    Lunch Menu
                </NavLink>
            </div>
                <div className="sandwhichmenu-nav-link-wrapper">
                    <NavLink to="/sandwhiches" activeClassName="nav-link-active">
                        Sandwhiches
                    </NavLink>
                </div>

                <div className="menus-nav-link-wrapper">
                    <NavLink to="/lunch" activeClassName="nav-link-active">
                        Wraps 
                    </NavLink>
                </div>

                <div className="menus-nav-link-wrapper">
                    <NavLink to="/lunch" activeClassName="nav-link-active">
                        Burittos 
                    </NavLink>
                </div>

                <div className="menus-nav-link-wrapper">
                    <NavLink to="/lunch" activeClassName="nav-link-active">
                        Paninis 
                    </NavLink>
                </div>

            <div className="menus-nav-link-wrapper">
            <NavLink to="/dinner" activeClassName="nav-link-active">
                Dinner Menu
            </NavLink>
            </div>

        {props.loggedInStatus === "LOGGED_IN" ? (
          dynamicLink("/portfolio-manager", "Portfolio Manager")
        ) : null}
      </div>

      <div className="right-side">
        {/* JOHN GARTSU */}
        {props.loggedInStatus === "LOGGED_IN" ? (
          <a onClick={handleSignOut}>
            <FontAwesomeIcon icon="sign-out-alt" />
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default withRouter(NavigationComponent);