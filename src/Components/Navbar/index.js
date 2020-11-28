import React, { Component } from "react";

import {
  InputGroup,
  Navbar,
  FormControl,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faFilter } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

export default class Navbarr extends Component {
  render() {
    return (
      <header className="">
        <Navbar fixed="top" className="container" bg="white">
          <Navbar.Brand href="#home">
            <img
              src="https://res.cloudinary.com/devloops7/image/upload/v1606499947/newBlanja/VectorlogoBesar_vobugk.png"
              width="30"
              height="44"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            <Navbar.Text className="textNavbar" style={{color: 'red'}}>Blanja</Navbar.Text>
          </Navbar.Brand>
          <Navbar.Toggle />
          <div className="input-search d-flex justify-content-end ml-5">
            <InputGroup className="inline ">
              <FormControl
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append className="mr-2">
              <FontAwesomeIcon className="icon-search " icon={faSearch} />
              </InputGroup.Append>
            </InputGroup>
            {/* <Form className="inline input-search">
              <FormControl
                className="input-search"
                placeholder="Search"
              ></FormControl>
            </Form>
            <FontAwesomeIcon className="icon-search" icon={faSearch} /> */}
          </div>
          <div className="icon-filter">
            <FontAwesomeIcon icon={faFilter} />
          </div>
          <Navbar.Collapse className="justify-content-end">
            <img
              src={
                "https://res.cloudinary.com/devloops7/image/upload/v1606580439/newBlanja/cart_s7fhsn.png"
              }
              style={{ marginRight: "40px" }}
              alt=""
            />
            <div className="btn-login-nav">Login</div>
            <div className="btn-signup-nav">Signup</div>
          </Navbar.Collapse>
        </Navbar>
      </header>

      // <Container>
      //   <nav className="navbar fixed-top mx-auto">
      //     <div className="nav-logo">
      //       <a className="navbar-brand d-flex align-items-center" href="">
      //         <img
      //           src="https://res.cloudinary.com/devloops7/image/upload/v1606499947/newBlanja/VectorlogoBesar_vobugk.png"
      //           className="d-inline-block align-top"
      //           alt
      //         />
      //         <span className="font-logo">Blanja</span>
      //       </a>
      //     </div>
      //     <form className="form-inline">
      //       <div className="input-search">
      //         <i className="fa fa-search icon-search"></i>
      //         <input
      //           type="text"
      //           className="input-search-field"
      //           placeholder="Search"
      //         />
      //       </div>
      //       <div className="icon-filter">
      //         <i className="fa fa-filter"></i>
      //       </div>
      //     </form>
      //     <div className="icon-cart right-0">
      //       <img src="./src/images/cart.png" alt srcset />
      //     </div>
      //     <i
      //       className="fa fa-sign-in"
      //       style="font-size:28px"
      //       aria-hidden="true"
      //     ></i>
      //     <a href="login.html" className="btn-login-nav">
      //       Login
      //     </a>
      //     <a href="register.html" className="btn-signup-nav">
      //       Sign Up
      //     </a>
      //   </nav>
      // </Container>
    );
  }
}
