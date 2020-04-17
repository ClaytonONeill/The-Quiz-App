import React from 'react'

class Form extends React.Component {
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

    handleChange = (event) => {
      this.setState({[event.target.id] : event.target.value})
    }

    handleSubmit = (event) => {
      event.preventDefault()
      this.props.handleCreate(this.state)
    }

  // componentDidMount() {
  //   this.setState({
  //     id: this.props.formInputs.id,
  //     quiztitle: this.props.formInputs.quiztitle,
  //     category: this.props.formInputs.category,
  //     question1: this.props.formInputs.question1,
  //     answer1: this.props.formInputs.answer1,
  //     wronganswer1a: this.props.formInputs.wronganswer1a,
  //     wronganswer1b: this.props.formInputs.wronganswer1b,
  //     question2: this.props.formInputs.question2,
  //     answer2: this.props.formInputs.answer2,
  //     wronganswer2a: this.props.formInputs.wronganswer2a,
  //     wronganswer2b: this.props.formInputs.wronganswer2b,
  //     question3: this.props.formInputs.question3,
  //     answer3: this.props.formInputs.answer3,
  //     wronganswer3a: this.props.formInputs.wronganswer3a,
  //     wronganswer3b: this.props.formInputs.wronganswer3b,
  //     question4: this.props.formInputs.question4,
  //     answer4: this.props.formInputs.answer4,
  //     wronganswer4a: this.props.formInputs.wronganswer4a,
  //     wronganswer4b: this.props.formInputs.wronganswer4b,
  //     question5: this.props.formInputs.question5,
  //     answer5: this.props.formInputs.answer5,
  //     wronganswer5a: this.props.formInputs.wronganswer5a,
  //     wronganswer5b: this.props.formInputs.wronganswer5b
  //   })
  // }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <div className="forms">
      Title:
        <input className="formTitle" type="text" placeholder="Title of Quiz" id="quiztitle"  value={this.state.quiztitle} onChange={this.handleChange}/><br/>
      Category:
        <input className="formCategory" type="text" placeholder="Category" id="category" value={this.state.category} onChange={this.handleChange}/><br/>

      <div className="q1">
      Question 1:
          <input type="text" placeholder="Question 1" id="question1" value={this.state.question1} onChange={this.handleChange}/><br/>
      Correct Answer:
          <input type="text" placeholder="Correct Answer" id="answer1" value={this.state.answer1} onChange={this.handleChange}/><br/>
      Wrong Answer:
          <input type="text" placeholder="Wrong Answer" id="wronganswer1a" value={this.state.wronganswer1a} onChange={this.handleChange}/><br/>
      Wrong Answer:
          <input type="text" placeholder="Wrong Answer" id="wronganswer1b" value={this.state.wronganswer1b} onChange={this.handleChange}/><br/>
      </div>

      <div className="q2">
      Question 2:
          <input type="text" placeholder="Question 2" id="question2" value={this.state.question2} onChange={this.handleChange}/><br/>
      Correct Answer:
          <input type="text" placeholder="Correct Answer" id="answer2" value={this.state.answer2} onChange={this.handleChange}/><br/>
      Wrong Answer:
          <input type="text" placeholder="Wrong Answer" id="wronganswer2a" value={this.state.wronganswer2a} onChange={this.handleChange}/><br/>
      Wrong Answer:
          <input type="text" placeholder="Wrong Answer" id="wronganswer2b" value={this.state.wronganswer2b} onChange={this.handleChange}/><br/>
      </div>

      <div className="q3">
      Question 3:
          <input type="text" placeholder="Question 3" id="question3" value={this.state.question3} onChange={this.handleChange}/><br/>
      Correct Answer:
              <input type="text" placeholder="Correct Answer" id="answer3" value={this.state.answer3} onChange={this.handleChange}/><br/>
      Wrong Answer:
          <input type="text" placeholder="Wrong Answer" id="wronganswer3a" value={this.state.wronganswer3a} onChange={this.handleChange}/><br/>
      Wrong Answer:
          <input type="text" placeholder="Wrong Answer" id="wronganswer3b" value={this.state.wronganswer3b} onChange={this.handleChange}/><br/>
      </div>

      <div className="q4">
      Question 4:
          <input type="text" placeholder="Question 4" id="question4" value={this.state.question4} onChange={this.handleChange}/><br/>
      Correct Answer:
          <input type="text" placeholder="Correct Answer" id="answer4" value={this.state.answer4} onChange={this.handleChange}/><br/>
      Wrong Answer:
          <input type="text" placeholder="Wrong Answer" id="wronganswer4a" value={this.state.wronganswer4a} onChange={this.handleChange}/><br/>
      Wrong Answer:
          <input type="text" placeholder="Wrong Answer" id="wronganswer4b" value={this.state.wronganswer4b} onChange={this.handleChange}/><br/>
      </div>

      <div className="q5">
      Question 5:
          <input type="text" placeholder="Question 5" id="question5" value={this.state.question5} onChange={this.handleChange}/><br/>
      Correct Answer:
          <input type="text" placeholder="Correct Answer" id="answer5" value={this.state.answer5} onChange={this.handleChange}/><br/>
      Wrong Answer:
          <input type="text" placeholder="Wrong Answer" id="wronganswer5a" value={this.state.wronganswer5a} onChange={this.handleChange}/><br/>
      Wrong Answer:
          <input type="text" placeholder="Wrong Answer" id="wronganswer5b" value={this.state.wronganswer5b} onChange={this.handleChange}/><br/>
      </div>

        <input type="submit" />
      </div>
      </form>
    )
  }

}

export default Form;
