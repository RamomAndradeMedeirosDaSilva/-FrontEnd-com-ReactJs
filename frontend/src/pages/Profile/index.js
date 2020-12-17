import React, { useState, useEffect } from 'react';
import './style.css';
import { Link, useHistory, useParams } from "react-router-dom";
import api from '../../services/api';


export default function Profile() {

    const { id } = useParams();

    const history = useHistory();

    const initUser = {
        name: '',
        email: '',
        idade: 0,
        emapresa: ''
    }
    const [user, setUser] = useState(initUser);

    useEffect(() => {
        if (id) {
            api.get(`/users/${id}`).then(response => {
                //console.log(response.data)
                setUser(...response.data)
            })
        }
    }, []);

    function onSubmit(ev) {
        ev.preventDefault();

        const method = id ? 'put' : 'post';
        const url = id ? `/users/${id}` : `/users`;

        //api.post('/users',user).then((response)=>{
        api[method](url, user).then((response) => {
            history.push('/')
        })
    }

    function onChange(ev) {
        const { name, value } = ev.target;
        setUser({ ...user, [name]: value })
        //console.log(user)
    }

    return (
        /*<h1>Profile</h1>*/
        <div id="profile-container">
            <h1> Cadastro </h1>
            <div id="centralizaTudo">
                <form onSubmit={onSubmit}>
                    <strong>Nome:</strong>
                    <input name="name" onChange={onChange} value={user.name} />
                    <strong>Email:</strong>
                    <input name="email" onChange={onChange} value={user.email} />
                    <strong>Idade:</strong>
                    <input name="idade" onChange={onChange} value={user.idade} />
                    <strong>Empresa:</strong>
                    <input name="empresa" onChange={onChange} value={user.empresa} />

                    <div className="actions">
                        {/*<Link className="button"  to={"/"}>Volta</Link>*/}
                        <Link className="button" onClick={() => history.push('/')}>Volta</Link>
                        <button className="button" type="subimit">Salvar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}