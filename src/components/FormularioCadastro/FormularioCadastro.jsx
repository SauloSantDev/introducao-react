import React, { Component } from "react";
import "./estilo.css";

class FormularioCadastro extends Component {
    constructor(props){
        super(props);
        this.titulo = "";
        this.texto = "";
    }

    _handleMudancaTitulo(evento){
        evento.stopPropagation();
        this.titulo= evento.target.value;
        console.log(this.titulo);
    }

    _handleMudancaTexto(evento){
        evento.stopPropagation();
        this.texto = evento.target.value;
        console.log(this.texto);
    }

    _criarNota(evento){
        evento.stopPropagation();
        evento.preventDefault();
        this.props.criarNota(this.titulo, this.texto);
    }

    render(){
        
        return(
            <form className="form-cadastro" onSubmit={this._criarNota.bind(this)}>
                <input type="text" placeholder="Título" className="form-cadastro_input" onChange={this._handleMudancaTitulo.bind(this)}/>
                <textarea placeholder="Escreva aqui a sua nota" className="form-cadastro_input"onChange={this._handleMudancaTexto.bind(this)} />
                <button type="submit" className="form-cadastro_submit" >Criar nota</button>
            </form>
        );
    }
}

export default FormularioCadastro;