import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/HomePage';
import QuestionView from './components/QuestionView';

function App() {
  return (
    <div className="App">
      {/* <HomePage /> */}
      <QuestionView />
    </div>
  );
}

export default App;
