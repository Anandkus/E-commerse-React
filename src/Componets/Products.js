import React from 'react'
import styledComponents from 'styled-components'
import FilterSection from './FilterSection'
import ProductList from './ProductList'
import Sort from './Sort'


const Products = () => {


  return (
<>
<Wrapper>
<div className="container grid grid-filter-column">
<div>
  <FilterSection/>
</div>

<section className='product-view--sort'>
  <div className="sort-filter">
    <Sort/>
 </div>
<div className="main-product">
  <ProductList   />
</div>
</section>

</div>
</Wrapper>
</>
  )
}
const Wrapper = styledComponents.section`
.grid-filter-column{
  grid-template-columns: 0.2fr 1fr;
}
@media (max-width: ${({ theme }) => theme.media.mobile}) {
  .grid-filter-column {
    grid-template-columns: 1fr;
  }

`
export default Products