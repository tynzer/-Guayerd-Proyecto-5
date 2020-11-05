import React, { Component } from 'react';

class Contacto extends Component {
    render() {
        return (
            <div>
                <h1>Contacto</h1>
                <form id="form" action="#"> {/* https://ptsv2.com/t/guayerd/post  method="POST" */}
                    <div className="contac">
                    <label className="camposlabel">(*) Campos Obligatorios </label>
                    <div className="input_name">
                        <label htmlFor="nombre" className="namelabel">Nombre</label>
                        <input id="nombre" className="name" type="text" name="name" placeholder="(*) Escriba su nombre" maxLength={40} />{/*luis antes no estaba max caract*/}
                    </div>
                    <div className="input_email">
                        <label htmlFor="email" className="emaillabel">Email</label>
                        <input id="email" className="email" type="text" name="email" placeholder="(*) Escriba su email" maxLength={40} /> {/*luis antes no estaba max caract*/}
                    </div>
                    <div className="input_phone">
                        <label htmlFor="telefono" className="phonelabel">Teléfono</label>
                        <input id="telefono" className="phone" type="number" name="phone" placeholder="Digite su teléfono" maxLength={10} /> {/*luis antes no estaba max caract*/}
                    </div>
                    <div className="input_topic">
                        <label htmlFor="tema" className="tocpiclabel">Tema</label>
                        <select id="tema" className="select" name="topic" value="tema">
                        <option value="Venta">Venta</option>
                        <option value="Trabajo">Trabajo</option>
                        <option value="Reparación">Reparación</option>
                        <option value="Otros">Otros</option>   
                        </select>
                    </div>
                    <div className="input_message">
                        <label htmlFor="mensaje" className="messagelabel">Mensaje</label>
                        <textarea id="mensaje" className="message" name="message" rows={5} cols={23} placeholder="Escriba aquí su mensaje. 140 caract máximo." maxLength={140} defaultValue={""} /><br /> {/*luis antes no estaba max caract*/}
                    </div>
                    <div />
                    <div>
                        <input type="hidden" name="grupo" defaultValue="d" />
                    </div>
                    <div className="submit_form">
                        <input id="borrar" type="reset" className="btn-reset" defaultValue="Borrar" />  
                        <input id="enviar" type="submit" className="btn-submit" defaultValue="Enviar" />
                    </div>
                    </div>
                </form>
                <h1>Mapa</h1>
                <p className="street">Avenida Corrientes 6237, CABA.</p> 
                <div className="mapa"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5125198743117!2d-58.45006848429093!3d-34.59119936434371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5f12e398ecd%3A0x98abf435fbfab70!2sAv.%20Corrientes%206237%2C%20C1427BPA%20CABA!5e0!3m2!1ses-419!2sar!4v1594497150374!5m2!1ses-419!2sar" width={600} height={450} frameBorder={0} style={{border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} /></div>
            </div>
        );
    }
}

export default Contacto;