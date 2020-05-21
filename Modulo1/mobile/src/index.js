import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';

import api from './services/api';

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('/projects').then(response => {
      setProjects(response.data)
    });
  }, []);

  async function handleAddProject() {

    const response = await api.post('/projects', {
      title: `Novo Projeto ${Date.now()}`,
      owner: 'Vinicius David'
    });
    
    const project = response.data;
    setProjects([...projects, project]);
  }

  return (
    <>
      <StatusBar barStyle='dark-content' backgroundColor='#7159c1' />

      <SafeAreaView style={styles.container}>

        <FlatList 
          data={projects}
          keyExtractor={project => project.id}
          renderItem={({ item: project }) => (
            <Text style={styles.project}>{project.title}</Text>
          )}
        />

        <TouchableOpacity 
          activeOpacity={0.8} 
          style={styles.button} 
          onPress={handleAddProject}
        >
          <Text style={styles.buttonText}>Adicionar projeto</Text>
        </TouchableOpacity>

      </SafeAreaView>

      {/* <ScrollView style={styles.container}>

        {projects.map(project => (
          <Text style={styles.project} key={project.id}>{project.title}</Text>
        ))}

      </ScrollView> */}

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
  },

  project: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
  },

  button: {
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 4,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    fontSize: 24,
    fontWeight: 'bold'
  }
})