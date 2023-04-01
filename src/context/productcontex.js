import axios from 'axios';
import {createContext,useContext, useEffect,useReducer} from 'react'

import reducer from '../reducer/ProductReducer'
const API = "https://api.pujakaitem.com/api/products";
const AppContext=createContext();

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    isSingleLoading: false,
    singleProduct: {},
  };

//main function 
const AppProvider =({children})=>{

    const [state, dispatch] = useReducer(reducer, initialState);

const getProducts=async(url)=>{
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      //console.log(res)
      const products = await res.data;
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
}


//my 2nd api call for singel product
const getSingeleProduct = async(url)=>{
  dispatch({type:"SET_SINGLE_LOADING"})
  try {
    const res =await axios.get(url)
    const singleProduct = await res.data;
    dispatch({type:"SET_SINGLE_PRODUCT",payload:singleProduct})
  } catch (error) {
    dispatch({type:"SET_SINGLE_ERROR"})
  }
}


    useEffect(() => {
        getProducts(API);

      }, []);


return( <AppContext.Provider  value={{...state ,getSingeleProduct}} >

{children}

</AppContext.Provider>
)
}


//custom hooks 
const useProductContext=()=>{
    return useContext(AppContext)
}


export {AppProvider,AppContext,useProductContext};