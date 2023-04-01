
const Cart_reducer = (state,action) => {
//to add item
if(action.type === 'ADD_TO_CART'){
    let{id,color,amount,product}=action.payload;
    // console.log(product)
     //console.log(amount);
//existing product chek
let existingProduct= state.cart.find((CurItem)=>CurItem.id === id+color);
//console.log("this product extit =",existingProduct)

if(existingProduct){

  let updatedProduct = state.cart.map((curElem) => {
    if (curElem.id === id + color) {
      let newAmount = curElem.amount + amount;

      if (newAmount >= curElem.max) {
        newAmount = curElem.max;
      }

      
      return {
        ...curElem,
        amount: newAmount,
      };
    } else {
      return curElem;
    }
  });
  return {
    ...state,
    cart: updatedProduct,
  };

}
else{

  let cartProduct;
  cartProduct={
  id:id+color,
  name:product.name,
  color:color,
  amount:amount,
  image:product.image[0].url,
  price:product.price,
  max:product.stock,
  }
  return{
    ...state,
    cart:[...state.cart,cartProduct],
  }
  
  }
}



//to remove item
if(action.type === 'REMOVE_ITEM'){
  let updateItem=state.cart.filter((curItem)=>curItem.id !== action.payload);
  return{
    ...state,
    cart:updateItem,
  }
}
//to clear cart
if(action.type === "CLEAR_CART"){

  return{
    ...state,
    cart:[]
  }
}

// decrement 
if(action.type === 'SET_Decrement'){
  let updatedProduct=state.cart.map((curElem)=>{
    if(curElem.id === action.payload){
    //  console.log(curElem)

    let decrement=curElem.amount-1;
   if(decrement<=1){
    decrement=1;
   }
    
return{
  ...curElem,
  amount:decrement

}
    }
    else{
      return curElem
    }
  })
  return{
    ...state,
    cart:updatedProduct,
  }
}

if(action.type==='SET_INCREMENT'){

  let updatedProduct=state.cart.map((curElem)=>{

    if(curElem.id === action.payload){
       console.log(curElem)
  
      let Increment=curElem.amount+1;
    
      if(Increment>=curElem.max){
       Increment=curElem.max;
      }
       
   return{
     ...curElem,
     amount:Increment
   
   }
    }
    else{
      return curElem
    }


  })
  
  return{
    ...state,
    cart:updatedProduct,
  }

  
}

if(action.type === 'CART_TOTAL-ITEM'){
  let updateItemVal=state.cart.reduce((initalVal,curElm)=>{
    let {amount}=curElm;
    initalVal = initalVal+amount;
    return initalVal
  },0)
  return{
    ...state,
    total_item:updateItemVal,
  }
}


if(action.type === 'CART_TOTAL_PRICE'){
  let total_price=state.cart.reduce((initalVal,curElm)=>{
    let {price,amount}=curElm;
    initalVal= initalVal+(price*amount);
    return initalVal;

  },0)
  return{
    ...state,
    total_price:total_price
  }
}


  return state;
}

export default Cart_reducer