import React from 'react'

 const Showitem = (props) => {
    const { product,onAdd } = props;
    return (
      <div >
       
       
         
        <div >
          <button
          onClick = {() => onAdd(product)}> <h3>{product.label}</h3></button>
        </div>
      </div>
    ); 
}
export default Showitem;
