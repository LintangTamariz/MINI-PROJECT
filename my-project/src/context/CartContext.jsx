import React, { createContext, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [itemsAmount, setItemsAmount] = useState(0);
  const [amount, setAmount] = useState(0);
  const [total, setTotal] = useState();

  //Menghitung total item
  useEffect(() => {
    const amount = cart.reduce((a, c) => {
      return a + c.amount;
    }, 0);
    setItemsAmount(amount);
  }, [cart]);

  useEffect(() => {
    // Mengambil total harga dari penyimpanan lokal
    const storedTotal = localStorage.getItem("totalHarga");

    // Calculate the total price of all items in the cart
    const total = cart.reduce(
      (a, c) => {
        return c.attributes.price * c.amount;
      },
      storedTotal ? JSON.parse(storedTotal) : 0
    );

    // Store the total price in the local storage
    localStorage.setItem("totalHarga", JSON.stringify(total));

    // Update the state variable 'total' with the calculated total
    setTotal(total);
  }, [cart]);

  // add to wcart
  const addToCart = (item, id) => {
    const isLoggedIn = localStorage.getItem("authToken"); //cek user login
    // console.log(isLoggedIn);

    if (isLoggedIn) {
      const itemID = parseInt(id);
      const newItem = { ...item[0], amount: 1 };
      setCart([...cart, newItem]);

      // check item is alreade in cart
      const cartItem = cart.find((item) => {
        return item.id === itemID;
      });

      if (cartItem) {
        const newCart = cart.map((item) => {
          if (item.id === itemID) {
            localStorage.setItem(
              "cartItem",
              JSON.stringify(cartItem.amount + 1)
            );
            // localStorage.setItem('total', JSON.stringify(total));
            setAmount(cartItem.amount + 1);

            return { ...item, amount: cartItem.amount + 1 };
          } else {
            return item;
          }
        });
        setCart(newCart);
      } else {
        setCart([...cart, newItem]);
      }
      // open the cart sibar
      setIsOpen(true);
    } else {
      alert("Anda harus login terlebih dahulu!");
      location.href = "/login";
    }
  };

  // remove the cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  const isNav = (value) => {
    return value === 1;
  };

  const handleInput = (e, id) => {
    const value = parseInt(e.target.value);
    //find item
    const cartItem = cart.find((item) => {
      return item.id === id;
    });

    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          if (isNav(value)) {
            setAmount(1);
            return { ...item, amount: 1 };
          } else {
            setAmount(value);
            return { ...item, amount: value };
          }
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    setIsOpen(true);
  };
  // console.log(cart);

  //clear cart
  const clearCart = () => {
    localStorage.removeItem("cartItem");
    localStorage.removeItem("total");
    localStorage.removeItem("totalHarga");
    location.reload();
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        isOpen,
        setIsOpen,
        addToCart,
        cart,
        removeFromCart,
        itemsAmount,
        handleInput,
        total,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
