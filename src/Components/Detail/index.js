/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { Container } from "react-bootstrap";
import "./style.css";

export default class Detail extends Component {
  render() {
    return (
      <Container className="main">
        <p className="font-p-title">
          Home {'>'} category {'>'} <b>T-Shirt</b>
        </p>
        <div className="row">
          <div className="col-sm-4">
            <img
              src="https://res.cloudinary.com/devloops7/image/upload/v1606663570/newBlanja/T-shirt_ikcavv.png"
              alt="img"
              className="rounded img-fluid"
            />
            <div className="mt-3 more-images">
              <ul className="horizontal-list">
                <li>
                  <a href>
                    <img
                      src="https://res.cloudinary.com/devloops7/image/upload/v1606663570/newBlanja/T-shirt_ikcavv.png"
                      alt="img"
                      className="rounded small-images"
                    />
                  </a>
                </li>
                <li>
                  <a href>
                    <img
                      src="https://res.cloudinary.com/devloops7/image/upload/v1606663570/newBlanja/T-shirt_ikcavv.png"
                      alt="img"
                      className="rounded small-images"
                    />
                  </a>
                </li>
                <li>
                  <a href>
                    <img
                      src="https://res.cloudinary.com/devloops7/image/upload/v1606663570/newBlanja/T-shirt_ikcavv.png"
                      alt="img"
                      className="rounded small-images"
                    />
                  </a>
                </li>
                <li>
                  <a href>
                    <img
                      src="https://res.cloudinary.com/devloops7/image/upload/v1606663570/newBlanja/T-shirt_ikcavv.png"
                      alt="img"
                      className="rounded small-images"
                    />
                  </a>
                </li>
                <li>
                  <a href>
                    <img
                      src="https://res.cloudinary.com/devloops7/image/upload/v1606663570/newBlanja/T-shirt_ikcavv.png"
                      alt="img"
                      className="rounded small-images"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-8">
            <h3>Baju Muslim Pria</h3>
            <p className="font-p-title ml-1">
              <b>Zalora Cloth</b>
            </p>
            <div className="rating mt-n2 ml-1">
            <FontAwesomeIcon className="bintang" icon={faStar} />
            <FontAwesomeIcon className="bintang" icon={faStar} />
            <FontAwesomeIcon className="bintang" icon={faStar} />
            <FontAwesomeIcon className="bintang" icon={faStar} />
            <FontAwesomeIcon className="bintang" icon={faStar} />
              <span>(5)</span>
            </div>
            <p className="font-p-title ml-1 mt-3">
              <b>Price</b>
            </p>
            <h2 className="mt-n3">
              <b>$ 20.0</b>
            </h2>
            <p className="font-p-title ml-1 mt-3 text-dark">
              <b>Color</b>
            </p>
            <ul className="horizontal-list">
              <li>
                <span className="color-selected rounded-circle border border-danger">
                  <a
                    href
                    className="color-option rounded-circle"
                    style={{ backgroundColor: "black" }}
                  />
                </span>
              </li>
              <li>
                <a href className="color-option rounded-circle bg-danger"></a>
              </li>
              <li>
                <a href className="color-option rounded-circle bg-primary"></a>
              </li>
              <li>
                <a href className="color-option rounded-circle bg-success"></a>
              </li>
            </ul>
            <div className="row justify-content-start">
              <div className="col-sm-4">
                <p className="font-p-title ml-1 mt-3 text-dark">
                  <b>Size</b>
                </p>
                <ul className="horizontal-list d-flex justify-center">
                  <li>
                    <span className="color-selected rounded-circle bg-secondary">
                    <FontAwesomeIcon className="minus" icon={faMinus} />
                    </span>
                  </li>
                  <li style={{ margin: "0.9rem 1rem" }}>
                    <span>28</span>
                  </li>
                  <li>
                    <span className="color-selected rounded-circle">
                    <FontAwesomeIcon className="plus" icon={faPlus} />
                    </span>
                  </li>
                </ul>
              </div>
              <div className="col-sm-4">
                <p className="font-p-title ml-1 mt-3 text-dark">
                  <b>Jumlah</b>
                </p>
                <ul className="horizontal-list d-flex justify-center">
                  <li>
                    <span className="color-selected rounded-circle bg-secondary">
                    <FontAwesomeIcon className="minus" icon={faMinus} />
                    </span>
                  </li>
                  <li style={{ margin: "0.9rem 1rem" }}>
                    <span>1</span>
                  </li>
                  <li>
                    <span className="color-selected rounded-circle">
                    <FontAwesomeIcon className="plus" icon={faPlus} />
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className=" d-flex justify-content-between">
              <a href className="btnGrup btn-chart mt-2">
                Chart
              </a>
              <a href className="btnGrup btn-add-bag mt-2">
                Add bag
              </a>
              <a href className="btnGrup btn-buy mt-2">
                Buy Now
              </a>
            </div>
          </div>
        </div>

        <h3 className="mt-3">Informasi Produk</h3>
        <div>
          <p className="mt-3 text-dark">
            <b>Condition</b>
          </p>
          <p className="mt-n3 text-danger">
            <b>New</b>
          </p>
          <p className="mt-4 text-dark">
            <b>Description</b>
          </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>
            Donec non magna rutrum, pellentesque augue eu, sagittis velit.
            Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et
            malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim
            vel turpis blandit imperdiet ac ac felis. Etiam tincidunt tristique
            placerat. Pellentesque a consequat mauris, vel suscipit ipsum. Donec
            ac mauris vitae diam commodo vehicula. Donec quam elit, sollicitudin
            eu nisl at, ornare suscipit magna.
          </p>
          <p>
            Donec non magna rutrum, pellentesque augue eu, sagittis velit.
            Phasellus quis laoreet dolor. Fusce nec pharetra quam. Interdum et
            malesuada fames ac ante ipsum primis in faucibus. Praesent sed enim
            vel turpis blandit imperdiet ac ac felis.
          </p>
          <p>In ultricies rutrum tempus. Mauris vel molestie orci.</p>
        </div>
        <h2>Product Review</h2>

        <Container style={{ marginBottom: "70px" }}>
          <div className="row">
            <div className="col-md-3 align-item-center justify-content-center">
              <h1 className="display-1 d-inline">
                <b>5.0</b>
              </h1>
              <p className="d-inline-block ml-1 mt-3 text-dark">
                <b>/ 10</b>
              </p>
              <div className="rating mt-n2 ml-1 d-flex">
                <FontAwesomeIcon className="bintang" icon={faStar} />
                <FontAwesomeIcon className="bintang" icon={faStar} />
                <FontAwesomeIcon className="bintang" icon={faStar} />
                <FontAwesomeIcon className="bintang" icon={faStar} />
                <FontAwesomeIcon className="bintang" icon={faStar} />
              </div>
            </div>

            <div className="col-md-3">
              <div className="row">
                <div className="side">
                  <div>
                    {" "}
                    <FontAwesomeIcon className="bintang" icon={faStar} />5
                  </div>
                </div>
                <div className="middle">
                  <div className="bar-container">
                    <div className="bar-5"></div>
                  </div>
                </div>
                <div className="side right">
                  <div>4</div>
                </div>
                <div className="side">
                  <div>
                    <FontAwesomeIcon className="bintang" icon={faStar} />4
                  </div>
                </div>
                <div className="middle">
                  <div className="bar-container">
                    <div className="bar-4"></div>
                  </div>
                </div>
                <div className="side right">
                  <div>0</div>
                </div>
                <div className="side">
                  <div>
                    <FontAwesomeIcon className="bintang" icon={faStar} />3
                  </div>
                </div>
                <div className="middle">
                  <div className="bar-container">
                    <div className="bar-3"></div>
                  </div>
                </div>
                <div className="side right">
                  <div>0</div>
                </div>
                <div className="side">
                  <div>
                    <FontAwesomeIcon className="bintang" icon={faStar} />2
                  </div>
                </div>
                <div className="middle">
                  <div className="bar-container">
                    <div className="bar-2"></div>
                  </div>
                </div>
                <div className="side right">
                  <div>0</div>
                </div>
                <div className="side">
                  <div>
                    <FontAwesomeIcon className="bintang" icon={faStar} />1
                  </div>
                </div>
                <div className="middle">
                  <div className="bar-container">
                    <div className="bar-1"></div>
                  </div>
                </div>
                <div className="side right">
                  <div>0</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
        
        {/* Menu Bottom */}
        <div className="btn d-flex d-lg-none">
          <a href className="btnBtm btn-chart mt-2">
            Chart
          </a>
          <a href className="btnBtm btn-add-bag mt-2">
            Add bag
          </a>
          <a href className="btnBtm btn-buy mt-2">
            Buy Now
          </a>
        </div>
      </Container>
    );
  }
}
