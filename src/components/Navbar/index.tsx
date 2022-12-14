import './styles.css';
import 'bootstrap/js/src/collapse.js';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-primary main-nav">
      <div className="container-fluid">
        <a href="link" className="nav-logo-text">
          <h4>Carros Top</h4>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#desafio1-navbar"
          aria-controls="desafio1-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse nav-itens" id="desafio1-navbar">
          <ul className="navbar-nav offset-md-2 main-menu">
            <li>
            <NavLink to="/" className={(navData) => navData.isActive ? "active" : ""} end>Home</NavLink>
            </li>
            <li>
            <NavLink to="/catalog" className={(navData) => navData.isActive ? "active" : ""} end>Catálogo</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
