import { Link } from 'react-router-dom';
function Header() {
    return (
        <nav className="header">
            {/* <div className="logo">Red<span>Planet</span></div> */}
            <ul className="header-links">
                <li><a href="/#booking">Home</a></li>

                <li><Link to="/about-us">About</Link></li>
                <li><Link to="/room-details">Rooms</Link></li>
                <li><Link to="/menu-item">Menus</Link></li>
                <li><Link to="/events">Events</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <div className="buttons">
                <Link to="/login">
                    <button className="login">Login</button>
                </Link>
                <Link to="/signup">
                <button className="signup">Sign Up</button>
                </Link>
            </div>
        </nav>

    );
}

export default Header;
