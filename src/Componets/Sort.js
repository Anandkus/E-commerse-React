import React from 'react'
import styled from 'styled-components'
import {BsFillGridFill,BsList} from 'react-icons/bs'
import { useFilterContext } from '../context/filter_context'
const Sort = () => {
  const { filter_products, grid_view, setGridView, setListView,sorting} =
  useFilterContext();

  return (
    <Wrapper className='sort-section'> 
    {/* 1st column */}
<div className="sorting-list--grid">
<button    className={grid_view?"sort-btn active" :"sort-btn"} 
onClick={setGridView} >
<BsFillGridFill  className='icon'  />
</button>
<button className={!grid_view?"sort-btn active" :"sort-btn"}
onClick={setListView } >
<BsList  className='icon'/>
</button>

</div>
{/* 2st column */}
<div className="product-data"><p>{`${filter_products.length} Product Available`}</p> </div>
{/* 3rd column */}
<div className="sort-sletcion">
<form action="">
<label htmlFor="sort">
  <select  id="sort" className='sort-selcetion--style' onClick={sorting} >
    <option value="lowest">Price(lowest)</option> 
    <option value="#" disabled ></option>
    <option value="highest">Price(highest)</option> 
    <option value="#" disabled ></option>
    <option value="a-z">Price(a-z)</option> 
    <option value="#" disabled ></option>
    <option value="z-a">Price(z-a)</option> 
  </select>
</label>

</form>



</div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
display: flex;
margin-top: 5rem;
justify-content: space-around;

.sorting-list--grid {
  display: flex;
  gap: 2rem;
  .sort-btn {
    padding: 0.8rem 1rem;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .icon {
    font-size: 1.6rem;
  }
  .active {
    background-color: ${({ theme }) => theme.colors.black};
    color: #fff;
  }

}

.sort-selcetion--style{
padding: 10px;
  cursor: pointer;
  font-size:1.4rem;
  outline:none;
  font-family: cursive;
  text-transform: capitalize;
  border-top-left-radius: 10px;
}


`;


export default Sort