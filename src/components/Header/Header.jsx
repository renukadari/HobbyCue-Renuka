import React from "react";
import logo from "../../assets/Images/pngs/logoImage.png";
import "./Header.css";
import "../../styles/styles.css";
import {
  Button,
  Container,
  Nav,
  Navbar,
  NavDropdown,
  NavLink,
} from "react-bootstrap";
import MobileSearch from "../../assets/Images/pngs/search-mobile.png";
import Explore from "../../assets/Images/pngs/Explore.png";
import Hobbies from "../../assets/Images/pngs/Hobbies.png";
import DownArrow from "../../assets/Images/pngs/downarrow.png";
import Search from "../../assets/Images/pngs/search.png";
import Bookmark from "../../assets/Images/pngs/bookmark.png";
import Cart from "../../assets/Images/pngs/cart.png";
import Notification from "../../assets/Images/pngs/notification.png";
import { useMediaQuery } from "react-responsive";

const Header = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: "768px" });

  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="header-div">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo" className="h-logo-img" />
          </Navbar.Brand>
          {isSmallScreen ? (
            <div><img alt="searchicon" src={MobileSearch} className="mob-search-icon"/></div>
          ) : (
            <div>
              <Nav>
                <div className="d-flex search-bar-div">
                  <input
                    type="text"
                    placeholder="Search here.."
                    className="custom-search-bar"
                  />

                  <div className="search-icon-div">
                    <img src={Search} alt="search" className="" />
                  </div>
                </div>
              </Nav>
            </div>
          )}
          {isSmallScreen && (
            <NavLink className="">
              <img src={Notification} alt="notification" className="" />
            </NavLink>
          )}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <NavDropdown
                title={
                  <span>
                    {" "}
                    <img src={Explore} alt="explore" /> Explore{" "}
                    <img src={DownArrow} alt="downarrow" />
                  </span>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item>People & Places</NavDropdown.Item>
                <NavDropdown.Item>Programs – Events</NavDropdown.Item>
                <NavDropdown.Item>Products – Hobby Shop</NavDropdown.Item>
                <NavDropdown.Item>Hobby Groups</NavDropdown.Item>
                <NavDropdown.Item>Community Members</NavDropdown.Item>
                <NavDropdown.Item>Blog Posts</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title={
                  <span>
                    {" "}
                    <img src={Hobbies} alt="hobbies" /> Hobbies{" "}
                    <img src={DownArrow} alt="downarrow" />
                  </span>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item>The Arts</NavDropdown.Item>
                <NavDropdown.Item>Playing</NavDropdown.Item>
                <NavDropdown.Item>Making Things</NavDropdown.Item>
                <NavDropdown.Item>Activity Participation</NavDropdown.Item>
                <NavDropdown.Item>Collecting</NavDropdown.Item>
                <NavDropdown.Item>All Hobbies</NavDropdown.Item>
              </NavDropdown>
              <NavLink>
                <img src={Bookmark} alt="bookmark" className="header-icon" />
              </NavLink>
              {!isSmallScreen && (
                <NavLink>
                  <img
                    src={Notification}
                    alt="notification"
                    className="header-icon"
                  />
                </NavLink>
              )}

              <NavLink>
                <img src={Cart} alt="cart" className="header-icon" />
              </NavLink>
            </Nav>

            <Button variant="light" className="sign-in-btn">
              Sign In
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
