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

  //
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
      <form>
      <div className="forms">
      Title:
        <input className="formTitle" type="text" placeholder="Title of Quiz" value={this.state.quiztitle}/><br/>
      Category:
        <input className="formCategory" type="text" placeholder="Category" value={this.state.category}/><br/>

      <div className="q1">
      Question 1:
          <input type="text" placeholder="Question 1" value={this.state.question1}/><br/>
      Correct Answer:
          <input type="text" placeholder="Correct Answer" value={this.state.answer1}/><br/>
      Wrong Answer:
          <input type="text" placeholder="Wrong Answer" value={this.state.wronganswer1a}/><br/>
      Wrong Answer:
          <input type="text" placeholder="Wrong Answer" value={this.state.wronganswer1b}/><br/>
      </div>

      <div className="q2">
      Question 2:
          <input type="text" placeholder="Question 2" value={this.state.question2}/><br/>
      Correct Answer:
          <input type="text" placeholder="Correct Answer" value={this.state.answer2}/><br/>
      Wrong Answer:
          <input type="text" placeholder="Wrong Answer" value={this.state.wronganswer2a}/><br/>
      Wrong Answer:
          <input type="text" placeholder="Wrong Answer" value={this.state.wronganswer2b}/><br/>
      </div>

      <div className="q3">
      Question 3:
          <input type="text" placeholder="Question 3" value={this.state.question3}/><br/>
      Correct Answer:
              <input type="text" placeholder="Correct Answer" value={this.state.answer3}/><br/>
      Wrong Answer:
          <input type="text" placeholder="Wrong Answer" value={this.state.wronganswer3a}/><br/>
      Wrong Answer:
          <input type="text" placeholder="Wrong Answer" value={this.state.wronganswer3b}/><br/>
      </div>

      <div className="q4">
      Question 4:
          <input type="text" placeholder="Question 4" value={this.state.question4}/><br/>
      Correct Answer:
          <input type="text" placeholder="Correct Answer" value={this.state.answer4}/><br/>
      Wrong Answer:
          <input type="text" placeholder="Wrong Answer" value={this.state.wronganswer4a}/><br/>
      Wrong Answer:
          <input type="text" placeholder="Wrong Answer" value={this.state.wronganswer4b}/><br/>
      </div>

      <div className="q5">
      Question 5:
          <input type="text" placeholder="Question 5" value={this.state.question5}/><br/>
      Correct Answer:
          <input type="text" placeholder="Correct Answer" value={this.state.answer5}/><br/>
      Wrong Answer:
          <input type="text" placeholder="Wrong Answer" value={this.state.wronganswer5a}/><br/>
      Wrong Answer:
          <input type="text" placeholder="Wrong Answer" value={this.state.wronganswer5b}/><br/>
      </div>

        <input type="submit" />
      </div>
      </form>
    )
  }

}

export default Form;
