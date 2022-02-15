import React, {useState, useEffect} from 'react';


export default function Products() {

    // creating state for products and for the product filter

    const [pdata, setPData] =useState([]);
    const [filter, setFilter] = useState(pdata);


// making the api call for the products to show in the site
// calling a fake product api
    useEffect(()=> {
       const url = `https://fakestoreapi.com/products`;
       const makeApiCall = async () => {
           const res = await fetch(url)
           const json = await res.json()
           setPData(json.results)
       }
       makeApiCall()
    }, [])

}
