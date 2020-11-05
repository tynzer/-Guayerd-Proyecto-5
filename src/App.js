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
            productoList: []
        }
    }
    
    componentDidMount() {
        /*  fetch de productos
         this.setState(productList:productosrecibidosdel fetch) */
    }


    render() {
        return (
            <Router>
                <Header/>
                <Switch>
                    <Route exact path="/"><Home/></Route>
                    <Route path="/todos"><Productos productList={this.state.productList} /></Route>
                    <Route path="/users"><Contacto/></Route>
                </Switch>
                <Footer/>
            </Router>
        );
    }
}

export default App;