import React, { Component } from "react";
import CardNota from "../CardNota";
import "./estilo.css";

class ListadeNotas extends Component {
  render() {
    return (
      <ul className="lista-notas">
        {Array.of("Trabalho", "Trabalho", "Estudos").map((categoria, index) => {
          return (
            <li key={index} className="lista-notas_item">
              <CardNota />
            </li>
          );
        })}
      </ul>
    );
  }
}
export default ListadeNotas;