import React, { Component } from 'react';

class Contacto extends Component {
    constructor(props) {
        super(props);
        this.state={
            URL_ : "https://guayerd-proyecto3-d.herokuapp.com/",
            regex : /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
            nombre:"",
            email:"",
            telefono:"",
            topic:"",
            message:""
        }
    }
    
    componentDidMount(){
        
      if (localStorage.getItem("nombre") != null) {
          let lsNombre = localStorage.getItem("nombre")
          fetch(`${this.state.URL_}getCoupon`).then(function (responsive) {
              return responsive.json();
          }).then(function (cupones) {
              window.alert("Estimado " + lsNombre + ". Gracias por elegirnos! Le obsequiamos el código: " + cupones.text + " con un " + cupones.discountPercentage + "% del total de su compra.")
          })
      };

    }


formHandler = (e) =>{
    e.preventDefault();
    console.log(e);
    console.log(e.target[0].value);
    console.log(e.target[1].value);
    console.log(this.state.nombre);
    console.log(this.state.email);

    
    console.log("se cancelo el default");
   fetch(`${this.state.URL_}submitForm`,{
    method:'POST',
    body:JSON.stringify({name:this.state.nombre, email:this.state.email, phone:this.state.telefono, subject:this.state.topic, message:this.state.message}),
    headers:{'Content-Type':'application/json'}
}).then((res)=>{
    e.target[0].value = "";
    e.target[1].value = "";
    e.target[2].value = "";
    e.target[4].value = "";
    e.target[0].classList.remove("valid");
    e.target[1].classList.remove("valid");
    return res.json()
}).then((res)=>{
    console.log("FORMULARIO ENVIADO",res);
    window.alert("Formulario enviado correctamente");
});
}

emailHandler = (e)=>{
  if (this.state.regex.test(e.target.value)) {
    e.target.classList.remove("invalid");
    e.target.classList.add("valid");
    e.target.setCustomValidity("");
    this.setState({email:e.target.value})
  } else {
    e.target.classList.remove("valid");
    e.target.classList.add("invalid");
    e.target.setCustomValidity("El campo debe ser del tipo 'ejemplo@ejemplo.com' !!!");
    //this.setState({email:e.target.value})
    
  }
  
}

nombreHandler = (e)=>{ 
  if (e.target.value === null || e.target.value === "") {
    e.target.classList.remove("valid");
    e.target.classList.add("invalid");
    e.target.setCustomValidity("No se aceptan campos vacíos!!!");
   // this.setState({nombre:e.target.value})
  } else {
    e.target.classList.remove("invalid");
    e.target.classList.add("valid");
    e.target.setCustomValidity("");
    this.setState({nombre:e.target.value})
  }
    
}

telefonoHandler = (e)=>{ 
    this.setState({telefono:e.target.value})
  }

  topicHandler = (e)=>{ 
    this.setState({topic:e.target.value})
}

messageHandler = (e)=>{ 
    this.setState({message:e.target.value})
}

btnSubmitHandler =(e)=>{
    
  console.log("se hizo click en boton")
  
}
/*
btnResetHandler =()=>{
  fnombre.classList.remove("valid");
  fnombre.classList.remove("invalid");
  femail.classList.remove("invalid");
  femail.classList.remove("valid");
}
  */
    
    
    render() {
        return (
            <div>
                <main className="main">
                <h1>Contacto</h1>
                <form onSubmit= {this.formHandler} id="form" action="#"> {/* https://ptsv2.com/t/guayerd/post  method="POST" */}
                    <div className="contac">
                    <label className="camposlabel">(*) Campos Obligatorios </label>
                    <div className="input_name">
                        <label htmlFor="nombre" className="namelabel">Nombre</label>
                        <input onInput = {this.nombreHandler} id="nombre" className="name" type="text" name="name" placeholder="(*) Escriba su nombre" maxLength={40} />{/*luis antes no estaba max caract*/}
                    </div>
                    <div className="input_email">
                        <label htmlFor="email" className="emaillabel">Email</label>
                        <input onInput = {this.emailHandler} id="email" className="email" type="text" name="email" placeholder="(*) Escriba su email" maxLength={40} /> {/*luis antes no estaba max caract*/}
                    </div>
                    <div className="input_phone">
                        <label htmlFor="telefono" className="phonelabel">Teléfono</label>
                        <input onChange = {this.telefonoHandler} id="telefono" className="phone" type="number" name="phone" placeholder="Digite su teléfono" maxLength={10} /> {/*luis antes no estaba max caract*/}
                    </div>
                    <div className="input_topic">
                        <label htmlFor="tema" className="tocpiclabel">Tema</label>
                        <select onChange = {this.topicHandler} id="tema" className="select" name="topic" >
                          <option value="Venta">Venta</option>
                          <option value="Trabajo">Trabajo</option>
                          <option value="Reparación">Reparación</option>
                          <option value="Otros">Otros</option>   
                        </select>
                    </div>
                    <div className="input_message">
                        <label htmlFor="mensaje" className="messagelabel">Mensaje</label>
                        <textarea onChange = {this.messageHandler} id="mensaje" className="message" name="message" rows={5} cols={23} placeholder="Escriba aquí su mensaje. 140 caract máximo." maxLength={140} defaultValue={""} /><br /> {/*luis antes no estaba max caract*/}
                    </div>
                    <div />
                    <div>
                        <input type="hidden" name="grupo" defaultValue="d" />
                    </div>
                    <div className="submit_form">
                        <input onClick = {this.btnResetHandler} id="borrar" type="reset" className="btn-reset" defaultValue="Borrar" />  
                        <input onClick = {this.btnSubmitHandler} id="enviar" type="submit" className="btn-submit" defaultValue="Enviar" />
                    </div>
                    </div>
                </form>
                <h1>Mapa</h1>
                <p className="street">Avenida Corrientes 6237, CABA.</p> 
                <div className="mapa"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5125198743117!2d-58.45006848429093!3d-34.59119936434371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5f12e398ecd%3A0x98abf435fbfab70!2sAv.%20Corrientes%206237%2C%20C1427BPA%20CABA!5e0!3m2!1ses-419!2sar!4v1594497150374!5m2!1ses-419!2sar" width={600} height={450} frameBorder={0} style={{border: 0}} allowFullScreen="" aria-hidden="false" tabIndex={0} /></div>
                </main>
            </div>
        );
    }
}

export default Contacto;