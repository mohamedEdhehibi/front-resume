import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Orderlist = () => {
    const [products,setProducts]=useState()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://fakestoreapi.com/products`);
                setProducts(response.data);
                console.log(response.data); // This will log the updated state
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);
    
  return (
    <div>Orderlist</div>
  )
}

export default Orderlist