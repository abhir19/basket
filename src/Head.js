import { relative } from 'path';
import React from 'react'

 const Head = () => {
    return (
        <div style={{'width':'100%','height':'200px' ,'backgroundColor':'black', 'textAlign':'center', 'color':'white'}}>
          
           <h1 style={{'fontSize':'50px' ,'position':'relative' ,'top':'60px'}}>Hello, Basket!</h1>  
        </div>
    )
}
export default Head;