import React from 'react'

function Basket(props) {
    const { Items, onRemove, allRemove } = props;

    return (
        <>
            <div className="basket col-1">
                <h2>   Basket</h2>


                <div>
                    {Items.length === 0 && <div>Cart is Empty </div>}
                </div>
                <button style={{ display: Items.length === 0 ? 'none' : 'block' }}
                    onClick={() => allRemove()} >clear all</button>

                {Items.map((item) => (
                    <div key={item.label} className="display">

                        <div >
                            <button
                                onClick={() => onRemove(item)}> <h3 style={{
                                    textDecoration: item.qty === null ? 'line-through' : 'none'
                                }} > {item.qty}     {item.label}</h3></button>
                        </div>
                    </div>

                ))}
            </div>
        </>

    )
}

export default Basket
