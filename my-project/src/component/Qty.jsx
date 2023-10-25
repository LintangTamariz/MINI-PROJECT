import React from 'react';

import { CartContext } from '../context/CartContext';

const Qty = ({item}) => {
  return (
    <div className="bg-white ">
      {
        item.amount > 10 ? (
          <select>select</select>
        ) : (
          <input className="" type="text" 
          placeholder={`${item.amount}`}/>
        )}
    </div>
  )
}

export default Qty
