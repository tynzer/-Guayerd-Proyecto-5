import React, { Component } from 'react';

class ItemProducto extends Component {
    render() {

        return (
            <div>
                {this.props.productList.map((producto) => {
                    return (
                        <div key={producto._id}  className="bici flexbox">
                            <img className="flexbox-productos" src={producto.imgUrl} alt={producto.title}></img>
                            <div className="flexbox-productos">
                                <h2>{producto.title}</h2>
                                <p>{producto.description}.</p>
                                <p>{producto.discountPrice ? <><span id="precio"><s> Precio: ${producto.price} ${producto.currency}</s></span>
                                <br></br><span id="descuento"><b> Precio de descuento: ${producto.discountPrice} ${producto.currency}</b></span></> :
                                   <> Precio: ${producto.price} ${producto.currency}</>}
                                    <br></br>
                             Stock: {producto.inStock}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default ItemProducto;

