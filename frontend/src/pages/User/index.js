import React,{useState,useEffect} from 'react';
import api from '../../services/api';
import './style.css';

export default function User(){

    const [users, setUsers] = useState([]);
    useEffect(() => {
        api.get('users').then(response => {
            setUsers(response.data)
        })

    }, [])

    console.log(users)
    return(
        //<h1>User</h1>
        <div id="user-container">
            <h1>Lista de Usuários</h1>
            <ul className="user-list">
                <li>
                    <strong>Nome</strong>
                    <p>nome</p>
                    <strong>Email</strong>
                    <p>email</p>
                    <strong>Idade</strong>
                    <p>10</p>
                    <strong>Empresa</strong>
                    <p>UESB</p>
                </li>

            </ul>

        </div>
    );
}