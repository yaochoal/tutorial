import React, { Component } from 'react';
import './App.css';
import store from './store';
class Footer extends Component {
    
  constructor() {
    super()
    this.state = { datos: []}
     store.subscribe(() => {
      this.setState({
        datos: store.getState().datos
      });
    });
  }
  
  render() {
   
    return (
      <div className="App">
     {
            this.state.datos.map((dato,id) => {
                  return <li key={id} >{dato}</li>
            })
          }
      </div>
      
    )
    
  }
}

export default Footer;
