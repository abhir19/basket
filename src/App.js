
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
    const [Items, setItems] = useState([]);
    const onAdd = (product) => {
      const exist = Items.find((val) => val.type === product.type);
      if (exist) {
        setItems(
          Items.map((val) =>
            val.type === product.type ? { ...exist, qty: exist.qty + 1 } : val
          )
        );
      } else {
        setItems([...Items, { ...product, qty: 1 }]);
      }
    };
    const onRemove = (product) => {
      
      const exist = Items.find((val) => val.type === product.type);
        setItems(
          Items.map((val) =>
            val.type === product.type ? { ...exist, qty:null } : val
          )
        );
    
    
      
    }

    const allRemove = () => {
      setItems([]);
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
          Items={Items}
          
           /> 
           
           <Footer />
    </div>
  );
}

export default App;
