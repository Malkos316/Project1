/**
 * My To Do List App
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import ToDoList from './src/ToDoList';
import ToDoForm from './src/ToDoForm';

function App() {

  const [tasks, setTasks] = useState(
    [
      'Do laundry',
      'Go to gym',
      'Walk dog',
      'Study React Native',
      'Buy groceries',
    ] );

  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
  <SafeAreaView>
    <ToDoList tasks = {tasks} />
    <ToDoForm onAddTask = {handleAddTask} />
  </SafeAreaView>

  );
}


export default App;
