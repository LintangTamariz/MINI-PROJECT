import React, {useContext} from 'react';

import { CartContext } from '../context/CartContext';

const Qty = ({item}) => {
  const {handleInput} = useContext(CartContext)
  return (
    <div className="flex gap-x-5 items-center text-black">
        <input 
        onBlur={(e) => handleInput(e, item.id)}
        className="text-black rounded-md placeholder:text-black p-4 w-[120px] h-2 outline-none" 
        type="text"
        value={item.amount}
        />

    </div>
  )
}

export default Qty
