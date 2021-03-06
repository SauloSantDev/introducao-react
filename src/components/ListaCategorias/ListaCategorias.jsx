import React, { Component } from "react";
import "./estilo.css";

class ListaCategorias extends Component {
  _handleEventoInput(evento) {
    if (evento.key === "Enter") {
      let valorCategoria = evento.target.value;
      this.props.adicionarCategoria(valorCategoria)
    }
  }
  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          {this.props.categorias.map((categoria, index) => {
            return <li key={index} className="lista-categorias_item">{categoria}</li>;
          })}
        </ul>
        <input
          type="text"
          placeholder="Adicionar Categoria"
          onKeyUp={this._handleEventoInput.bind(this)}
        />
      </section>
    );
  }
}

export default ListaCategorias;
