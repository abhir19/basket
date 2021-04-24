import React from 'react'
import Showitem from './Showitem';
 

 const Menu = (props) => {
    const {products ,onAdd} = props;
    return (
      <main className="grow">          
            <h2>
                Groceries
           </h2>
           <div className="display">
        {products.map((product) => (
          <Showitem key={product.type} product={product} 
          onAdd = {onAdd}></Showitem>
        ))}
      </div>
    </main>
    )
}

export default Menu;