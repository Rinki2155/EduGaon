import React, { useState } from "react";
import { Button, Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import LoginModal from "../Components/Homepage/LoginModal";
import Explore from "../Components/Homepage/Explore";
import Tooltip from "@mui/material/Tooltip";
//import Sidebar from "./Sidebar";

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedNavItem, setSelectedNavItem] = useState(null);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const navItems = [
    { id: "home", label: "Home", link: "#action1" },
    { id: "explore", label: "Explore Program", link: "#explore" },
    { id: "career", label: "Career Support", link: "#action2" },
    { id: "success", label: "Success Stories", link: "#" },
    { id: "abroad", label: "Study Abroad", link: "#action2" },
    { id: "enterprise", label: "Enterprise", link: "#action2" },
    { id: "recruiters", label: "For Recruiters", link: "#action2" },
  ];

  const handleNavItemClick = (id) => {
    setSelectedNavItem(id);
    setDrawerOpen(false);
  };

  return (
    <>
      <Navbar expand="lg" style={{ backgroundColor: "#ff830e" }}>
        <Container fluid>
          <Button
            variant="link"
            className="text-light p-0 ms-2"
            onClick={toggleDrawer}
          >
            <i className="bi bi-list text-light" />
          </Button>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {navItems.map((item) => (
                <Nav.Link
                  key={item.id}
                  to={item.link}
                  className={`menu mx-3 ${
                    selectedNavItem === item.id ? "active" : ""
                  }`}
                  onClick={() => handleNavItemClick(item.id)}
                >
                  {item.label}
                </Nav.Link>
              ))}
            </Nav>

            <Nav.Link to="#" className="mx-auto">
              <LoginModal />
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Drawer Component */}
      <Offcanvas show={drawerOpen} onHide={toggleDrawer} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="list-unstyled">
            {navItems.map((item) => (
              <li
                key={item.id}
                className={selectedNavItem === item.id ? "active" : ""}
                onClick={() => handleNavItemClick(item.id)}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Header;
