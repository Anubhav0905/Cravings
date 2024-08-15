import React, { useEffect, useRef, useState } from 'react'
import { useDispatchCart, useCart} from './ContextReducer';

export default function Card(props) {

  let dispatch = useDispatchCart();
  let data = useCart()
  const priceRef = useRef();

  let option = props.options?? "";
  let priceOptions = Object.keys(option);

  const [qty, setQty] = useState(1)
  const [size, setSize] = useState("")
  
  const handleAddToCart = async() =>{

  //   let food = []
  //   for(const item of data){
  //     if(item.id === props.foodItem._id){
  //       food = item;
  //       break;
  //     }
  //   }

  //   if(food != []){
  //     if(food.size === size){
  //       await dispatch({ type: "UPDATE", id: props.foodItem._id, price: finalPrice, qty: qty})
  //       return
  //     }
  //   }
  //   else if(food.size != size){
    await dispatch({
      type : "ADD",
      id: props.foodItem._id,
      name : props.foodItem.name,
      price : finalPrice,
      qty : qty,
      size : size
    })
  //   return
  // }
  // return
  }

    let finalPrice = qty * parseInt(option[size]);
    useEffect(() => {
      setSize(priceRef.current.value)
    }, [])

  return (
    <div>
        <div className="card ml-10 mt-3" style={{"width": "18rem"}}>
          <img style={{'height' : '230px', 'objectFit' : 'fill'}} src={props.foodItem.img} className="card-img-top"  alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.foodItem.name}</h5>
            <div className='container w-100'>
              
              <select className='m-2 text-white h-100 bg-primary rounded' onChange={(e) => setQty(e.target.value)} >
                {Array.from(Array(6),(e,i) => {
                  return(
                    <option key={i+1} val = {i+1} >{i+1}</option>
                  )
                })}
              </select>

              <select className='m-2 h-100 text-white bg-primary rounded' ref = {priceRef} onChange={(e) => setSize(e.target.value)}>
              {priceOptions.map((data) => {
                return <option key={data} value = {data}>{data}</option>
              })}
              </select>

              <div className='d-inline h-100 fs-5'>Rs.{finalPrice}/-</div>

            </div>
            <hr/>
              <button className='btn btn-success justify-center ms-2' onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      </div>
  )
}
