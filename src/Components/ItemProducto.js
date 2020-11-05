import React, { Component } from 'react';

class ItemProducto extends Component {
    render() {
        return (
            <div>
               <img>{this.props.itemproducto.imbUrl}</img> 
               <p>this.props.itemproducto.descripcion</p>
            </div>
        );
    }
}

export default ItemProducto;