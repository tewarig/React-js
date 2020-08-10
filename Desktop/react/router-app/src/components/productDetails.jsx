import React, { Component } from "react";

class ProductDetails extends Component {
  handleSave = () => {
    // Navigate to /products
    this.props.history.push("/products");
    //push for normal things
    //replace for login // where you do not want to go back.........
  };

  render() {
    return (
      <div>
        <h1>Product Details -{this.props.match.params.id} </h1>
        <button onClick={this.handleSave}>Save</button>
      </div>
    );
  }
}

export default ProductDetails;
