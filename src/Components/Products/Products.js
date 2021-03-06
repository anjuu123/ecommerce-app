import React, { useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Products.css'

export default function Products () {
  // creating state for products and for the product filter
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
 


  // making the api call for the products to show in the site
  // calling a fake product api
  
  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
        setData(await response.clone().json());
        setFilter(await response.json());
      }

    getProducts();
  }, []);



  
  // creating a filter for the product 
//   filter product with their category
// category matches than update list

const handleFilter = (cat) => {
    const updatedList = data.filter((c) => c.category === cat);
    setFilter(updatedList);
}


// Displaying the product 
const ShowProducts = () => {
    return (
      <>

      {/* filter dropdown option for filtering category */}

<div className="dropdown">
  <button className="btn btn-danger dropdown-toggle btn-lg" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
   Categories
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
   <li><a className="dropdown-item "onClick={()=> setFilter(data)}>All</a></li>
    <li><a className="dropdown-item "onClick={()=> handleFilter("men's clothing")}>Men's Clothing</a></li>
    <li><a className="dropdown-item "onClick={()=> handleFilter("women's clothing")}>Women Clothing</a></li>
    <li><a className="dropdown-item "onClick={()=> handleFilter("jewelery")}>Jeweleries</a></li>
    <li><a className="dropdown-item "onClick={()=> handleFilter("electronics")}>Electronics</a></li>
  </ul>
</div>

       

        {filter.map((product) => {
          return (
            <>
              <div className="col-md-4">
                <div className="card h-100 text-center p-4" key={product.id}>
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.title}
                    height="250px"
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-0">
                      {product.title}
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



  // returns products data
  return (
    <div>
    <div className='banner '>
    <img src="banner.gif" alt="sale" className='w-100' />
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
  