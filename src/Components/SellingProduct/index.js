import React, { Component } from "react";
import { Jumbotron, Button, Form, Row, Col } from "react-bootstrap";
import Sidebar from "../sidebarProduct";
import './style.css'

export default class SellingProduct extends Component {
    render() {
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
                                        <Form.Label className="font-p-title">Name of goods</Form.Label>
                                        <Form.Control placeholder="" />
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
                                        <Form.Control placeholder="" />
                                    </Form.Group>
                                    <Form.Group controlId="formGridAddress1">
                                        <Form.Label className="font-p-title">Stock</Form.Label>
                                        <Form.Control placeholder="Buah" />
                                    </Form.Group>
                                    <fieldset>
                                        <Form.Group as={Row}>
                                            <Form.Label as="legend" className="font-p-title" column sm={2}>
                                                Stock
                                            </Form.Label>
                                            <Col className="mt-1">
                                                <Form.Check
                                                    type="radio"
                                                    label="Baru"
                                                    name="formHorizontalRadios"
                                                    id="formHorizontalRadios1"
                                                />
                                            </Col>
                                            <Col className="mt-1">
                                                <Form.Check
                                                    type="radio"
                                                    label="Bekas"
                                                    name="formHorizontalRadios"
                                                    id="formHorizontalRadios2"
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
                                <div className="col-md-8">

                                </div>
                            </div>

                        </Jumbotron>

                        <Jumbotron className="container-gap">
                            <h3>Description</h3>
                            <hr></hr>

                            <div className="row">
                                <div className="col-md-8">

                                </div>
                            </div>

                        </Jumbotron>
                        <div className="container-btn d-flex justify-content-end mb-5">
                            <div className="btn-login-nav">Jual</div>
                        </div>
                    </Form>
                </div>
            </div>
        );
    }
}
