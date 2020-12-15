import React from 'react';
import './style.css';


export default function Profile() {
    return (
        /*<h1>Profile</h1>*/
        <div id="profile-container">
            <h1> Cadastro </h1>
            <form>
                <strong>Nome:</strong>
                <input name="name" />
                <strong>Email:</strong>
                <input name="email" />
                <strong>Idade:</strong>
                <input name="idade" />
                <strong>Empresa:</strong>
                <input name="empresa" />

                <div className="actions">
                    <button className="button" type="subimit">Voltar</button>
                    <button className="button" type="subimit">Salvar</button>
                </div>
            </form>
        </div>
    );
}