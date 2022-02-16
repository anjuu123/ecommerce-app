import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { addCart } from "./Action";

export default function Product  () {
  // creating states for product
  // using the id parameter for fetching data for single product

  const { id } = useParams();
  const [product, setProduct] = useState([]);
  // fetching product data from api

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
    
    }

    getProduct();
  });



  // const dispatch = useDispatch();
  // const addProduct = (product) => {
  //   dispatch(addCart(product));
  // };




  //showing single product before adding to cart

   const ShowProduct = () => {
        return(
            <>
            <div className="col-md-6">
                <img src={product.image} alt={product.title} height="400px" width="400px"/>
            </div>
            <div className="col-md-6">
                <h4 className='text-uppercase text-black-50'>
                    {product.category}
                </h4>
                <h1 className='display-5'>{product.title}</h1>
                <p className='lead fw-bolder'>
                    Rating {product.rating && product.rating.rate}
                    <i className='fa fa-star'></i>
                </p>
                <h3 className='display-6 fw-bold my-4'>
                $ {product.price}</h3>

                <p className='lead'>{product.description}</p>
                {/* <button className="btn btn-outline-dark px-4 py-2"onClick={()=> addProduct(product)}>Add to Cart</button>
                <Link to ="/cart" className="btn btn-outline-dark ms-2 px-3 py-2">Go to Cart</Link> */}
            </div>
            </>
        )
    }
  return (
    <>
      <div className="container">
        <div className="row">
            {<ShowProduct />}</div>
      </div>
    </>
  );
}
