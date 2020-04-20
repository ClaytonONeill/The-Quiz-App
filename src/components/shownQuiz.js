import React, { Component } from 'react'

class ShowQuiz extends Component  {
    constructor() {
      super()
      this.state = {
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
        wronganswer5b: '',
        changes: {
          right1: false,
          wrong1: false,
          right2: false,
          wrong2: false,
          right3: false,
          wrong3: false,
          right4: false,
          wrong4: false,
          right5: false,
          wrong5: false,
        }
      }
    }


      answerChange1 = () => {
        this.setState({
          right1: true,
          wrong1: true
        })
      }

      answerChange2 = () => {
        this.setState({
          right2: true,
          wrong2: true
        })
      }

      answerChange3 = () => {
        this.setState({
          right3: true,
          wrong3: true
        })
      }

      answerChange4 = () => {
        this.setState({
          right4: true,
          wrong4: true
        })
      }

      answerChange5 = () => {
        this.setState({
          right5: true,
          wrong5: true
        })
      }


    componentDidMount() {
      this.setState({
        quiztitle: this.props.quizData.quiztitle,
        category: this.props.quizData.category,
        question1: this.props.quizData.question1,
        answer1: this.props.quizData.answer1,
        wronganswer1a: this.props.quizData.wronganswer1a,
        wronganswer1b: this.props.quizData.wronganswer1b,
        question2: this.props.quizData.question2,
        answer2: this.props.quizData.answer2,
        wronganswer2a: this.props.quizData.wronganswer2a,
        wronganswer2b: this.props.quizData.wronganswer2b,
        question3: this.props.quizData.question3,
        answer3: this.props.quizData.answer3,
        wronganswer3a: this.props.quizData.wronganswer3a,
        wronganswer3b: this.props.quizData.wronganswer3b,
        question4: this.props.quizData.question4,
        answer4: this.props.quizData.answer4,
        wronganswer4a: this.props.quizData.wronganswer4a,
        wronganswer4b: this.props.quizData.wronganswer4b,
        question5: this.props.quizData.question5,
        answer5: this.props.quizData.answer5,
        wronganswer5a: this.props.quizData.wronganswer5a,
        wronganswer5b: this.props.quizData.wronganswer5b,
        id: this.props.quizData.id
      })
    }

    render () {
      return (
        <React.Fragment>
          <div className="showQuizContain">
              <h2>Question 1</h2>
                <h3>{this.state.question1}</h3>
                  <h4 id={this.state.wrong1 ? "wrongAnswer" : null} onClick={this.answerChange1}>{this.state.wronganswer1a}</h4>
                  <h4 id={this.state.right1 ? "rightAnswer" : null} onClick={this.answerChange1}>{this.state.answer1}</h4>
                  <h4 id={this.state.wrong1 ? "wrongAnswer" : null} onClick={this.answerChange1}>{this.state.wronganswer1b}</h4>
              <h2>Question 2</h2>
                <h3>{this.state.question2}</h3>
                  <h4 id={this.state.right2 ? "rightAnswer" : null} onClick={this.answerChange2}>{this.state.answer2}</h4>
                  <h4 id={this.state.wrong2 ? "wrongAnswer" : null} onClick={this.answerChange2}>{this.state.wronganswer2a}</h4>
                  <h4 id={this.state.wrong2 ? "wrongAnswer" : null} onClick={this.answerChange2}>{this.state.wronganswer2b}</h4>
              <h2>Question 3</h2>
                <h3>{this.state.question3}</h3>
                  <h4 id={this.state.wrong3 ? "wrongAnswer" : null} onClick={this.answerChange3}>{this.state.wronganswer3a}</h4>
                  <h4 id={this.state.wrong3 ? "wrongAnswer" : null} onClick={this.answerChange3}>{this.state.wronganswer3b}</h4>
                  <h4 id={this.state.right3 ? "rightAnswer" : null} onClick={this.answerChange3}>{this.state.answer3}</h4>
              <h2>Question 4</h2>
                <h3>{this.state.question4}</h3>
                  <h4 id={this.state.right4 ? "rightAnswer" : null} onClick={this.answerChange4}>{this.state.answer4}</h4>
                  <h4 id={this.state.wrong4 ? "wrongAnswer" : null} onClick={this.answerChange4}>{this.state.wronganswer4a}</h4>
                  <h4 id={this.state.wrong4 ? "wrongAnswer" : null} onClick={this.answerChange4}>{this.state.wronganswer4b}</h4>
              <h2>Question 5</h2>
                <h3>{this.state.question5}</h3>
                  <h4 id={this.state.wrong5 ? "wrongAnswer" : null} onClick={this.answerChange5}>{this.state.wronganswer5a}</h4>
                  <h4 id={this.state.wrong5 ? "wrongAnswer" : null} onClick={this.answerChange5}>{this.state.wronganswer5b}</h4>
                  <h4 id={this.state.right5 ? "rightAnswer" : null} onClick={this.answerChange5}>{this.state.answer5}</h4>
          </div>
        </React.Fragment>
      )
    }
  }


export default ShowQuiz;
