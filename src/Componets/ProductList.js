import React from 'react'

import { useFilterContext } from '../context/filter_context';
import GridView from './GridView';
import ListView from './ListView';

const ProductList = () => {
  const {filter_products,grid_view}=useFilterContext();
  // console.log(filter_products)
//console.log(grid_view)
  if(grid_view === true){
    return (
    <GridView product ={filter_products}/>
    
    )
  }

  if(grid_view === false){
    return (
    <ListView product ={filter_products}/>
    
    )
  }

  
}

export default ProductList