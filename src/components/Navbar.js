import {NavLink} from "react-router-dom";

export const Navbar = () => (
    <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
        <div className="navbar-brand mx-3">
            App Navbar
        </div>

        <ul className="navbar-nav mr-auto">
            <li className="nav-item ">
                <NavLink
                    className="nav-link"
                    to="/"
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    className="nav-link"
                    to="/about"
                >
                    About
                </NavLink>
            </li>
        </ul>
    </nav>
)
