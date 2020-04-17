import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main.js';
import Nav from './components/Nav.js'
import Header from './components/Header.js';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      view: {
        page: 'home',
        pageTitle: 'Quizzes'
      }
    }
  }

  // handleView = (view) => {
  //   console.log(viewing);
  // }
  // this.setState({
  //   view: {
  //     page: view,
  //     pageTitle: pageTitle
  //   }
  // })

  render() {
    return (
      <div className="outter-container">
        <Header />
      <div className="inner-container">
      <Nav />
      <Main
        view={this.state.view.pageTitle}
      />
      </div>
      </div>
    )
  }
}

export default App;
