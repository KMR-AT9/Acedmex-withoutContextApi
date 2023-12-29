import React, { createContext, useContext, useState } from 'react';

const Modelscontext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    const removeFromCart = (itemId) => {
        const updatedCart = cartItems.filter((item) => item.id !== itemId);
        setCartItems(updatedCart);
    };

    return (
        <Modelscontext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </Modelscontext.Provider>
    );
};

export const useCart = () => {
    return useContext(Modelscontext);
};
