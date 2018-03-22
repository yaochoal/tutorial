import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import lista from './list'
import store from './store';
import Lista from './Lista.js'
import Footer from './Footer.js'

class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = { s_users: []}
  this.handleEnviarClick = this.handleEnviarClick.bind(this);
  }
 componentWillMount() {
    fetch('https://api.github.com/users')
      .then((response) => {
        return response.json()
      })
      .then((users) => {
        console.log(users)
        this.setState({ s_users: users ,date: undefined})
      })
  }
  //Acción que actualiza la variable de el form
  setField (e) {
    this.setState({[e.target.name]: e.target.value,
      date: e.target.value
    })
  }
  //Declaramos la acción la cual avisara que vamos ejecutar un cambio por medio del dispatch
  handleEnviarClick(e){
     store.dispatch({
         type: "ADD_TO_STORE",
         texto: this.state.date
     })
     console.log(this.state.date);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          
        </header>
          <Lista listado={this.state.s_users} />
          <input type="text" onChange={(e)=>this.setField(e)} name="saluditos" />
         
          <button id="add" onClick={this.handleEnviarClick}>Enviar dato</button>
          <Footer />
      </div>
    )
  }
}

export default App;