import React, { useEffect, useState } from 'react';
import API from '../../../api'

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsuarios = async () => {
            try {
                const response = await API.get('/users'); // Llama al endpoint de citas
                setUsers(response.data); // Guarda las citas en el estado
            } catch (error) {
                console.error('Error al obtener usuarios:', error);
            }
        };

        fetchUsuarios();
    }, []);

    return (
        <div>
            <h1>Usuarios</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.n1}>
                        {user.n2} - {user.eml} -{user.pwd_hash} - {user.rl}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Users;
