import { useEffect, useState } from 'react';
import './Navbar.css'; // Custom CSS for styling
import { Link } from "react-router-dom";
import { FaChevronDown, FaBars, FaTimes, FaRegUserCircle } from 'react-icons/fa'; // Adding icons for hamburger menu
import logo from "../../assets/logo/BSESA.png";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu
  const [state, setState] = useState(false);
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    // Check for user data in localStorage
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }

    // Close menu on click outside
    document.onclick = (e) => {
      const target = e.target;
      if (!target.closest(".menu-btn")) setState(false);
      if (!target.closest(".user-avatar")) setMenuOpen(false);
    };
  }, []);


  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen); // Toggle mobile menu
  };

  return (
    <nav className="navbar">
      <div className="logo">
      <Link to="/">
        <img src={logo} alt="Logo" />
        </Link>
      </div>
      
      <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <li><Link to="/">Home</Link></li>
        
        <li className="dropdown">
          <Link to="#services">
            Services <FaChevronDown className="arrow-icon" />
          </Link>
          <div className="services-dropdown">
            <div className="dropdown-item">Training Courses</div>
            <div className="dropdown-item">Academy Development</div>
            <div className="dropdown-item">Trainer Experience</div>
            <div className="dropdown-item">Team Experience</div>
          </div>
        </li>
        
        <li className="dropdown">
          <Link to="#academic">
            Academic <FaChevronDown className="arrow-icon" />
          </Link>
          <div className="academic-dropdown">
            <div className="dropdown-item">Research</div>
            <div className="dropdown-item">Articles</div>
            <div className="dropdown-item">Scientific Conferences</div>
            <div className="dropdown-item">Lab Visit Service</div>
          </div>
        </li>

        <li><Link to="/Membership">Membership</Link></li>
        <li><Link to="/Aboutus">About Us</Link></li>
      </ul>

      <div className="auth-buttons">

       {user ? (
                <div className="relative">
                  <button className="user-button user-avatar flex items-center gap-2" onClick={() => setMenuOpen(!menuOpen)}>
                    {/* <img src={<FaRegUserCircle/>} alt="avatar" className="w-8 h-8 rounded-full" /> */}
                    <sapn className="user-icon w-8 h-8 rounded-full" ><FaRegUserCircle/></sapn>
                    <span className="text-black-600 text-lg">{user.firstName}  {user.lastName}</span>
                  </button>
                  {menuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-10">
                      <Link to="/account" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">Account </Link>
                      <Link to="/settings" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"> Settings</Link>
                     
                      <Link to="/certificates" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">My Certificates</Link>
                      <button
                        onClick={() => {
                          localStorage.removeItem("user");
                          setUser(null);
                          setMenuOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-red-500 hover:bg-red-100 rounded"
                      >
                        Log Out
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <>
             
                  <Link to="/Login" className="">
                  <button> Log in </button>
                  </Link>
                 
                  <Link to="/Signup" className="">
                  <button> Sign in  
                    </button>
                   
                  </Link>
                </>
              )}
      </div>

      {/* Hamburger Menu Icon for Mobile */}
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
