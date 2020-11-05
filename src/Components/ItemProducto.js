import React, { Component } from 'react';

class ItemProducto extends Component {
    render() {

const styleOff = {
    color: "white",
    size: "15px",
    padding: "10px",
  };

        return (
            <div>
                {this.props.productList.map((producto) => {
                    return (
                        <div key={producto._id}  className="bici flexbox">
                            <img className="flexbox-productos" src={producto.imgUrl} alt={producto.title}></img>
                            <div className="flexbox-productos">
                                <h2>{producto.title}</h2>
                                <p>{producto.description}.</p>
                    <p>{producto.discountPrice ? <><span id="precio"><s> Precio: ${producto.price} {producto.currency}</s></span> <span style ={styleOff}>  {Math.round(100 - ( producto.discountPrice  / producto.price * 100 ) ).toFixed(2)} % OFF</span> 
                                <br></br><span id="descuento" style={{ fontSize: 18 }}><b> Precio de descuento: ${producto.discountPrice} {producto.currency}</b></span></> :
                                   <> Precio: ${producto.price} {producto.currency}</>}
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

