# Tutorial React

En este repositorio explicaremos paso a paso cada uno de los elementos **REACT.js**.

## Empezemos



1.Vamos a descargar las depencias necesarias correspondientes:

```nvm install v8.9.4 ```
  
```npm install create-react-app```
 
```create-react-app my-app```

```cd my-app```

Iniciar nuestro servidor local

```npm start```

2. Creamos nuestro primer componente en la siguiente ruta:
 
```\my-app\src\Content.js```

```
//dependencias
import React, { Component } from 'react';
import './App.css';

class Content extends Component {
   
  render() {
    return (
      <div className="App">
      
        <h1> Hola soy un componente</h1>
        
      </div>
    );
  }
}

export default Content;

```

3. Muy bien ahora para visualizar nuestro componente lo llamamos desde el componente App declarando su dependencia y poniendolo por pantalla de la siguiente forma:
en la ruta:

```\my-app\src\App.js```
 
```
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//Importamos la dependencia de nuestro componente
import Content from './Content.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        //Declaramos nuestro componente en el metodo render
        <Content />
      </div>
    );
  }
}

export default App;

```

4. Ahora para pasar props con nuestro nombre y edad a nuestro componente lo hacemos de la siguiente forma:

en la ruta:
```\my-app\src\App.js```

```

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Content from './Content.js';

class App extends Component {

  
  render() {
    var age = 18;
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Content name = "Carlos angarita" age={age} />
      </div>
    )
    
  }
  
}

export default App;



```
5. Para recibirlos en nuestro componente Content lo hacemos de la siguiente forma

```

import React, { Component } from 'react';
import './App.css';

class Content extends Component {

  render() {
    return (
      <div className="App">
      
        <h1> Hola soy un componente!</h1>
   
        <h2>nombre es: {this.props.name}</h2>
        <h2>edad es: {this.props.age}</h2>
        
      </div>
    );
  }
}

export default Content;

```

6. Ahora vamos a decidir si ver o no ver nuestro nombre por medio de un state y lo hacemos de la siguiente forma:
en la ruta:
```\my-app\src\Content.js```

```

import React, { Component } from 'react';
import './App.css';

class Content extends Component {
  constructor(props) {
    super(props)
    this.state = { event: 0}
     this.handleMostrarClick = this.handleMostrarClick.bind(this);
     this.handleOcultarClick = this.handleOcultarClick.bind(this);
  }
   handleMostrarClick(e) {
     this.setState({ event: 1 })
  }
  handleOcultarClick(e) {
     this.setState({ event: 0})
  }
  
  
 
  render() {
    if (this.state.event > 0) {
    return (
      <div className="App">
      
        <h1> Hola soy un componente!</h1>
   
        <h2>nombre es: {this.props.name}</h2>
        <h2>edad es: {this.props.age}</h2>
        <p className="text-center">Desea ocultar sus props?</p>
        <button id="add" onClick={this.handleOcultarClick}>Si</button>
      </div>
      
    )}else {
      return <div>
       <h1> Hola soy un componente!</h1>
       <p className="text-center">Desea ver sus props?</p>
       <button id="add" onClick={this.handleMostrarClick}>Si</button>
       </div>
    }
  }
}

export default Content;

```
6. Ahora vamos a probar los metodos para visualizar el ciclo de vida de un componente y lo haremos por medio de nuestra edad, donde el metodo componentWillMount() el cual decidira si somos jovenes,adultos o Viejos:
en la ruta:
```\my-app\src\Content.js```
```

import React, { Component } from 'react';
import './App.css';

class Content extends Component {
  constructor(props) {
    super(props)
    this.state = { event: 0, mode: undefined }
     this.handleMostrarClick = this.handleMostrarClick.bind(this);
     this.handleOcultarClick = this.handleOcultarClick.bind(this);
  }
   handleMostrarClick(e) {
     this.setState({ event: 1 })
  }
  handleOcultarClick(e) {
     this.setState({ event: 0})
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
  
 
  render() {
    if (this.state.event > 0) {
    return (
      <div className="App">
      
        <h1> Hola soy un componente!</h1>
   
        <h2>Mi nombre es: {this.props.name}</h2>
        <h2>Mi edad es: {this.props.age} y soy {this.state.mode}</h2>
        <p className="text-center">Desea ocultar sus props?</p>
        <button id="add" onClick={this.handleOcultarClick}>Si</button>
      </div>
      
    )}else {
      return <div>
       <h1> Hola soy un componente!</h1>
       <p className="text-center">Desea ver sus props?</p>
       <button id="add" onClick={this.handleMostrarClick}>Si</button>
       </div>
    }
  }
}

export default Content;


```

7. Ahora por medio del metodo componentDidMount() verificaremos que este se ejecuta despues de hacer el render donde a pesar que somos adultos el nos definira siempre que somos viejos de la siguiente forma:
en la ruta:
```\my-app\src\Content.js```
```
import React, { Component } from 'react';
import './App.css';

class Content extends Component {
  constructor(props) {
    super(props)
    this.state = { event: 0, mode: undefined }
     this.handleMostrarClick = this.handleMostrarClick.bind(this);
     this.handleOcultarClick = this.handleOcultarClick.bind(this);
  }
   handleMostrarClick(e) {
     this.setState({ event: 1 })
  }
  handleOcultarClick(e) {
     this.setState({ event: 0})
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
    this.setState({ mode: "Viejo" });
  }
  
  render() {
    if (this.state.event > 0) {
    return (
      <div className="App">
      
        <h1> Hola soy un componente!</h1>
   
        <h2>Mi nombre es: {this.props.name}</h2>
        <h2>Mi edad es: {this.props.age} y soy {this.state.mode}</h2>
        <p className="text-center">Desea ocultar sus props?</p>
        <button id="add" onClick={this.handleOcultarClick}>Si</button>
      </div>
      
    )}else {
      return <div>
       <h1> Hola soy un componente!</h1>
       <p className="text-center">Desea ver sus props?</p>
       <button id="add" onClick={this.handleMostrarClick}>Si</button>
       </div>
    }
    
  }
}

export default Content;

```

8. Ahora lo haremos para no solo visualizarnos a nosotros si no tambien a los miembros de nuestro grupo para esto creamos la siguiente lista:
en la ruta:
```\my-app\src\lista.js```
```
export default [
  {
    id: 1,
    name: 'Carlos Angarita',
    age: 17
  },
  {
    id: 2,
    name: 'Gilgerto Rojas',
    age: 22
  },
  {
    id: 3,
    name: 'Danila Cano',
    age: 96
  }
];


```

8. Ahora vamos a crear un nuevo componente para visualizar a nuestros compañeros muy similar al de content:
en la ruta:
```\my-app\src\Lista.js```
```
import React, { Component } from 'react';
import './App.css';
import Content from './Content.js';

class Lista extends Component {
constructor(props) {
    super(props)
    this.state = { event: 0 }
     this.handleMostrarClick = this.handleMostrarClick.bind(this);
     this.handleOcultarClick = this.handleOcultarClick.bind(this);
  }
  handleMostrarClick(e) {
     this.setState({ event: 1 })
  }
  handleOcultarClick(e) {
     this.setState({ event: 0})
  }
  
  render() {
    var age = 18;
 if (this.state.event > 0) {
    return (
      <div className="App">
      <h1> Hola soy un componente!</h1>
        {
            this.props.listado.map((user) => {

                  return <Content key={ user.id }
                                  name={ user.name }
                                  age={ user.age }
                                   />
            })
          }
        <Content name = "Carlos angarita" age={age} />
        <p className="text-center">Desea ocultar sus props?</p>
        <button id="add" onClick={this.handleOcultarClick}>Si</button>
      </div>
    )}else {
      return <div>
       <h1> Hola soy un componente!</h1>
       <p className="text-center">Desea ver sus props?</p>
       <button id="add" onClick={this.handleMostrarClick}>Si</button>
       </div>
    }
    
  }
  
}

export default Lista;
```
9. Ahora que esta listo nuestro componente lista ahora ajustamos nuestro componente content:
en la ruta:
```\my-app\src\Content.js```

```

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
    
    this.setState({ mode: "Viejo" });
  }
  
  render() {
   
    return (
      <div className="App">

        <h2>Mi nombre es: {this.props.name}</h2>
        <h2>Mi edad es: {this.props.age} y soy {this.state.mode}</h2>
    
      </div>
      
    )
    
  }
}

export default Content;

```

10. Muy bien ahora que ya podemos leer listas ahora lo haremos con una api externa de github de la siguiente forma por medio de fetch:
en la ruta:
```\my-app\src\App.js```
```
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import lista from './list'

import Lista from './Lista.js'
class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = { s_users: []}
  
  }
 componentWillMount() {
    fetch('https://api.github.com/users')
      .then((response) => {
        return response.json()
      })
      .then((users) => {
        console.log(users)
        this.setState({ s_users: users })

      })
  }
  
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Lista listado={lista} />
      </div>
    )
    
  }
  
}

export default App;


```

11. visualizamos por consola si obtenemos los datos correctamente, de ser asi ahora le damos el objeto a nuestro componente lista:


```

 <Lista listado={users} />

```
12. pero nuestro objeto no tiene la variable name ni tampoco age por lo cual los cambiaremos a variables que si tenemos:
en la ruta:
```\my-app\src\Lista.js```
```
 {
            this.props.listado.map((user) => {

                  return <Content key={ user.id }
                                  name={ user.login }
                                  age={ user.id }
                                   />
            })
          }

```
13. Ahora para finalizar pasaremos datos por redux, como explico el compañero redux es como una pequeña base de datos para mantener datos y poderlos comunicar entre componentes por lo cual lo primero que hacemos sera lo siguiente:

14. Para comenzar decidimos que dato queremos enviar por lo cual esta vez guardamos un dato obtenido en un form y lo enviaremos por medio de una accion a otro componente de la siguiente forma:
```\my-app\src\App.js```
```
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

```

15. Ahora que ya tenemos listo nuestro dispatch, pasaremos nuestro dato a el store pero ahora lo crearemos
```\my-app\src\store.js```
```
import { createStore } from 'redux';
//reductor para ejecutar el cambio
const reducer = (state,action) => {
//declaramos un if el cual verifica la accion que ejecutamos y realiza el cambio en el array de datos obtenidos
    if(action.type === "ADD_TO_STORE"){
        return{
            ...state,
            datos : state.datos.concat(action.texto)
        }
    }
    return state;
};
//inicializamos el store y tambien las variables que utilizaremos en el mismo en este caso la de datos
export default createStore(reducer, {datos: [] });
```

16. Ahora que tenemos listo nuestro store y que podemos ejecutar el cambio ahora vamos a crear un componente nuevo llamado Footer que nos reciba los cambios:
```\my-app\src\store.js```

```
import React, { Component } from 'react';
import './App.css';
import store from './store';
class Footer extends Component {
  //declaramos el state que nos recibira los datos 
  constructor() {
    super()
    this.state = { datos: []}
    //utilizamos el metodo subscribe el cual cada que se efectue un cambio nos actualiza nuestra variable datos
     store.subscribe(() => {
      this.setState({
        datos: store.getState().datos
      });
    });
  }
  
  render() {
   //mapeamos la lista de los datos que recibimos y los mostramos por pantalla
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
```

17. Ahora que ya tenemos todo listo ahora solo necesitamos agregar nuestro nuevo componente Footer al render de Add para pasarlo por pantalla y verificar que todo este correctamente:

En la ruta: ```\my-app\src\App.js```

```
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
  //pasamos nuestro footer y todo funciona perfecto
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
```

18. Y listo eso seria todo ahora ya podemos utilizar la store para pasar datos al compomente footer!

Espero les sea de utilidad esta guia de react!
Buen día.