import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import styles from "./NavMenu.module.scss";
import SearchBox from "../SearchBox/SearchBox";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

const NavMenu = () => {
  const links = [
    { id: 1, to: `/furniture`, title: `Furniture` },
    { id: 2, to: `javascript:;`, title: `Lighting` },
    { id: 3, to: `javascript:;`, title: `Decor` },
    { id: 4, to: `javascript:;`, title: `Tablewear` },
  ];

  const [search, setSearch] = useState("");

  const handleChange = (e) => setSearch(e.target.value);
  const handleOnKeyDown = (e) => {
    if (search && e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
      setSearch("");
    }
  };

  const handleSubmit = () => {
    const searchData = {};
    if (search) searchData.search = search;
  };

  return (
    <Navbar className={styles.navBarContainer}>
      <Link to="/" className={styles.navԼօգօ}>
        <img src="assets/logo.png" width="15%" alt="logo" />
      </Link>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" className={styles.navLinks}>
          {links.map(({ id, to, title }) => (
            <NavLink
              key={id}
              to={to}
              exact
              className={styles.navLink}
              activeClassName={styles.activePage}
            >
              {title}
            </NavLink>
          ))}

          <div className={styles.cartSearchContainer}>
            <NavLink
              exact
              to="/checkout"
              className={styles.navLink}
              activeClassName={styles.activePage}
            >
              <ShoppingCartOutlinedIcon fontSize="large" />
            </NavLink>
            <SearchBox
              value={search}
              onChange={handleChange}
              onKeyDown={handleOnKeyDown}
              onSubmit={handleSubmit}
            />
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavMenu;
