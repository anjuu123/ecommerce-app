import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import './Product.css'


export default function Product() {
  
  // creating states for product
  // using the id parameter for fetching data for single product

  const { id } = useParams();
  const [product, setProduct] = useState([]);
  // fetching product data from api

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
    };

    getProduct();
  });

 

  //showing single product before adding to cart

  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6 d-flex product ">
          <img
            src={product.image}
            alt={product.title}
            height="400px"
            width="400px"
          />
        </div>

        <div className="col-md-6 ">
          <h1 className="title ">{product.title}</h1>

          <h3 className="display-6 fw-bold my-4">$ {product.price}</h3>

          <p className="lead">{product.description}</p>
          <p className="lead fw-bolder">
            Rating {product.rating && product.rating.rate}
            <i className="fa fa-star"></i>
          </p>
          <button
            className="btn btn-success fw-bold px-4 py-2">
            Add to Cart
          </button>

          <Link to="/products" id ="btn-info" className="btn btn-info ms-2 px-3 py-2">
            Continue Shopping
          </Link>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="container py-5">
        <div className="row py-5">{<ShowProduct />}</div>
      </div>
    </>
  );
}
