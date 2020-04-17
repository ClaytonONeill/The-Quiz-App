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
        page: '',
        pageTitle: 'Quizzes'
      },
      formInputs: {
        id: null,
        quiztitle: '',
        category: '',
        question1: '',
        answer1: '',
        wronganswer1a: '',
        wronganswer1b: '',
        question2: '',
        answer2: '',
        wronganswer2a: '',
        wronganswer2b: '',
        question3: '',
        answer3: '',
        wronganswer3a: '',
        wronganswer3b: '',
        question4: '',
        answer4: '',
        wronganswer4a: '',
        wronganswer4b: '',
        question5: '',
        answer5: '',
        wronganswer5a: '',
        wronganswer5b: ''
      }
    }
  }

  handleView = (view, postData) => {
    let pageTitle = '';
    let formInputs = {
      id: null,
      quiztitle: '',
      category: '',
      question1: '',
      answer1: '',
      wronganswer1a: '',
      wronganswer1b: '',
      question2: '',
      answer2: '',
      wronganswer2a: '',
      wronganswer2b: '',
      question3: '',
      answer3: '',
      wronganswer3a: '',
      wronganswer3b: '',
      question4: '',
      answer4: '',
      wronganswer4a: '',
      wronganswer4b: '',
      question5: '',
      answer5: '',
      wronganswer5a: '',
      wronganswer5b: ''
    }
  switch (view) {
    case 'home':
      // pageTitle: 'Quizzes'
      break
    case 'viewQuizzes':
        // pageTitle: 'View Quizzes'
        break
    case 'makeQuiz':
      // pageTitle: 'Create A New Quiz!'
      break
      default:
      break
  }
  this.setState({
    view: {
      page: view,
      pageTitle: pageTitle
    },
    formInputs: formInputs
  })
}

  render() {
    return (
      <div className="outter-container">
        <Header />
      <div className="inner-container">
      <Nav handleView={this.handleView}/>
      <Main
        view={this.state.view.pageTitle}
        handleView={this.handleView}
      />
      </div>
      </div>
    )
  }
}

export default App;
