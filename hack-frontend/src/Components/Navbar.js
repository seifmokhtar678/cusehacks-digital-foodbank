// Functional Component for NavBar
import { Link } from "react-router-dom";
// import "../styling/Navbar.scss" styling not working

const NavBar = () => {
  return (
    <nav className="navbar nav-justified fixed-top navbar-expand-sm bg-dark bg-gradient bg-opacity-85">
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <Link id="navbar-brand" to="/">
        <img
          src="/IMG/EVNow-logo/cover.png"
          alt="EVNow logo"
          style={{ height: "55px" }}
          className="d-inline-block align-text-top"
        />
      </Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="col nav">
          <li className="nav-item dropdown col-3">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
            >
              Learn
            </a>
            <ul className="dropdown-menu">
              <li>
                <Link className="nav-tabs dropdown-item" to="/Terms">
                  Terms
                </Link>
              </li>
              {/* <li>
                <Link className="nav-tabs dropdown-item" to="/EVBenefits">
                  EV Benefits
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/Charging">
                  Charging
                </Link>
              </li> */}
            </ul>
          </li>
          <li className="nav-item col-3">
            <Link to="/ShopEvs" className="nav-link">
              Shop EV's
            </Link>
          </li>
          <li className="nav-item col-3">
            <Link to="/News" className="nav-link">
              News
            </Link>
          </li>
          <li className="nav-item col-3">
            <Link to="/AboutUs" className="nav-link">
              About Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
