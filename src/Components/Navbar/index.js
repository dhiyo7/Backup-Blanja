import React, { Component } from "react";

import { Navbar, FormControl, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faFilter } from "@fortawesome/free-solid-svg-icons";
import * as styles from "./style.js";

export default class Navbarr extends Component {
  render() {
    return (
      <div className="">
        <Navbar
          fixed="top"
          className="container"
          style={styles.style.navbarBlanja}
        >
          <Navbar.Brand href="#home">
            <img
              src="https://res.cloudinary.com/devloops7/image/upload/v1606499947/newBlanja/VectorlogoBesar_vobugk.png"
              width="30"
              height="44"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            <Navbar.Text style={styles.style.textNavbar}>Blanja</Navbar.Text>
          </Navbar.Brand>
          <Navbar.Toggle />
          <div className="d-flex justify-content-end ml-5">
            <Form>
              <FormControl
                style={styles.style.formSearching}
                placeholder="Search"
              ></FormControl>
            </Form>
            <FontAwesomeIcon icon={faSearch} style={styles.style.iconSearch} />
          </div>
          <Button style={styles.style.btnFilter} className="">
            <FontAwesomeIcon icon={faFilter} />
          </Button>
          <Navbar.Collapse className="justify-content-end">
            <img
              src={
                "https://res.cloudinary.com/devloops7/image/upload/v1606580439/newBlanja/cart_s7fhsn.png"
              }
              style={{ marginRight: "40px" }}
              alt=""
            />
            <Button style={styles.style.btnLogin}>Login</Button>
            <Button style={styles.style.btnSignUp}>Signup</Button>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
