import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="top-bar">
      <div className="content">
        <div className="brand">
          <h3>Web Creator</h3>
        </div>
        <nav className="top-bar-nav">
          <ul className="nav-items">
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active-nav-item" : "")}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active-nav-item" : "")}
                to="/blogs"
              >
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active-nav-item" : "")}
                to="/dashboard"
              >
                Dashboard
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
