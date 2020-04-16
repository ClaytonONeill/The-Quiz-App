import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main.js';
import Nav from './components/Nav.js'

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
      <div className="main">
      <Nav />
      <Main
        view={this.state.view.pageTitle}
      />
      </div>
    )
  }
}

export default App;
