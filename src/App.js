import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro";
import ListadeNotas from "./components/ListadeNotas";
import ListaCategorias from "./components/ListaCategorias";
import "./assets/estilos/App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notas: [],
      categorias: []
    };
    // this.notas =[];
  }

  criarNota(titulo, texto) {
    const novaNota = { titulo, texto };
    const novoArrayNotas = [...this.state.notas, novaNota];
    const novoEstado = {
      notas: novoArrayNotas,
    };
    this.setState(novoEstado);
  }

  deletarNota(index) {
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index, 1);
    this.setState({ notas: arrayNotas });
  }

  adicionarCategoria(nomeCategoria){
    const novoArrayCategorias = [...this.state.categorias, nomeCategoria];
    const novoEstado = {
      categorias: novoArrayCategorias,
    };
    this.setState(novoEstado);
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <main className="conteudo-principal">
          <ListaCategorias categorias={this.state.categorias} adicionarCategoria={this.adicionarCategoria.bind(this)}/>
          <ListadeNotas
            notas={this.state.notas}
            deletarNota={this.deletarNota.bind(this)}
          />
        </main>
      </section>
    );
  }
}

export default App;
