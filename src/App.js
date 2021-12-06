import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro";
import ListadeNotas from "./components/ListadeNotas";
import "./assets/estilos/App.css";

class App extends Component {
  constructor(){
    super();
    this.state = {
      notas: []
    }
    // this.notas =[];
  }
  criarNota(titulo, texto){
    const novaNota = {titulo, texto};
    // this.notas.push(novaNota);
    // console.log(this.notas.length)
    const novoArrayNotas = [...this.state.notas, novaNota];
    const novoEstado = {
      notas: novoArrayNotas
    }
    this.setState(novoEstado);
  }
  render(){
    return (
      <section className="conteudo">
      <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
      <ListadeNotas notas={this.state.notas}/>
      </section>
    );
  }
}

export default App;
