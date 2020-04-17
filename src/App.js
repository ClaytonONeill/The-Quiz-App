import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main.js';
import Nav from './components/Nav.js'
import Header from './components/Header.js';
import Post from './components/Post.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      view: {
        page: 'home',
        pageTitle: 'About this site.'
      }
    }
  }

  handleView = (view, postData) => {
    let pageTitle = '';
    switch (view) {
      case 'home':
        pageTitle = 'About this site.'
        break
      case 'viewQuizzes':
          pageTitle = 'View Quizzes.'
          break
      case 'makeQuiz':
        pageTitle = 'Create A New Quiz!'
        break
        default:
        break
    }
    this.setState({
      view: {
        page: view,
        pageTitle: pageTitle
      }
    })
}

  render() {
    return (
      <div className="outter-container">
        <Header />
      <div className="inner-container">
      <Nav handleView={this.handleView}/>
      <Main
        view={this.state.view}
        handleView={this.handleView}
      />
      </div>
      </div>
    )
  }
}

export default App;
