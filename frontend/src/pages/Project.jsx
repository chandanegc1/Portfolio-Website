import React from 'react'
import { useLocation } from 'react-router-dom';

const Project = () => {
    const Products = useLocation();
    const Product = Products.state.item;
    console.log(Product)
  return (
    <>
     <h1>{Product.data.name}</h1> 
     <h1>{Product.data.year}</h1> 
     <h1>{Product.data.category}</h1> 
     <h1>{Product.data.location}</h1> 
     <h1>{Product.data.status}</h1> 
    </>
  )
}

export default Project