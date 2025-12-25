import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Snowflake, ChevronDown } from 'lucide-react';
import { content } from '../data/content';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <span className="top-bar-motto">Trusted Care for Your Cooling Comfort</span>
          <div className="top-bar-contact">
            <a href={`tel:${content.siteInfo.phone.replace(/\s+/g, '')}`} className="top-contact-link">
              <Phone size={14} />
              <span>{content.siteInfo.phone}</span>
            </a>
            <a href={`mailto:${content.siteInfo.email}`} className="top-contact-link">
              {/* Using a mail icon or just text if preferred, logic similar to phone */}
              <span>{content.siteInfo.email}</span>
            </a>
          </div>
        </div>
      </div>

      <div className="container header-content">
        <Link to="/" className="logo">
          <Snowflake className="logo-icon" size={28} />
          <span>Snow Cool</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {content.menu.map((item, index) => {
            if (item.dropdown) {
              return (
                <div
                  key={index}
                  className="nav-item-dropdown"
                  onMouseEnter={() => setActiveDropdown(index)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={item.path}
                    className={`dropdown-trigger ${location.pathname.startsWith(item.path) ? 'active' : ''}`}
                  >
                    {item.title} <ChevronDown size={14} />
                  </Link>
                  <div className={`dropdown-menu ${activeDropdown === index ? 'show' : ''}`}>
                    {item.dropdown.map((subItem, subIndex) => (
                      <Link key={subIndex} to={subItem.path} className="dropdown-item">
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={index}
                to={item.path}
                className={location.pathname === item.path ? 'active' : ''}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>

        <div className="header-actions">
          {/* Phone is now in top bar, keeping just the btn or checking if live site has both. 
               The image shows top bar has phone/email. The nav bar just has links. 
               Reference image 1: Nav bar has "Home About ... Contact". 
               Wait, the reference image shows "Contact" as a nav item, AND "Book Service" might not be there?
               Let's check the reference image 1 again. 
               It shows: Logo Left. Nav Right (Home, About Us, Services v, Products v, Clients, Contact).
               NO "Book Service" button in the nav bar in the reference image.
               AND contact info is in the black bar above.
           */}

          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav-list">
          {content.menu.map((item, index) => (
            <div key={index} className="mobile-nav-item">
              {item.dropdown ? (
                <>
                  <div
                    className="mobile-dropdown-header"
                    onClick={() => setActiveDropdown(activeDropdown === index ? null : index)}
                  >
                    <span>{item.title}</span>
                    <ChevronDown size={16} className={`arrow ${activeDropdown === index ? 'rotated' : ''}`} />
                  </div>
                  {activeDropdown === index && (
                    <div className="mobile-dropdown-content">
                      <Link to={item.path} className="mobile-sub-link main">All {item.title}</Link>
                      {item.dropdown.map((subItem, subIndex) => (
                        <Link key={subIndex} to={subItem.path} className="mobile-sub-link">
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link to={item.path} className="mobile-link">
                  {item.title}
                </Link>
              )}
            </div>
          ))}
          <button className="btn btn-primary w-full mobile-book-btn">Book Service</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
