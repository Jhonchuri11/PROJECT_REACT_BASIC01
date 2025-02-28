import React, { Component } from 'react';
import './App.css';


class App extends Component {

  // Añadiendo un constructor con un arreglo de datos

  constructor(props) {
    super(props)
    this.state = {
      articulos: [{
                      codigo: 1, 
                      descripcion: 'coca-cola',
                      precio: 2.50
                 },{
                      codigo: 2, 
                      descripcion: 'inka-cola',
                      precio: 2.20
                 },{
                      codigo: 3, 
                      descripcion: 'fanta',
                      precio: 1.70
                 }]
    }
    this.borrar = this.borrar.bind(this);
  }
  render() {
    return (
      <div className='container mt-4'>
        <table border="1" className='table table-info table-hover border-primary'>
        <thead>
          <tr>
            <th>Código</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Borra?</th>
            </tr>
            </thead>
        <tbody>
        {this.state.articulos.map(elemento => {

          // Mostrando en una tabla los datos del arreglo anterior

          return (
            <tr key={elemento.codigo}>
              <td className='text-primary'>
                {elemento.codigo}  
              </td>
              <td>
                {elemento.descripcion}
              </td>
              <td>
                {elemento.precio}
              </td>              
              <td>
                <button className='btn btn-danger' onClick={()=>this.borrar(elemento.codigo)}>Borrar</button>
              </td>
            </tr>
          )
        })}    
        </tbody>    
        </table>
      </div>

    );
  }

  // Andiendo funcion para eliminar una fila en la tabla

  borrar(cod) {
    var temp = this.state.articulos.filter((el)=>el.codigo !== cod);
    this.setState({
      articulos: temp
    })
}

}
export default App;
