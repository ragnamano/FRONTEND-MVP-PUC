import Botão from '../Botão'
import CampoTexto from '../CampoTexto'
import './Formulario.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Formulario() {
  const [livro, setLivro] = useState({ titulo: '', autor: '', genero: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLivro(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5001/cadastralivro', livro);
      console.log('Livro cadastrado:', response.data);
      // Limpar o estado do formulário após o cadastro bem-sucedido
      setLivro({ titulo: '', autor: '', genero: '' });
    } catch (error) {
      console.error('Erro ao cadastrar livro:', error);
    }
  };
        return(
        <section className='formulario'>
            <form onSubmit={handleSubmit}>
                <h2>Preencha as informações do seu livro</h2>
            <CampoTexto obrigatorio={true} label="Titulo" placeholder="Digite o Titulo" type="text" name="titulo" value={livro.titulo} onChange={handleChange}/>
            <CampoTexto obrigatorio={true} label="Autor" placeholder="Digite o Autor" type="text" name="autor" value={livro.autor} onChange={handleChange}/>
            <CampoTexto obrigatorio={true} label="Genero" placeholder="Digite o Genero" type="text" name="genero" value={livro.genero} onChange={handleChange}/>
            <Botão>
                Cadastrar    
            </Botão>
            </form>
        </section>
        
    )
}
export default Formulario