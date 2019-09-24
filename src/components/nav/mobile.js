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
  },
  {
    title: "Profile",
    icon: "person_outline",
    path: "/profile"
  }
];

/**
 * Renders a nav for `Mobile` view
 * @param {any} props - Mobile Navigation props
 */
function MobileNav({ ...props }) {
  return (
    <div className={"mobile-nav"}>
      <div className={"nav-header"}>
        {props.path === "/" ? (
          <span className={"header-icon left-hidden"}></span>
        ) : (
          <span
            className={`material-icons keyboard_backspace header-icon`}
            onClick={props.goBack}
          >
            {"keyboard_backspace"}
          </span>
        )}
        <div className={"brand mobile"}> </div>
        <span className={`material-icons notifications header-icon`}>
          {"notifications"}
        </span>
      </div>
      <div className={"mobile-tab-container"}>
        {NAV_TEMPLATE.map(({ title, icon, path }, i) => (
          <Link
            key={path}
            to={path}
            className={`option ${props.path === path ? "active" : ""}`}
          >
            <span className={`material-icons ${icon} tab-icon`}>{icon}</span>
            {title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MobileNav;
