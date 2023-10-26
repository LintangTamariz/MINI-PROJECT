import React, {useContext} from 'react';

import { CartContext } from '../context/CartContext';

const Qty = ({item}) => {
  const {handleInput} = useContext(CartContext)
  return (
    <div className="flex gap-x-5 items-center text-black">
      {item.amount > 10 ? (
        <select
          value={item.amount}
          className="p-2 rounded-lg w-[100px] h-12 outlinen-none text-black"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      ) : (
        <input 
        onBlur={(e) => handleInput(e, item.id)}
        className="text-black rounded-md placeholder:text-black p-4 w-[120px] h-2 outline-none" 
        type="text" 
        placeholder={`${item.amount}`}
        />
      )}

    </div>
  )
}

export default Qty
