import React, { Component, useState, useEffect } from "react";
import { Jumbotron, Button, Form, Row, Col } from "react-bootstrap";
import Sidebar from "../sidebarProduct";
import axios from "axios";
import "./style.css";

import { useSelector, useDispatch } from "react-redux";

export default function SellingProduct() {
  const auth = useSelector((state) => state.auth);
  //untuk user_id masih hardcode..
  //tolong diperhatikan
  //lebih baik, user_id tidak required
  //user_id diisi di backend saja
  //dg cara extract token jwt nya lalu search user yg bersangkutan dan ambil id nya
  //jika yg di sign adalah user_id, maka langsung aja extract dan masukkan di backend user_idnya

  //karo status_product_id kwe apa yah?
  //njaluk diisi soale..

  const [categories, setCategories] = useState([]);
  const [size, setSize] = useState([]);
  const [color, setColor] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8007/categories')
      .then((response) => {
        setCategories(response.data.data);
        // console.log(response.data.data);
      })
      .catch((err) => console.log(err))

    axios.get('http://localhost:8007/sizes')
      .then((response) => {
        setSize(response.data.data);
      })
      .catch((err) => console.log(err))

    axios.get('http://localhost:8007/colors')
      .then((response) => {
        setColor(response.data.data);
      })
      .catch((err) => console.log(err))
  }, [])

  useEffect(() => { })

  const [productToSend, setProductToSend] = useState({
    product_name: '',
    category_id: '',
    size_id: '',
    status_product_id: 3,
    user_id: auth.user_id,
    color_id: '',
    condition_id: '',
    product_price: '',
    product_qty: '',
    product_desc: '',
  });

  //untuk saat ini dipisah, biar gampang debugging nya
  const [productImages, setProductImages] = useState([]);

  const handleChange = (e) => {
    setProductToSend({...productToSend, [e.target.name] : e.target.value})
    console.log(auth);
    console.log(productToSend);
  }

  const handleSelectedFiles = (images) => {
    // console.log(images.target.files)
    const temp = [];
    for (let i = 0; i < Object.keys(images.target.files).length; i++) {
      temp.push(images.target.files[i]);
    }
    console.log(temp);
    setProductImages(temp);
  };

  //example...
  const postProduct = async () => {
    if (productImages.length === 0) {
      console.log("Insert image first");
      return;
    }
    const formData = new FormData();
    productImages.forEach((image) => {
      formData.append("image", image);
    });
    Object.keys(productToSend).forEach((key) => {
      formData.append(key, productToSend[key]);
    });

    const res = await axios
      .post("http://localhost:8007/products", formData, {
        headers: {
          "x-access-token": `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((result) => {
        console.log(`HTTP STATUS CODE ${result.status}`);
        return result.data;
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response.status);
          return err.response.data;
        }
        return null;
      });

    console.log(res);
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div className="container-selling">
        <Form>
          <Jumbotron className="container-content">
            <h3>Inventory</h3>
            <hr></hr>

            <div className="row">
              <div className="col-md-8">
                <Form.Group controlId="formGridAddress1">
                  <Form.Label className="font-p-title">
                    Name of goods
                  </Form.Label>
                  <Form.Control
                    onChange={handleChange}
                    placeholder="Enter your product name"
                    name="product_name"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control as="select" style={{ fontSize: '12px' }} onChange={handleChange} name="category_id">
                    <option value="">-- Choose Category --</option>
                    {categories.map((category) => {
                      return (
                        <option value={category.id}>{category.category_name}</option>
                      )
                    })}
                  </Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Control as="select" style={{ fontSize: '12px' }}  onChange={handleChange} name="size_id">
                    <option value="">-- Choose Size --</option>
                    {size.map((size) => {
                      return (
                        <option value={size.id}>{size.size}</option>
                      )
                    })}
                  </Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Control as="select" style={{ fontSize: '12px' }}  onChange={handleChange} name="color_id">
                    <option value="">-- Choose Color --</option>
                    {color.map((color) => {
                      return (
                        <option value={color.id}>{color.color_name}</option>
                      )
                    })}
                  </Form.Control>
                </Form.Group>
              </div>
            </div>
          </Jumbotron>
          <Jumbotron className="container-gap">
            <h3>Item details</h3>
            <hr></hr>

            <div className="row">
              <div className="col-md-8">
                <Form.Group controlId="formGridAddress1">
                  <Form.Label className="font-p-title">Unit Price</Form.Label>
                  {
                    //mohon untuk validasi integer angka sendiri
                  }
                  <Form.Control
                     onChange={handleChange} name="product_price"
                    placeholder="Enter product price"
                  />
                </Form.Group>
                <Form.Group controlId="formGridAddress1">
                  <Form.Label className="font-p-title">Stock</Form.Label>
                  {
                    //mohon untuk validasi integer stock
                  }
                  <Form.Control
                     onChange={handleChange} name="product_qty"
                    placeholder="Buah"
                  />
                </Form.Group>
                <fieldset>
                  {
                    //hmm bingung main radio button,
                    //dicoba baen wkwk
                  }
                  <Form.Group as={Row}>
                    <Form.Label
                      as="legend"
                      className="font-p-title"
                      column
                      sm={2}
                    >
                    Condition
                    </Form.Label>
                    <Col className="mt-1">
                      <Form.Check
                        type="radio"
                        label="Baru"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                        onClick={handleChange}
                        name="condition_id"
                        value="1"
                      />
                    </Col>
                    <Col className="mt-1">
                      <Form.Check
                        type="radio"
                        label="Bekas"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                        onClick={handleChange}
                        name="condition_id"
                        value="2"
                      />
                    </Col>
                  </Form.Group>
                </fieldset>
              </div>
            </div>
          </Jumbotron>
          <Jumbotron className="container-gap">
            <h3>Photo of goods</h3>
            <hr></hr>
            <div className="row">
              <div className="col-md-8 row">
                {productImages.map((image, index) => {
                  return (
                    <div className="dp-profil m-2" key={index}>
                      <img
                        className="img-profil"
                        src={URL.createObjectURL(image)}
                        alt=""
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            <input
              type="file"
              multiple
              onChange={(e) => {
                handleSelectedFiles(e);
              }}
              className="mt-5"
              accept="image/jpeg,image/png,image/jpg"
              id="customFile"
            ></input>
          </Jumbotron>

          <Jumbotron className="container-gap">
            <h3>Description</h3>
            <hr></hr>
            <Form.Control as="textarea" rows={5} onChange={handleChange} name="product_desc" />
            <div className="row">
              <div className="col-md-8"></div>
            </div>
          </Jumbotron>
          <div className="container-btn d-flex justify-content-end mb-5">
            <div>
              <Button onClick={() => postProduct()} className="btn-login-nav">Jual</Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}