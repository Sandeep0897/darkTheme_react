import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../theme-context";
import "../styles.css";

function Navbar() {
  const { theme, handleTheme } = useTheme();

  return (
    <Fragment>
      <nav className={`nav-${theme}`}>
        <div className="navbar">
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/about">About</Link>
          <div className="toggle-switch">
            <label>
              <input
                type="checkbox"
                onChange={() => handleTheme()}
                checked={theme === "Light"}
              />
              <span className="slider"></span>
            </label>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}

export default Navbar;
