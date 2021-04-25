import React,{useState} from 'react'
import Showitem from './Showitem';
 

 const Menu = (props) => {
    const {products ,onAdd} = props;
    const [search, setSearch] = useState("");
    const onChange = (event) => {
      setSearch(event.target.value);
    };
    return (
      <>
        <div style={{'width':'60%','height':'70px','border':'2px solid red' ,'margin':'20px auto' ,'backgroundColor':'pink'}}>
           
            <input style={{'marginTop':'15px' , 'marginLeft':'20px','width':'60%', 'height':'40%'}} placeholder="filter for e.g. Apple onChange ( implemented try it)" value={search} onChange={onChange} />
        </div>
      <main className="grow">          
            <h2>
                Groceries
           </h2>
           <div className="display">
        {products.filter((val)=>{
          if(search ==="")
          {
            return val
          }
          else if(val.type.toLowerCase().includes(search.toLocaleLowerCase()))
          {
            return  <Showitem key={val.type} val={val} 
            onAdd = {onAdd}></Showitem>
          }
        })
        .map((product) => (
          <Showitem key={product.type} product={product} 
          onAdd = {onAdd}></Showitem>
        ))}
      </div>
    </main>
    </>
    )
}

export default Menu;