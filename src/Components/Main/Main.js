import React, { useState, useEffect} from 'react';
import {Link} from 'react-router-dom'

export default function Main () {

  // creating state for products and for the single product data to display
  const [data, setData] = useState([]);
  const [single, setSingle] = useState(data);
  


  // making the api call for the products to show in the site
  // calling a fake product api
  
  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products?sort=desc");
        setData(await response.clone().json());
        setSingle(await response.json());
        console.log(single);
      }

    getProducts();
  }, []);



// Displaying the product using props
//showing product with id,image,title,price
const ShowProducts = () => {
    return (
      <>
        {single.map((props) => {
          return (
            <>
              <div className="col-md-4 mb-4" id='card'>
                <div className="card h-100 text-center p-4" key={props.id}>
                  <img
                    src={props.image}
                    className="card-img-top"
                    alt={props.title}
                    height="250px"
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-0">
                      {props.title.substring(0, 12)}
                    </h5>
                    <p className="card-text lead fw-bold">${props.price}</p>
                    <Link to ={`/products/${props.id}`} id='btn-info' className="btn btn-info">
                    Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };



  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">New Arrivals</h1>
            <hr />
          </div>
        </div>

        {/* returns product */}
        <div className="row justify-content-center">
          {<ShowProducts />}
        </div>
      </div>
    </div>
  );
  }
  