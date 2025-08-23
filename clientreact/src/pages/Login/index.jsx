import React from "react";
import './styles.css';
import logoImage from'../../assets/logoImage.png';

export default function Login(){
    return(

        <div className="login-container">
            <section className="form">
                <img src={logoImage} alt="logoImage" id="img1" />

                <form>
                <h1>Cadastro de Alunos</h1>
                    <input placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button className="button" type="submit">Login</button>
                </form>
            </section>
        </div>
    )
}
