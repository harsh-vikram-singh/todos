import React from 'react';
import styles from './App.module.css';
import CreateTodo from './components/createTodo';

function App() {
  return (
    <div className={styles.appContainer}>
      <section className={styles.content}>
        <CreateTodo />
      </section>
    </div>
  );
}

export default App;
