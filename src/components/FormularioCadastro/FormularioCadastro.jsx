import React, { Component } from "react";
import "./estilo.css";

class FormularioCadastro extends Component {
    render(){
        return(
            <form className="form-cadastro">
                <input type="text" placeholder="Título" className="form-cadastro_input" />
                <textarea placeholder="Escreva aqui a sua nota" className="form-cadastro_input"/>
                <button type="submit" className="form-cadastro_submit" >Criar nota</button>
            </form>
        );
    }
}

export default FormularioCadastro;