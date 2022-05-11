import { Link } from "react-router-dom";

const NavBar = () => {
    return ( 
        <nav className="navbar">
            <h1>Search Breweries</h1>
            <div className="links">
                <Link to="/">Cards</Link>
                <Link to="/datatable">Table</Link>
            </div>
        </nav>
     );
}
 
export default NavBar;