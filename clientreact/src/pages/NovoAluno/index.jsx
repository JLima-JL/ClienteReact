import React from "react";
import './styles.css';

export default function NovoAluno() {
    return (
        <div className="novoaluno-container">
            <h1>Cadastro de Novo Aluno</h1>
            <form>
                <input type="text" placeholder="Nome" />
                <input type="email" placeholder="Email" />
                <input type="number" placeholder="Idade" />
                <button type="button" className='button'>
                    Cadastrar
                </button>
            </form>
        </div>
    )
}