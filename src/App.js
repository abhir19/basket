
import './App.css';
import Head from './Head'
import Menu from './container/Menu';
import React, { useState } from 'react';
import Basket from './container/Basket';
import Footer from './Footer';
const products = [
  { label: 'Strawberry', type: 'strawberry' },
  { label: 'Blueberry', type: 'blueberry' },
  { label: 'Banana', type: 'banana' },
  { label: 'Apple', type: 'apple' },
  { label: 'Carrot', type: 'carrot' },
  { label: 'Celery', type: 'celery' },
  { label: 'Mushroom', type: 'mushroom' },
  { label: 'Green Pepper', type: 'green pepper' },
  { label: 'Eggs', type: 'eggs' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Butter', type: 'butter' },
  { label: 'Chicken', type: 'chicken' },
  { label: 'Beef', type: 'beef' },
  { label: 'Pork', type: 'pork' },
  { label: 'Fish', type: 'fish' },
  { label: 'Rice', type: 'rice' },
  { label: 'Pasta', type: 'pasta' },
  { label: 'Bread', type: 'bread' },

];


function App() {
    const [cartItems, setCartItems] = useState([]);
    const onAdd = (product) => {
      const exist = cartItems.find((x) => x.type === product.type);
      if (exist) {
        setCartItems(
          cartItems.map((x) =>
            x.type === product.type ? { ...exist, qty: exist.qty + 1 } : x
          )
        );
      } else {
        setCartItems([...cartItems, { ...product, qty: 1 }]);
      }
    };
    const onRemove = (product) => {
      
      const exist = cartItems.find((x) => x.type === product.type);
      if (exist.qty === 1) {
        setCartItems(cartItems.filter((x) => x.type !== product.type));
      } else {
        setCartItems(
          cartItems.map((x) =>
            x.type === product.type ? { ...exist, qty:null } : x
          )
        );
      }
    
      
    }

    const allRemove = () => {
      setCartItems([]);
    }
  return (
    <div >
      <Head />
     
     
      <Menu
          onAdd={onAdd}
          products={products} />
         <Basket
          onAdd={onAdd}
          allRemove={allRemove}
          onRemove = {onRemove}
          cartItems={cartItems}
          
           /> 
           <br/>
           <Footer />
    </div>
  );
}

export default App;
