import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Header.css';

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/login');
  };

  const handleCheckAvailability = () => {
    console.log('Checking availability with:', {
      checkInDate,
      checkOutDate,
      adults,
      children,
    });
    // You can navigate or call an API here
    setShowBookingForm(false); // close modal after checking
  };

  return (
    <nav className="header">
      <ul className="header-links">
        <li><a href="/#booking">Home</a></li>
        <li><Link to="/about-us">About</Link></li>
        <li><Link to="/room-details">Rooms</Link></li>
        <li><Link to="/menu-item">Menus</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <button className="login" onClick={() => setShowBookingForm(true)}>Book Now</button>
      </ul>

      <div className="buttons">
        {isLoggedIn ? (
          <button className="logout" onClick={handleLogout}>Logout</button>
        ) : (
          <>
            <Link to="/login">
              <button className="login">Login</button>
            </Link>
            <Link to="/signup">
              <button className="signup">Sign Up</button>
            </Link>
          </>
        )}
      </div>

      {/* Booking Form Popup */}
      {showBookingForm && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Book Your Stay</h2>
            <form className="booking-form">
              <label>Check-in Date:</label>
              <input
                type="date"
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
                required
              />

              <label>Check-out Date:</label>
              <input
                type="date"
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
                required
              />

              <label>Adults:</label>
              <input
                type="number"
                min="1"
                value={adults}
                onChange={(e) => setAdults(Number(e.target.value))}
                required
              />

              <label>Children:</label>
              <input
                type="number"
                min="0"
                value={children}
                onChange={(e) => setChildren(Number(e.target.value))}
              />

              <div className="booking-buttons">
                <button type="button" onClick={handleCheckAvailability}>
                  Check Availability
                </button>
                <button type="button" onClick={() => setShowBookingForm(false)}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;
