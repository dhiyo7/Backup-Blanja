import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./style.css";

import axios from "axios";

export default class Popular extends Component {
    state = {
        popularProducts: []
    }

    getPopularProducts = () => {
        const url = " https://a98489921bc3.ngrok.io/products/";
    axios
      .get(url)
      .then((res) => {
        const popularProducts = res.data.data;
        this.setState({ popularProducts });
      })
      .catch((err) => err);
    }

    componentDidMount () {
        this.getPopularProducts()
    }
  render() {
    return (
      <>
        <div className="tittle">
          <h2 style={{ fontSize: "34px" }}> Popular </h2>
          <div className="d-flex justify-content-between">
            <p style={{ fontSize: "12px", color: "gray" }}>
              find clothes that are trending recently
            </p>
            <p style={{ fontSize: "14px", color: "gray" }}>
              <strong>SEE ALL </strong>
              <FontAwesomeIcon icon={faChevronRight} />
              <FontAwesomeIcon icon={faChevronRight} />
            </p>
          </div>
        </div>

        <div className="row-catalog">
          {this.state.popularProducts.map((popularProduct, id, ) => {
            return (
              <div key={id} className="card card-catalog">
                <Link to={`/detail/${popularProduct.id}`}>
                  <img
                    src={popularProduct.product_photo}
                    alt=""
                    className="card-img-top img-news"
                    width="238"
                    height="136"
                  />
                  <div className="card-body">
                    <p className="card-catalog-title">
                      {popularProduct.product_name}
                    </p>
                    <p className="card-catalog-price">
                      {popularProduct.product_price}
                    </p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      
      </>
    )
  }
}