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
        wronganswer5b: ''
      }
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
                  <h4 className="wrongAnswer">{this.state.wronganswer1a}</h4>
                  <h4 className="rightAnswer">{this.state.answer1}</h4>
                  <h4 className="wrongAnswer">{this.state.wronganswer1b}</h4>
              <h2>Question 2</h2>
                <h3>{this.state.question2}</h3>
                  <h4 className="rightAnswer">{this.state.answer2}</h4>
                  <h4 className="wrongAnswer">{this.state.wronganswer2a}</h4>
                  <h4 className="wrongAnswer">{this.state.wronganswer2b}</h4>
              <h2>Question 3</h2>
                <h3>{this.state.question3}</h3>
                  <h4 className="wrongAnswer">{this.state.wronganswer3a}</h4>
                  <h4 className="wrongAnswer">{this.state.wronganswer3b}</h4>
                  <h4 className="rightAnswer">{this.state.answer3}</h4>
              <h2>Question 4</h2>
                <h3>{this.state.question4}</h3>
                  <h4 className="rightAnswer">{this.state.answer4}</h4>
                  <h4 className="wrongAnswer">{this.state.wronganswer4a}</h4>
                  <h4 className="wrongAnswer">{this.state.wronganswer4b}</h4>
              <h2>Question 5</h2>
                <h3>{this.state.question5}</h3>
                  <h4 className="wrongAnswer">{this.state.wronganswer5a}</h4>
                  <h4 className="wrongAnswer">{this.state.wronganswer5b}</h4>
                  <h4 className="rightAnswer">{this.state.answer5}</h4>
          </div>
        </React.Fragment>
      )
    }
  }


export default ShowQuiz;
