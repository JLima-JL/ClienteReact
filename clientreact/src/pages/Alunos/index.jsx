import { useState, useEffect } from "react";
import './styles.css';
import logoCadastro from '../../assets/cadastro.png';
import { FiEdit, FiUserX, FiXCircle } from 'react-icons/fi'
import { Link, Navigate, useNavigate } from "react-router-dom";
import api from "../../services/api";


export default function Alunos() {

    const [alunos, setAlunos] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [filtro,setFiltro] = useState([])

    const email = localStorage.getItem('email');
    const token = localStorage.getItem('token');

    const navigate = useNavigate();

    const authorization = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    useEffect(() => {
        api.get('api/Alunos', authorization).then(
            response => { setAlunos(response.data); }, token)
    })

    async function editAluno(id) {
        try {
            navigate(`aluno/novo/${id}`)
        } catch (erro) {
            alert('Nao foi possivel editar o aluno' + erro)
        }
    }

    async function logout() {
        try {
            localStorage.clear();
            localStorage.setItem('token', '');
            authorization.headers = '';
            navigate('/');
        } catch (error) {
            alert('Nao foi possivel fazer o Logout' + error);
        }
    }
    const searchAlunos = (searchValue) => {
        setSearchInput(searchValue);
        if (searchInput !== '') {
            const dadosFiltrados = alunos.filter((item) => {
                return Object.values(item).join('').toLowerCase()
                    .includes(searchInput.toLowerCase())
            });
            setFiltro(dadosFiltrados);
        }
        else {
            setFiltro(alunos);
        }
    }

    async function deleteAluno(id) {
        try{
            if(window.confirm('Deseja deletar o aluno de id:'+ id +'?' )){
                await api.delete(`api/Alunos/${id}`,authorization);
                setAlunos(alunos.filter(aluno => aluno.id !== id));
            }

        }catch(erro){
            alert("Erro ao deletar dados do aluno"+erro)
        }
    }

    return (
        <div className="aluno-container">
            <header>
                <img src={logoCadastro} alt="cadastro" />
                <span>Bem-Vindo, <strong>{email}</strong></span>
                <Link className="button" to="aluno/novo/0">Novo Aluno</Link>
                <button onClick={logout} type="button">
                    <FiXCircle size={30} color="#17202a" />
                </button>
            </header>
            <form>
                <input type="text"
                    placeholder="Filtrar por nome..."
                    onChange={(e) => searchAlunos(e.target.value)}
                />
            </form>
            <h1>Relação de Alunos</h1>
            {searchInput.length > 1 ? (
                <ul>
                    {filtro.map(aluno => (
                        <li key={aluno.id}>
                            <b>Nome:</b>{aluno.nome}<br /><br />
                            <b>Email:</b>{aluno.email}<br /><br />
                            <b>Idade:</b>{aluno.idade}<br /><br />

                            <button onClick={() => editAluno(aluno.id)} type="button">
                                <FiEdit size={25} color="#17202a" />
                            </button>
                            <button onClick={()=> deleteAluno(aluno.id)} type="button">
                                <FiUserX size={25} color="#17202a" />
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <ul>
                    {alunos.map(aluno => (
                        <li key={aluno.id}>
                            <b>Nome:</b>{aluno.nome}<br /><br />
                            <b>Email:</b>{aluno.email}<br /><br />
                            <b>Idade:</b>{aluno.idade}<br /><br />

                            <button onClick={() => editAluno(aluno.id)} type="button">
                                <FiEdit size={25} color="#17202a" />
                            </button>
                            <button onClick={()=> deleteAluno(aluno.id)}>
                                <FiUserX size={25} color="#17202a" />
                            </button>
                        </li>
                    ))}
                </ul>
            )
            }
        </div>
    )
}