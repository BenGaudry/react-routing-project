import { Link } from "react-router-dom";

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
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
