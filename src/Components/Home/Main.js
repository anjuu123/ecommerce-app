import React, { useState, useEffect} from 'react';
import {Link} from 'react-router-dom'

export default function Main () {
  // creating state for products and for the product filter

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  let componentMounted = true;


  // making the api call for the products to show in the site
  // calling a fake product api
  
  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products?sort=desc");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);



  
  // creating a filter for the product 
//   filter product with their category

const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
}


// Displaying the product after call it from api
const ShowProducts = () => {
    return (
      <>
        {/* <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-dark me-2"onClick={()=> setFilter(data)}>All</button>
          <button className="btn btn-outline-dark me-2"onClick={()=> filterProduct("men's clothing")}>Men's Clothing</button>
          <button className="btn btn-outline-dark me-2"onClick={()=> filterProduct("women's clothing")}>Women's Clothing</button>
          <button className="btn btn-outline-dark me-2"onClick={()=> filterProduct("jewelery")}>Jewelery</button>
          <button className="btn btn-outline-dark me-2"onClick={()=> filterProduct("electronics")}>Electronic</button>
        </div> */}

        {filter.map((product) => {
          return (
            <>
              <div className="col-md-4 mb-4">
                <div className="card h-100 text-center p-4" key={product.id}>
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.title}
                    height="250px"
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-0">
                      {product.title.substring(0, 12)}
                    </h5>
                    <p className="card-text lead fw-bold">${product.price}</p>
                    <Link to ={`/products/${product.id}`} className="btn btn-outline-dark">
                      Buy Now
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
        <div className="row justify-content-center">
          {<ShowProducts />}
        </div>
      </div>
    </div>
  );
  }
  