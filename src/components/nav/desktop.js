import React from "react";
import { Link } from "@reach/router";

const NAV_TEMPLATE = [
  {
    title: "Dashboard",
    icon: "dashboard",
    path: "/"
  },
  {
    title: "Search",
    icon: "search",
    path: "/search"
  },
  {
    title: "Bookings",
    icon: "video_label",
    path: "/bookings"
  },
  {
    title: "Invoices",
    icon: "attach_file",
    path: "/invoices"
  }
];

const USER_OPTIONS = [
  {
    title: "Notifications",
    icon: "notifications",
    path: "/notifications"
  },
  {
    title: "Profile",
    icon: "person_outline",
    path: "/profile"
  },
  {
    title: "Sign Out",
    icon: "power_settings_new",
    path: "/logout"
  }
];

/**
 * Renders a nav `Desktop` view
 * @param {any} props - Desktop Nav Props
 */
function DesktopNav({ ...props }) {
  console.log(props);

  return (
    <div className={"desktop-nav left-fixed"}>
      <Link className={"nav-brand"} to={"/"}>
        <div className={"brand"}> </div>
      </Link>
      <div className={"nav-container"}>
        {NAV_TEMPLATE.map(({ icon, path, title }) => {
          return (
            <Link
              to={path}
              key={path}
              className={`nav-item ${props.path === path ? "active" : ""}`}
            >
              <span className={`material-icons ${icon} desktop-nav-icon`}>
                {icon}
              </span>
              {title}
            </Link>
          );
        })}
      </div>
      <div className={"nav-container justify-end"}>
        {USER_OPTIONS.map(({ icon, path, title }) => {
          return (
            <Link
              to={path}
              key={path}
              className={`nav-item ${props.path === path ? "active" : ""}`}
            >
              <span className={`material-icons ${icon} desktop-nav-icon`}>
                {icon}
              </span>
              {title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

DesktopNav.defaultProps = {
  visible: true
};

export default DesktopNav;
