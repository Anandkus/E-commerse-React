import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/filter_context'
import {FaCheck} from 'react-icons/fa'
import FormatPrice from './../Helpers/FormatPrice'
import {Button} from './style/Button'
const FilterSection = () => {
  const{filter:{text,category,color,price,maxPrice,minPrice},updateFilter,all_products,clearFilter}=useFilterContext();

//to get the unique data of each fields
const getUniqueData=(data,property)=>{
let newVal=data.map((cuElm)=>{
return cuElm[property]
})
//console.log(newVal)

if(property === 'colors')
{
 //remove duplicate colors this method
  newVal =newVal.flat();
}


//for uniq data 
return newVal=["all",...new Set(newVal) ]
//console.log(newVal)
}

  //we need uniq data
const categoryOnlydata=getUniqueData(all_products,"category");
//console.log(categoryOnlydata)
const companydata=getUniqueData(all_products,"company");
// console.log(companydata);
const colordata=getUniqueData(all_products,"colors");
//console.log(colordata)


  return (
  <Wrapper>
    {/* search filter */}
    <div className="filter-search">
      <form onSubmit={(e)=>e.preventDefault()}>
        <input type="text" name='text' value={text} onChange={updateFilter} placeholder='search'/>
      </form>
    </div>
{/* category filter */}
<div className="filter-category">
  <h3>Category</h3>
  <div>
    { categoryOnlydata.map((curElm,index)=>{
      return(
        <button key={index} type='button' name='category' value={curElm}     className={curElm === category ? 'active' :''} onClick={updateFilter}>{curElm}</button>
      )
    })

    }
  </div>
</div>
{/* filter company */}
<div className="filter-company">
<h3>Company</h3>

<form action="">
  <select name="company" id="" className='filter-company--select' onClick={updateFilter}>
    {
      companydata.map((curElm,index)=>{
return(
  <option  key={index} name="company" value={curElm}>{curElm}</option>
)
      })
    }

   
  </select>
</form>

</div>
{/* color filter  */}
<div className='filter-colors colors'>
  <h3>Colors</h3>
  <div className='filter-color-style'>
{
  colordata.map((curColor,index)=>{
   
   if (curColor === "all") {
    return (
      <button
        key={index}
        type="button"
        value={curColor}
        name="color"
        className="color-all--style"
        onClick={updateFilter}>
        all
      </button>
    );
  }
   return(
    <button type='button'  key={index} name='color' value={curColor} onClick={updateFilter} style={{backgroundColor:curColor}} className={color===curColor?"btnStyle active":"btnStyle"}> {color ===curColor ?<FaCheck className='checkStyle '/>:null}  </button>
  )

  })
}

  </div>
</div>
{/* price section */}
<div className='filter_price'>
  <h3>Price</h3>
  <p> <FormatPrice  price={price}/> </p>
<input type="range" name="price" min={minPrice} max={maxPrice} value={price} onChange={updateFilter} />
</div>


<div className="filter-clear">
<Button  className='btn' onClick={clearFilter}>Clear Filter</Button>

</div>
  </Wrapper>
  )
}
const Wrapper = styled.section`
padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;


  h3 {
    padding: 2rem 0;
    font-size: bold;
  }

  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 80%;
      text-transform: lowercase;  
      font-family: cursive;

    }
  }

.filter-category{
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.4rem;
    
    button {
      border: none;
      background-color: ${({ theme }) => theme.colors.white};
      text-transform: capitalize;
      cursor: pointer;

      &:hover {
        color: ${({ theme }) => theme.colors.btn};
      }
    }

    .active {
      border-bottom: 1px solid #000;
      color: ${({ theme }) => theme.colors.btn};
    }

  }

}

.filter-company--select {
  padding: 0.3rem 1.2rem;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.text};
  text-transform: capitalize;
}

.filter-color-style {
  display: flex;
  justify-content: center;
}


.btnStyle {
  width: 2rem;
  height: 2rem;
  background-color: #000;
  border-radius: 50%;
  margin-left: 1rem;
  border: none;
  outline: none;
  opacity: 0.5;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
}
.color-all--style {
  background-color: transparent;
  text-transform: capitalize;
  border: none;
  cursor: pointer;
}

.active{
  opacity: 1;
}
.checkStyle{
  font-size: 1rem;
  color: #fff;
  
}

.filter_price{
  input{
  margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
  }
}
.filter-clear .btn{
  background-color: #ec7063;
  color: #fff;
}
`;
export default FilterSection