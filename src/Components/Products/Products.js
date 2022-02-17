import React, { useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Products.css'

export default function Products () {
  // creating state for products and for the product filter

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  let componentMounted = true;


  // making the api call for the products to show in the site
  // calling a fake product api
  
  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
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
<div className="dropdown">
  <button className="btn btn-danger dropdown-toggle btn-lg" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
   Categories
  </button>

  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
   <li><a className="dropdown-item "onClick={()=> setFilter(data)}>All</a></li>
    <li><a className="dropdown-item "onClick={()=> filterProduct("men's clothing")}>Men's Clothing</a></li>
    <li><a className="dropdown-item "onClick={()=> filterProduct("women's clothing")}>Women Clothing</a></li>
    <li><a className="dropdown-item "onClick={()=> filterProduct("jewelery")}>Jeweleries</a></li>
    <li><a className="dropdown-item "onClick={()=> filterProduct("electronics")}>Electronics</a></li>
  </ul>
</div>

       

        {filter.map((product) => {
          return (
            <>
              <div className="col-md-2">
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
                    <Link to ={`/products/${product.id}`} id= "btn-buy" className="btn btn-info ">
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
    <div className='banner'>
    <img src="banner.gif" alt="sale" />
      </div> 
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5 heading">
            <h1 className="display-6 fw-bolder text-center">Recommended for you</h1>
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
  