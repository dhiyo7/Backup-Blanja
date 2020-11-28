import React, { Component } from "react";
import Carousel from "../../Components/Carousel";
import Categories from "../../Components/Categories";

export default class Home extends Component {
  render() {
    return (
      <>
        <Carousel />
        <Categories />
      </>
    );
  }
}
