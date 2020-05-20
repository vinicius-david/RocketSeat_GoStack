import React, { useState, useEffect } from 'react';
import api from './services/api';

import Header from './components/Header'

import './App.css';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('/projects').then(response => {
      setProjects(response.data)
    });
  }, []);

  async function handleAddProject() {

    const response = await api.post('/projects', {
      title: `Novo Projeto ${Date.now()}`,
      owner: "Vinicius"
    });

    const project = response.data;

    setProjects([...projects, project]);
  }

  return (
    <div>
      <Header title='Projects' />

      {projects.map(project => <li key={project.id}>{project.title}</li>)}

      <button type='submit' onClick={handleAddProject}>Adicionar Projeto</button>
    </div>
  );
}

export default App;