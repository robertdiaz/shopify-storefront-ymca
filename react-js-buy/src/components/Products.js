import React, { Component } from 'react';
import Product from './Product';

class Products extends Component {
  render() {
    let products = this.props.products.map((product) => {
      return (
        <Product
          addVariantToCart={this.props.addVariantToCart}
          client={this.props.client}
          key={product.id.toString()}
          product={product}
        />
      );
    });

    return (
      <div className="Content-wrapper">
        <h1 className="Products-title">Products</h1>
        <div className="Product-wrapper">
          {products}
        </div>
      </div>
    );
  }
}

export default Products;
