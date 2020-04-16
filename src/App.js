import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main.js';

class App extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     view: {
  //       page: 'home',
  //       pageTitle: 'Quizzes'
  //     }
  //   }
  // }


  render() {
    return (
      <div>
      <Main />
      </div>
    )
  }
}

export default App;
