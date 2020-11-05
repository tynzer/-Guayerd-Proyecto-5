import React, { Component } from 'react';
import ItemProducto from './ItemProducto';

class Productos extends Component {
    render() {
        return (
            <div>
                <h1>Productos</h1>
            <ItemProducto productList = {this.props.productList}/>
            </div>
        );
    }
}

export default Productos;