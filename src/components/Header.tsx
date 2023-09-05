import {Link, NavLink} from "react-router-dom";

const Header: React.FC = () => {
    const routes = [
        {
            to: "/",
            name: "Home"
        },
        {
            to: "/about",
            name: "About"
        },
    ]

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link to={"/"} className="navbar-brand">
                    <img src="/vite.svg" alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>
                    Vite + React
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        {routes.map(({to, name}) =>
                            <li className="nav-item" key={to}>
                                <NavLink to={to} className={({isActive}) => `nav-link ${isActive ? "active" : ""}`}>
                                    {name}
                                </NavLink>
                            </li>)}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
