import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import './Register.css';

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function registrar(r){
        r.preventDefault();
        const datas = [{
            'email': email,
            'password': password,
        }]

        localStorage.setItem('Dados', JSON.stringify(datas));

        r.target.reset();
    }

    const paginaInicial = () => {
        navigate('/')
      }
  
    return(
        <main className='centralize'>
            <form onSubmit={registrar}>
                <div className="style2">
                    <h1>Cadastrar</h1>
                </div>
                <input type="email" onChange={e=> setEmail(e.target.value)}></input>
                <input type="password" onChange={e=> setPassword(e.target.value)}></input>
                <button type="submit" className="salvar">Salvar</button>
                <div className="cadastrado">
                <button type="button" className='cadastrado' onClick={paginaInicial}>Já Cadastrado</button>
                </div>
             </form>
        </main>
    )
  }

export default Register;
