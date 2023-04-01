import React from 'react'
import { FaTrash } from 'react-icons/fa'
import { useCartContext } from '../context/Cart_context'
import FormatPrice from '../Helpers/FormatPrice'
import CartAmountToggle from './CartAmountToggle'
const CartItem = ({id,name,image,color,price,amount}) => {

    const {removeItem,setDecrease,setIncrease} = useCartContext()

   
  return (
    <div className='cart-heading grid grid-five-column'>
<div className="cart-image--name">
    <div>
        <fiqure>
            <img src={image} alt={id} />
        </fiqure>
    </div>
 <div>
    <p>{name}</p>
    <div className="color-div">
    <p>color:</p>
    <div className="color-style" style={{backgroundColor:color ,color:color}}></div>
    </div>
</div>

      </div>

{/* price sectin */}
<div className='cart-hide'>
    <p><FormatPrice price={price }/></p>
</div>

{/* Quantity */}
    <CartAmountToggle  
     amount={amount}
setDecrease={()=>setDecrease(id)}
setIncrease={()=>setIncrease(id)}/>

{/* subTotal */}

<div className="cart-hide">
    <p><FormatPrice price={price*amount}   /></p>
</div>

{/* remove */}
<div>
    <FaTrash className='remove_icon'   onClick={()=>removeItem(id)}/>
</div>

    </div>
  )
}

export default CartItem