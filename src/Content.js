import React, { Component } from 'react';
import './App.css';

class Content extends Component {
  constructor(props) {
    super(props)
    this.state = { mode: undefined }
    
  }
  
   componentWillMount() {
    let mode;
    if (this.props.age > 70) {
      mode = 'Viejo';
    } else if (this.props.age < 18) {
      mode = 'Joven';
    } else {
      mode = 'Adulto';
    }
    this.setState({ mode });
  }
  
  componentDidMount() {
    
//    this.setState({ mode: "Viejo" });
  }
  
  render() {
   
    return (
      <div className="App">
        
   
        <h2>Mi login es: {this.props.name}</h2>
        <h2>Mi id es: {this.props.age} y soy {this.state.mode}</h2>
        
      </div>
      
    )
    
  }
}

export default Content;
