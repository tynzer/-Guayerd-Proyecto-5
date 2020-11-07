import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import Productos from './Components/Productos';
import Contacto from './Components/Contacto';
import Header from './Components/Header';
import Footer from './Components/Footer';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productList: [],
            URL_: "https://guayerd-proyecto3-d.herokuapp.com/"

        }
    }

    componentDidMount() {


     let aceptaIngresarDatos = false; // este parámetro se guarda en localstorage por unica vez la primera vez que entra
        let nombre = "";
        let eMail = "";

        if (!localStorage.getItem("aceptaIngresarDatos")) { // si no existe ese key es porque entra por primera vez

            if (window.confirm("¿Desea ingresar su nombre y su email?")) { // si acepta pide los datos y guarda la decision
                aceptaIngresarDatos = true;
                ingresarNombre();
                ingresarEmail();
                window.alert("Datos guardados correctamente");
            } else {
                aceptaIngresarDatos = false;
            }
            localStorage.setItem("aceptaIngresarDatos", aceptaIngresarDatos);
            fetch(`${this.state.URL_}userData`, {
                method: 'POST',
                body: JSON.stringify({ token: "GRUPOD2020", name: nombre, email: eMail, sendEmail: aceptaIngresarDatos }),
                headers: { 'Content-Type': 'application/json' }
            }).then((res) => {
                return res.json()
            }).then((res) => {
                console.log("DATOS ENVIADOS", res)
            });

        }

        /* LUIS
        Historia de Usuario: 
        "Como cliente, deseo conocer si el visitante nos permite enviarle un email con novedades".
        Se necesita:
        - Preguntarle al visitante(Desde cualquier página) si podemos enviarle un email con novedades
        - Debemos guardar la respuesta para no tener que preguntar cada vez que ingrese.
        */


        let novedades = false;
        if (!localStorage.getItem("novedades")) {
            if (window.confirm("¿Quiere usted recibir Novedades?")) {
                novedades = true;
                if (!localStorage.getItem("email")) {
                    ingresarEmail();
                }
                window.alert("Acepto las novedades en su mail " + localStorage.getItem("email"));
                localStorage.setItem("novedades", novedades);
            } else {
                novedades = false;
                localStorage.setItem("novedades", novedades);
            }
        }

        function ingresarNombre() { // insiste hasta que se ingrese correctamente el nombre
            do {
                nombre = window.prompt("Ingrese su nombre: ");
                if (validarNombre(nombre)) {
                    localStorage.setItem("nombre", nombre);
                }
                else {
                    window.alert("No se acepta un campo vacío, vuelva a intentarlo por favor");
                }
            } while (!validarNombre(nombre))
        }

        function ingresarEmail() { // insiste hasta que se ingrese correctamente el email
            do {
                eMail = window.prompt("Ingrese su email: ");
                if (validarEmail(eMail)) {
                    localStorage.setItem("email", eMail);
                }
                else {
                    window.alert("Ingresó un mail inválido, vuelva a intentarlo por favor");
                }
            } while (!validarEmail(eMail))
        }

        function validarNombre(parametroNombre) {
            return (parametroNombre != "" && parametroNombre != null);
        }

        function validarEmail(parametroEmail) {
            return (parametroEmail != "" && parametroEmail != null && parametroEmail.indexOf(".") !== -1 && parametroEmail.indexOf("@") !== -1);
        }
    



        fetch(`${this.state.URL_}productList`).then((res) => res.json())
            .then(
                (productList) => {
                    this.setState({ productList: productList });
                }
            )
        /*  fetch de productos
         this.setState(productList:productosrecibidosdel fetch) */
    }


    render() {
        return (
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/"><Home /></Route>
                    <Route path="/productos"><Productos productList={this.state.productList} /></Route>
                    <Route path="/contacto"><Contacto /></Route>
                </Switch>
                <Footer />
            </Router>
        );
    }
}

export default App;

/*
<Route path="/"><Contacto/></Route>

*/