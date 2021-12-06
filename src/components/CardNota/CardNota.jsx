import React, { Component } from "react";
import "./estilo.css";

class CardNota extends Component {
    render(){
        return(
            <section className="card-nota">
                <header className="card-nota_cabecalho">
                <h3 className="card-nota_titulo">Título da Nota</h3>
                <p className="card-nota_texto">Texto da nota</p>
                </header>
            </section>
        );
    }
}
export default CardNota;