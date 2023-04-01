
import {createContext,useContext,useReducer,useEffect} from 'react';
import {useProductContext} from './productcontex'
import reducer from '../reducer/filter_reducer';
//import Product from '../Componets/Product';


const FilterContext = createContext();
const initalState={
filter_products:[],
all_products:[],
grid_view: true,
sorting_value:"lowest",
filter:{text:"",category:"all",company:"all",color:"all",maxPrice:0,price:0,minPrice:0},
}

export const FilterContextProvider = ({ children }) => {

const {products} = useProductContext();
//console.log(products)
const [state, dispatch] = useReducer(reducer,initalState)

const setGridView = () => {
  return dispatch({ type: "SET_GRID_VIEW" });
};

// to set the list view
const setListView = () => {
  return dispatch({ type: "SET_LIST_VIEW" });
};
//sorting funtion
const sorting=(event)=>{
// alert("i am click ")
let sort_value=event.target.value;
// console.log(sort_value)
dispatch({type:"GET_SORT_VALUE",payload:sort_value});
}


//search function

const updateFilter=(event)=>{
  //console.log(event.target.name)
  let name=event.target.name;
  let value=event.target.value;
  dispatch({type:"UPDATE_FILTER_VALUE",payload:{name,value}})
  }

//clear function
const clearFilter=()=>{
  //alert("i am click")
  dispatch({type:"CLEAR_FILTER"})
}


//filter usEffect
useEffect(()=>{
// console.log("i am effect working ")
dispatch({type:"FILTER_PRODUCT"})
dispatch({type:"SORTING-PRODUCTS"});

},[products,state.sorting_value,state.filter])



 // to load all the products for grid and list view
 useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);
  
  return (


  <FilterContext.Provider value={{...state,setGridView,setListView,sorting,updateFilter,clearFilter}}>
{children}

  </FilterContext.Provider>
  )
}



// custom hooks function

export const useFilterContext =()=>{
    return  useContext(FilterContext);
}