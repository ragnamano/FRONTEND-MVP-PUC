import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Lista.css'

function Lista() {
  const [livros, setLivros] = useState([]);

    useEffect(() => {
      fetchLivros();
    }, []);
  
    const fetchLivros = async () => {
      try {
        const response = await axios.get('http://localhost:5001/listalivros');
        setLivros(response.data.livros);
      } catch (error) {
        console.error('Erro ao buscar livros:', error);
      }
    }; 

    const handleDeleteLivro = async (livroId) => {
      try {
        await axios.delete(`http://localhost:5001/apagalivro?id=${livroId}`);
        fetchLivros(); // Atualiza a lista após a exclusão bem-sucedida
      } catch (error) {
        console.error('Erro ao excluir livro:', error);
      }
    };

  return (
    <section className='lista'>
      <div>
        <h2>Lista de Livros</h2>
        <ul>
          {livros.map(livro => (
            <li key={livro.id}>
              <strong>Título:</strong> {livro.titulo} - <strong>Autor:</strong> {livro.autor} - <strong>Genero:</strong> {livro.genero}
              <button onClick={() => handleDeleteLivro(livro.id)}>Deletar</button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Lista;