import { Button, Nav, NavItem } from "reactstrap";
import { Link, useLocation } from "react-router-dom";
import user5 from "../assets/images/users/user5.jpg";
import probg from "../assets/images/bg/byuSign.jpeg";

const navigation = [
    {
        title: "Job Postings",
        href: "/starter",
        icon: "bi bi-grid",
    },
    {
        title: "Saved Jobs",
        href: "/saved",
        icon: "bi bi-star",
    },
    {
        title: "Recommendations",
        href: "/recommend",
        icon: "bi bi-patch-check",
    },
    {
        title: "Applications",
        href: "/applications",
        icon: "bi bi-hdd-stack",
    },
    {
        title: "Your Info",
        href: "/info",
        icon: "bi bi-people",
    },
    // {
    //   title: "Grid",
    //   href: "/grid",
    //   icon: "bi bi-columns",
    // },
    // {
    //   title: "Table",
    //   href: "/table",
    //   icon: "bi bi-layout-split",
    // },
    // {
    //   title: "Forms",
    //   href: "/forms",
    //   icon: "bi bi-textarea-resize",
    // },
    // {
    //   title: "Breadcrumbs",
    //   href: "/breadcrumbs",
    //   icon: "bi bi-link",
    // },
    // {
    //   title: "About",
    //   href: "/about",
    //   icon: "bi bi-people",
    // },
];

const Sidebar = () => {
    const showMobilemenu = () => {
        document.getElementById("sidebarArea").classList.toggle("showSidebar");
    };
    let location = useLocation();

    return (
        <div>
            <div className="d-flex align-items-center"></div>
            <div
                className="profilebg"
                style={{
                    background: `url(${probg}) no-repeat center`,
                    backgroundSize: "100%",
                }}
            >
                <div className="p-3 d-flex">
                    <img
                        src={user5}
                        alt="user"
                        width="50"
                        className="rounded-circle"
                    />
                    <Button
                        style={{
                            color: "white",
                            backgroundColor: "charcoal gray",
                        }}
                        className="ms-auto text-white d-lg-none"
                        onClick={() => showMobilemenu()}
                    >
                        <i className="bi bi-x"></i>
                    </Button>
                </div>

                <div className="bg-dark text-white p-2 opacity-75">
                    Dan Smith
                </div>
            </div>
            <div className="p-3 mt-2">
                <Nav vertical className="sidebarNav">
                    {navigation.map((navi, index) => (
                        <NavItem key={index} className="sidenav-bg">
                            <Link
                                to={navi.href}
                                className={
                                    location.pathname === navi.href
                                        ? "active nav-link py-3"
                                        : "nav-link text-secondary py-3"
                                }
                            >
                                <i className={navi.icon}></i>
                                <span className="ms-3 d-inline-block">
                                    {navi.title}
                                </span>
                            </Link>
                        </NavItem>
                    ))}
                </Nav>
            </div>
        </div>
    );
};

export default Sidebar;
