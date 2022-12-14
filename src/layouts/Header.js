import React from "react";
import { Link } from "react-router-dom";
import {
    Navbar,
    Collapse,
    Nav,
    NavItem,
    NavbarBrand,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Dropdown,
    Button,
} from "reactstrap";
import Logo from "./Logo";
import { ReactComponent as LogoWhite } from "../assets/images/logos/materialpro.svg";
import user5 from "../assets/images/users/user5.jpg";

const Header = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const [dropdownOpen, setDropdownOpen] = React.useState(false);

    const toggle = () => setDropdownOpen((prevState) => !prevState);
    const Handletoggle = () => {
        setIsOpen(!isOpen);
    };
    const showMobilemenu = () => {
        document.getElementById("sidebarArea").classList.toggle("showSidebar");
    };
    return (
        <Navbar color="primary" dark expand="md" className="fix-header">
            <div className="d-flex align-items-center">
                <div className="d-lg-block d-none">
                    <Logo />
                </div>
                {/* <NavbarBrand href="/">
                    <LogoWhite className=" d-lg-none" />
                </NavbarBrand> */}
                <Button
                    color="primary"
                    className=" d-lg-none"
                    onClick={() => showMobilemenu()}
                >
                    <i className="bi bi-list"></i>
                </Button>
            </div>
            <div className="hstack gap-2">
                <Button
                    color="primary"
                    size="sm"
                    className="d-sm-block d-md-none"
                    onClick={Handletoggle}
                >
                    {isOpen ? (
                        <i className="bi bi-x"></i>
                    ) : (
                        <i className="bi bi-three-dots-vertical"></i>
                    )}
                </Button>
            </div>

            <Collapse navbar isOpen={isOpen}>
                <Nav className="me-auto" navbar>
                    <NavItem>
                        <Link
                            to="/starter"
                            className="nav-link"
                            style={{ color: "white" }}
                        >
                            Job Listings
                        </Link>
                    </NavItem>
                    {/* <NavItem>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </NavItem> */}
                    {/* <UncontrolledDropdown inNavbar nav>
            <DropdownToggle caret nav>
              DD Menu
            </DropdownToggle>
            <DropdownMenu end>
              <DropdownItem>Option 1</DropdownItem>
              <DropdownItem>Option 2</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Reset</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown> */}
                </Nav>

                <span
                    style={{ color: "white", padding: "7px", fontSize: "12px" }}
                >
                    dan.smith@byu.edu
                </span>
                <img
                    src={user5}
                    alt="profile"
                    className="rounded-circle"
                    width="30"
                ></img>
                {/* <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle color="transparent">
            
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Info</DropdownItem>
            <DropdownItem>My Account</DropdownItem>
            <DropdownItem>Edit Profile</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>My Balance</DropdownItem>
            <DropdownItem>Inbox</DropdownItem>
            <DropdownItem>Logout</DropdownItem>
          </DropdownMenu>
        </Dropdown> */}
            </Collapse>
        </Navbar>
    );
};

export default Header;
