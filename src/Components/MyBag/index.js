import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";

export default class Mybag extends Component {
  constructor(props) {
    super(props);
    this.handleBuy = this.handleBuy.bind(this);
  }
  // console.log(constructor);

  handleBuy = () => {
    // const url = "https://b2bd74521743.ngrok.io/history";
    // const url = "http://localhost:8005/history";
    // const rand = 1 + Math.random() * (999 - 1);
    // axios
    //   .post(url, {
    //     transaction_code: rand,
    //     product_id: localStorage.getItem("id"),
    //     qty: localStorage.getItem("qty"),
    //     total: localStorage.getItem("price"),
    //   })
    //   .then((res) => {
    //     console.log(res);
    //     localStorage.removeItem("id");
    //     localStorage.removeItem("name");
    //     localStorage.removeItem("photo");
    //     localStorage.removeItem("qty");
    //     localStorage.removeItem("price");
    //   })
    //   .catch((err) => console.log(err));
  };

  render() {
    const name = localStorage.getItem("name");
    const qty = localStorage.getItem("qty");
    const price = localStorage.getItem("price");
    const photo = localStorage.getItem("photo");
    console.log(name);
    return (
      <Container className="main">
        <div className="container" style={{ marginTop: "120px" }}>
          <h1>
            <b>My Bag</b>
          </h1>
          <div className="row mt-4">
            <div className="col-md-8  mb-3">
              <div className="card w-100">
                <div className="row no-gutters">
                  <div
                    className="col-md-1 d-flex justify-center"
                    style={{ alignItems: "center" }}
                  >
                    <div className="form-check mx-auto checked-box">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox1"
                        defaultValue="option1"
                      />
                    </div>
                  </div>
                  <div
                    className="col-md-8 d-flex justify-center"
                    style={{ alignItems: "center" }}
                  >
                    <div className="card-body mt-2">
                      <h5 className="card-title d-inline-block">
                        Select all items
                      </h5>
                      <p className="card-text d-inline-block">
                        (2 items selected)
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-md-3 d-flex justify-end"
                    style={{ alignItems: "center" }}
                  >
                    <div className="card-body text-danger text-lg-right mr-4">
                      <a href>Delete</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card w-100 mt-3">
                <div className="row no-gutters">
                  <div
                    className="col-md-1 d-flex justify-center"
                    style={{ alignItems: "center" }}
                  >
                    <div className="form-check mx-auto checked-box">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox1"
                        defaultValue="option1"
                      />
                    </div>
                  </div>
                  <div className="col-md-2 d-flex justify-center">
                    <img
                      src={photo}
                      className="card-img w-75 h-75 m-auto"
                      alt="..."
                    />
                  </div>
                  <div
                    className="col-md-4 d-flex justify-center"
                    style={{ alignItems: "center" }}
                  >
                    <div className="card-body">
                      <h6 className="card-title font-weight-bold">{name}</h6>
                      <p className="card-text">Zalora Cloth</p>
                    </div>
                  </div>
                  <div
                    className="col-md-3 d-flex justify-center"
                    style={{ alignItems: "center" }}
                  >
                    <div className="card-body">
                      <ul className="horizontal-list d-flex justify-center">
                        <li>
                          <span className="color-selected rounded-circle bg-secondary">
                            <FontAwesomeIcon className="minus" icon={faMinus} />
                          </span>
                        </li>
                        <li style={{ margin: "0.9rem 1rem" }}>
                          <span>{qty}</span>
                        </li>
                        <li>
                          <span className="color-selected rounded-circle">
                            <FontAwesomeIcon className="plus" icon={faPlus} />
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="col-md-2 d-flex justify-center"
                    style={{ alignItems: "center" }}
                  >
                    <div className="card-body">
                      <h4 className="cost">{price}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 detail-price">
              <div className="card text-center w-100">
                <div className="card-body">
                  <h5 className="text-left font-weight-bold">Total Summary</h5>
                  <div className="price">
                    <p className="font-weight-bold d-inline">Total Price</p>
                    <p className="text-dark d-inline">
                      <b>{price}</b>
                    </p>
                  </div>
                  <div className="btn d-flex d-xs-none">
                    <Link
                      to="/checkout"
                      onClick={this.handleBuy}
                      className="btnBtm btn-buy mt-2"
                    >
                      Buy Now
                    </Link>
                  </div>
                  <div className="btn d-flex d-lg-none">
                    <Link
                      to="/checkout"
                      onClick={this.handleBuy}
                      className="btnBtm btn-buy mt-2"
                    >
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}
