import React, { Component } from "react";
import CardNota from "../CardNota";
import "./estilo.css";

class ListadeNotas extends Component {
  render() {
    return (
      <ul className="lista-notas">
        {this.props.notas.map((nota, index) => {
          return (
            <li key={index} className="lista-notas_item">
              <CardNota indice={index} apagarNota={this.props.deletarNota} titulo={nota.titulo} texto={nota.texto} categoria={nota.categoria}/>
            </li>
          );
        })}
      </ul>
    );
  }
}
export default ListadeNotas;
