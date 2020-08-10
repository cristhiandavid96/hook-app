import React, { useEffect } from 'react';
import { Message } from './Message';
import './SimpleForm.css';
import { useForm } from '../hooks/useForm';

export const SimpleForm = () => {


    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: '',
    });

    const { name, email, password } = formValues;

    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
    }
    return (
        <form onSubmit={handleSubmit} >
            <h1>useEffect</h1>
            <hr />

            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
            </div>


            <div className="form-group">
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="email@gmail.com"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group">
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="****"
                    value={password}
                    onChange={handleInputChange}
                />
            </div>
            <button className={"btn btn-primary"}>
                Guardar
            </button>
            {/*(name === '123') && <Message />*/}

        </form>
    )
}
