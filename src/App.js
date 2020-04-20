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
      },
      formInputs: {
        quiztitle: null,
        category: null,
        question1: null,
        answer1: null,
        wronganswer1a:  null,
        wronganswer1b: null,
        question2: null,
        answer2: null,
        wronganswer2a:  null,
        wronganswer2b:  null,
        question3: null,
        answer3: null,
        wronganswer3a: null,
        wronganswer3b: null,
        question4: null,
        answer4: null,
        wronganswer4a: null,
        wronganswer4b: null,
        question5: null,
        answer5: null,
        wronganswer5a: null,
        wronganswer5b: null,
        id: null
      }
    }
  }

  handleView = (view, postData) => {
    let pageTitle = '';
    let formInputs = {
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
      wronganswer5b: '',
      id: null
    }
    let quizData = {
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
      wronganswer5b: '',
      id: null
    }
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
      case 'showQuiz':
        pageTitle = postData.quiztitle
        quizData = {
          quiztitle: postData.quiztitle,
          category: postData.category,
          question1: postData.question1,
          answer1:  postData.answer1,
          wronganswer1a: postData.wronganswer1a,
          wronganswer1b: postData.wronganswer1b,
          question2: postData.question2,
          answer2: postData.answer2,
          wronganswer2a: postData.wronganswer2a,
          wronganswer2b: postData.wronganswer2b,
          question3: postData.question3,
          answer3: postData.answer3,
          wronganswer3a: postData.wronganswer3a,
          wronganswer3b: postData.wronganswer3b,
          question4: postData.question4,
          answer4: postData.answer4,
          wronganswer4a: postData.wronganswer4a,
          wronganswer4b: postData.wronganswer4b,
          question5: postData.question5,
          answer5: postData.answer5,
          wronganswer5a: postData.wronganswer5a,
          wronganswer5b: postData.wronganswer5b,
          id: postData.id
        }
        break
      case 'updateQuiz':
        pageTitle = 'What should the quiz say now?'
        formInputs = {
          quiztitle: postData.quiztitle,
          category: postData.category,
          question1: postData.question1,
          answer1:  postData.answer1,
          wronganswer1a: postData.wronganswer1a,
          wronganswer1b: postData.wronganswer1b,
          question2: postData.question2,
          answer2: postData.answer2,
          wronganswer2a: postData.wronganswer2a,
          wronganswer2b: postData.wronganswer2b,
          question3: postData.question3,
          answer3: postData.answer3,
          wronganswer3a: postData.wronganswer3a,
          wronganswer3b: postData.wronganswer3b,
          question4: postData.question4,
          answer4: postData.answer4,
          wronganswer4a: postData.wronganswer4a,
          wronganswer4b: postData.wronganswer4b,
          question5: postData.question5,
          answer5: postData.answer5,
          wronganswer5a: postData.wronganswer5a,
          wronganswer5b: postData.wronganswer5b,
          id: postData.id
        }
          break
        default:
          break
    }
    this.setState({
      view: {
        page: view,
        pageTitle: pageTitle
      },
      formInputs: formInputs,
      quizData: quizData
    })
}

  render() {
    return (
      <div className="outter-container">
        <Header view={this.state.view} />
      <div className="inner-container">
      <Nav handleView={this.handleView}/>
      <Main
        view={this.state.view}
        handleView={this.handleView}
        formInputs={this.state.formInputs}
        quizData={this.state.quizData}
      />
      </div>
      </div>
    )
  }
}

export default App;
