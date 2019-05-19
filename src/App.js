import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){

    super(props);

    this.state = {
      nombre: 'Luis H. Patiño Machado',
      count: 0
    }

  }

  despedirse = () =>{

    //alert('Adios')
    this.setState({

      nombre: 'Cambio'

    })
  }

  mas = (e) =>{

    e.preventDefault();

    this.setState(function(prevState){

      return{

      count: prevState.count + 1

      }

    })
  }

  menos = (e) =>{

    e.preventDefault();

    this.setState(function(prevState){

      if (prevState.count >= 1){

      return{

      count: prevState.count - 1

      }
      }

    })
  }

  reset = (e) =>{

    e.preventDefault();

    this.setState({

      count: 0

    })
  }

  render() {

    return (

      <div className="App">

      <h1 onClick={this.despedirse}>{this.state.nombre}</h1>

      <h2>{this.state.count}</h2>

      <a href="#" onClick={this.menos}>Menos</a><br />
      <a href="#" onClick={this.mas}>Más</a><br />
      <a href="#" onClick={this.reset}>Reset</a>

      </div>

    );
  }
}

export default App;
