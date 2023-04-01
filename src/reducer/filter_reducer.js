

const filterReducer=(state,action)=>{
switch(action.type){

case "LOAD_FILTER_PRODUCTS":
  let GetPrice = action.payload.map((curElem)=>curElem.price)
  ///console.log(GetPrice)

  // 1st way to find maximum values 
  //console.log(Math.max.apply(null,GetPrice))
  
  //2nd way
  let MaxPrice=Math.max(...GetPrice)
  //console.log(MaxPrice)


    return {
        ...state,
        filter_products:[...action.payload],
        all_products:[...action.payload],
        filter:{...state.filter,maxPrice:MaxPrice,price:MaxPrice,}
    }

    case "SET_GRID_VIEW":
        return {
          ...state,
          grid_view: true,
        };
  
      case "SET_LIST_VIEW":
        return {
          ...state,
          grid_view: false,
        };
case "GET_SORT_VALUE":
  // let userSortValue= document.getElementById("sort");
  // // console.log(userSortValue) working
  // let sort_value=userSortValue.options[userSortValue.selectedIndex].value;
  // // console.log(sort_value)

  return{
    ...state,
    sorting_value:action.payload,

  }

case "SORTING-PRODUCTS":
  let newSortData;

const {filter_products,sorting_value}=state;
let tempSortProduct=[...filter_products];

const sortingProduct=(a,b)=>{
  if(sorting_value === 'lowest'){  
    return a.price - b.price;
  }

  if(sorting_value === "highest"){
      return b.price - a.price;
    }

    if(sorting_value === 'a-z'){
   return   a.name.localeCompare(b.name)
    }

    if(sorting_value === 'z-a'){
      
        return b.name.localeCompare(a.name)
    }
}

  newSortData=tempSortProduct.sort(sortingProduct)
  return{
    ...state,
    filter_products:newSortData,
  }

  case "UPDATE_FILTER_VALUE":
    const{name,value}=action.payload;
   //  console.log(value);
    return{
      ...state,
filter:{
  ...state.filter,
  [name]:value,
},
    }
  
case 'FILTER_PRODUCT':
  let { all_products } = state;
  let tempFilterProduct = [...all_products];
const { text,category,company,color,price} = state.filter;
//console.log(text)
      if (text) {
        tempFilterProduct = tempFilterProduct.filter((curElem) =>{
          return curElem.name.toLowerCase().includes(text);
      });
      }
      if (category !== 'all') {
        tempFilterProduct = tempFilterProduct.filter((curElem) =>{
          return curElem.category === category;
      });
      }
      if (company !=='all') {
        tempFilterProduct = tempFilterProduct.filter((curElem) =>{
          return curElem.company.toLowerCase() === company.toLowerCase();
      });
      }
  
      if (color !=='all') {
        tempFilterProduct = tempFilterProduct.filter((curElem) =>{
          return curElem.colors.includes(color)
      });
      }
      if(price===0){
        tempFilterProduct = tempFilterProduct.filter((curElem,index)=>curElem.price === price )  
      }
      else{
      tempFilterProduct = tempFilterProduct.filter((curElem,index)=>{
         return curElem.price <=price;
      }) 
      
      }

      return {
        ...state,
        filter_products: tempFilterProduct,
      };
      case "CLEAR_FILTER":
        return {
          ...state,
          filter: {
            ...state.filter,
            text: "",
            category: "all",
            company: "all",
            color: "all",
            maxPrice: state.filter.maxPrice,
            price: state.filter.maxPrice,
            minPrice:0,
          }
        }


    default:
    return state;
}


}
export default filterReducer;