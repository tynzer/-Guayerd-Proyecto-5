import React, { Component } from 'react';

class Productos extends Component {
    render() {
        return (
            <div>
                <h1>Productos</h1>
               {/*  this.props.productList.map((itemProducto)=>  */}<ItemProducto itemProducto= {itemProducto}/>)
            </div>
        );
    }
}

export default Productos;