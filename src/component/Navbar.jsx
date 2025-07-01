import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { BASE_URL } from "../../env";
import { removeUser } from "../utils/userSlice";
import { removefeed } from "../utils/feedSlice";
import { removeConnectionUser } from "../utils/connectionSlice";
import { removeRequest } from "../utils/requestSlice";
const Navbar = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = async () => {
    try {
      await axios.post(BASE_URL + "/logout", {}, { withCredentials: true });

      // Clear frontend state
      dispatch(removeUser());
      dispatch(removefeed());
      dispatch(removeConnectionUser());
      dispatch(removeRequest());

      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="navbar bg-base-100 shadow-sm">
      {/* Left: Hamburger Dropdown */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Homepage</a>
            </li>
            <li>
              <Link to={"/profile"}>Portfolio</Link>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Center: Logo */}
      <div className="navbar-center">
        <Link to={"/"} className="btn btn-ghost text-xl">
          devSocial
        </Link>
      </div>

      {/* Right: Notification & User */}
      <div className="navbar-end gap-2">
        {/* Notification Bell */}
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>

        {/* User Avatar & Dropdown */}
        {user && (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img
                  alt={
                    user.firstName
                      ? `${user.firstName}'s profile`
                      : "User Profile"
                  }
                  src={user.photoUrl}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-10 menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="menu-title">
                <span>Welcome, {user.firstName}</span>
              </li>
              <li>
                <Link to={"/profile"} className="justify-between">
                  Profile
                  <span className="badge badge-primary">New</span>
                </Link>
              </li>
              <li>
                <Link to={"/connections"}>Connections</Link>
              </li>
              <li>
                <Link to={"/request"}>Request</Link>
              </li>
              <li>
                <button onClick={logoutHandler} className="w-full text-left">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
