import{createContext,useContext,useReducer,useEffect} from 'react'

import reducer from '../reducer/Cart_reducer';
//localStorage data get made below useEffect
const getLocalStorageData=()=>{
let localCartData=localStorage.getItem("anandCart");
// if(localCartData === [])
// return [];
// else{
//     return JSON.parse(localCartData);
// }
const pareseData=JSON.parse(localCartData);
if(!Array.isArray(pareseData)) return [];
return pareseData;



}


const initalState={
// cart:[],
cart:getLocalStorageData(),
total_item:'',
total_price:'',
shipping_fee:7000,
}
const CartContext=createContext();

const CartProvider=({children})=>{
const [state, dispatch] = useReducer(reducer,initalState);

//add item functiona
    const addToCart=(id,color,amount,product)=>{
dispatch({type:'ADD_TO_CART',payload:{id,color,amount,product}})
    }
    
//remove function
const removeItem=(id)=>{
//alert(" i am clickable "+id)

dispatch({type:'REMOVE_ITEM',payload:id})
}


//clear buttton

const ClearButton=()=>{
    dispatch({type:"CLEAR_CART"})
}

//setIncrease   function
const setIncrease=(id)=>{
//alert('setIncrease'+id)

dispatch({type:"SET_INCREMENT",payload:id})
}

//setDecrease
const setDecrease=(id)=>{
    //alert(id)
    dispatch({type:"SET_Decrement",payload:id})
}

//to add the data in localStorage 
//get vs set
useEffect(() => {
    dispatch({type:"CART_TOTAL-ITEM"})
    dispatch({type:"CART_TOTAL_PRICE"})
    localStorage.setItem("anandCart",JSON.stringify(state.cart))
  }, [state.cart])
  



return <CartContext.Provider value={{...state,addToCart,removeItem,ClearButton,setIncrease,setDecrease}}>
{children}

</CartContext.Provider>
}
//gloabal acces data of cartContex
const useCartContext=()=>{
    return useContext(CartContext);
}


export {CartProvider,useCartContext};



