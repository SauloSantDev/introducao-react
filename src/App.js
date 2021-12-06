import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro";
import ListadeNotas from "./components/ListadeNotas";
import "./assets/estilos/App.css";

class App extends Component {
  render(){
    return (
      <section className="conteudo">
      <FormularioCadastro/>
      <ListadeNotas />
      </section>
    );
  }
}

export default App;
