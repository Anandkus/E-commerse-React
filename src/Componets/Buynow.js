import React from 'react'
import styled from "styled-components";
import img from './style/payment.png'
import {Button} from './style/Button'
import { useCartContext } from '../context/Cart_context'
import FormatPrice from '../Helpers/FormatPrice'
import { State } from "country-state-city";

const Buynow = () => {
  const {total_price,shipping_fee}  =useCartContext();
  return (
<Wrapper>

<div className="container2">
    

    <form action="/E-commerse-React/" method="get">

        <div className="row">

            <div className="col">

                <h3 className="title">billing address</h3>

                <div className="inputBox">
                    <span className='span'>full name :</span>
                    <input type="text" placeholder="john deo" name="flname"  required />
                </div>
                <div className="inputBox">
                    <span  className='span'>email :</span>
                    <input type="email" placeholder="example@example.com" name="em" required />
                </div>
                <div className="inputBox">
                    <span  className='span'>address :</span>
                    <input type="text" placeholder="room - street - locality" name="ed"  required />
                </div>
                <div className="inputBox">
                    <span  className='span'>city :</span>
                    <input type="text" placeholder="mumbai" name="city" required />
                </div>

                <div className="flex">
                    <div className="inputBox">
                        <span className='span'>state :</span>
                        <select className='op' name='state'>
              <option value="" >state</option>
              {State &&
                State.getStatesOfCountry("IN").map((i) => (
                  <option value={i.isoCode} key={i.isoCode}>
                    {i.name}
                  </option>
                ))}
            </select>



                    </div>
                    <div className="inputBox">
                        <span   className='span'>zip code :</span>
                        <input type="text" placeholder="123 456" name="zip_code" required />
                    </div>
                </div>

            </div>

            <div className="col">

                <h3 className="title">payment: <FormatPrice  price= {total_price+shipping_fee}/>  </h3>

                <div className="inputBox">
                    <span   className='span'>cards accepted :</span>
                    <img src={img} alt="img"/>
                </div>
                <div className="inputBox">
                    <span  className='span'>name on card :</span>
                    <input type="text" placeholder="mr. john deo" name="cardname" required / >
                </div>
                <div className="inputBox">
                    <span  className='span'>credit card number :</span>
                    <input type="number" placeholder="1111-2222-3333-4444" name="carnumber" required />
                </div>
                <div className="inputBox">
                    <span  className='span'>exp month :</span>
                    <input type="text" placeholder="january" name="month" required />
                </div>

                <div className="flex">
                    <div className="inputBox">
                        <span   className='span'>exp year :</span>
                        <input type="number" placeholder="2022" name="expyear" required />
                    </div>
                    <div className="inputBox">
                        <span  className='span'>CVV :</span>
                        <input type="text" placeholder="1234" name="cvv" required />
                    </div>
                </div> 

            </div>
            
        </div>
        
     
<Button type='submit' className='submit-btn1'>proceed to checkout</Button>
    </form>
 
</div> 



</Wrapper>
  )
}

const Wrapper = styled.section`



padding: 3rem 0 3rem 0;
text-align: center;



 


.container2{
  display: flex;
  justify-content: center;
  align-items: center;
  padding:25px;
  min-height: 100vh;

}

.container2 form{
  padding:20px;
  width:700px;
  background: #fff;
  box-shadow: 0 5px 10px rgba(0,0,0,.1);
}

.container2 form .row{
  display: flex;
  flex-wrap: wrap;
  gap:15px;
}

.container2 form .row .col{
  flex:1 1 250px;
}

.container2 form .row .col .title{
  font-size: 20px;
  color:#333;
  padding-bottom: 5px;
  text-transform: uppercase;
}

.container2 form .row .col .inputBox{
  margin:15px 0;
}

.container2 form .row .col .inputBox span{
  margin-bottom: 10px;
  display: block;
}

.container2 form .row .col .inputBox input{
  width: 100%;
  border:1px solid #ccc;
  padding:10px 15px;
  font-size: 15px;
  text-transform: none;
}


.container2 form .row .col .inputBox input:focus{
  border:1px solid #000;
}

.container2 form .row .col .flex{
  display: flex;
  gap:15px;
}

.container2 form .row .col .flex .inputBox{
  margin-top: 5px;
}

.container2 form .row .col .inputBox img{
  height: 34px;
  margin-top: 5px;
  filter: drop-shadow(0 0 1px #000);
}

.submit-btn1{
  width: 100%;
  padding:12px;
  font-size: 17px;
  background: #27ae60;
  color:#fff;
  margin-top: 5px;
  cursor: pointer;
}

.container2form .submit-btn1:hover{
  background: #2ecc71;
}

.span{
   font-family: 'Poppins', sans-serif;
   margin:0; padding:0;
 
   text-transform: capitalize;
   font-size:1.5rem;

}
.op{
    width: 100%;
    border:1px solid #ccc;
    padding:10px 15px;
    font-size: 15px;
    text-transform: none;
}

`;
export default Buynow