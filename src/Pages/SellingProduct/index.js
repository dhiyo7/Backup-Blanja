import React, { Component } from "react";
import Navbar from "../../Components/Navbar2nd";
import SellingProducts from "../../Components/SellingProduct"


export default class SellingProduct extends Component {
    render() {
        return (
            <>
                <Navbar />
                <SellingProducts />
            </>
        );
    }
}
