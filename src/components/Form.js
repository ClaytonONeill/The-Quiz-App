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

  render() {
    return (
      <form>
      Title:
        <input type="text" placeholder="Title of Quiz" value={this.state.quiztitle}/><br/>
      Category:
        <input type="text" placeholder="Category" value={this.state.category}/><br/>

      Question 1:
          <input type="text" placeholder="Question 1" value={this.state.question1}/><br/>
      Correct Answer 1:
          <input type="text" placeholder="Correct Answer" value={this.state.answer1}/><br/>
      Wrong Answer:
          <input type="text" placeholder="Wrong Answer" value={this.state.wronganswer1a}/><br/>
      Wrong Answer:
          <input type="text" placeholder="Wrong Answer" value={this.state.wronganswer1b}/><br/>

      Question 2:
          <input type="text" placeholder="Question 2" value={this.state.question2}/><br/>
      Correct Answer 2:
          <input type="text" placeholder="Correct Answer" value={this.state.answer2}/><br/>
      Wrong Answer:
          <input type="text" placeholder="Wrong Answer" value={this.state.wronganswer2a}/><br/>
      Wrong Answer:
          <input type="text" placeholder="Wrong Answer" value={this.state.wronganswer2b}/><br/>

      Question 3:
          <input type="text" placeholder="Question 3" value={this.state.question3}/><br/>
      Correct Answer 3:
              <input type="text" placeholder="Correct Answer" value={this.state.answer3}/><br/>
      Wrong Answer:
          <input type="text" placeholder="Wrong Answer" value={this.state.wronganswer3a}/><br/>
      Wrong Answer:
          <input type="text" placeholder="Wrong Answer" value={this.state.wronganswer3b}/><br/>

      Question 4:
          <input type="text" placeholder="Question 4" value={this.state.question4}/><br/>
      Correct Answer 4:
          <input type="text" placeholder="Correct Answer" value={this.state.answer4}/><br/>
      Wrong Answer:
          <input type="text" placeholder="Wrong Answer" value={this.state.wronganswer4a}/><br/>
      Wrong Answer:
          <input type="text" placeholder="Wrong Answer" value={this.state.wronganswer4b}/><br/>

      Question 5:
          <input type="text" placeholder="Question 5" value={this.state.question5}/><br/>
      Correct Answer 5:
          <input type="text" placeholder="Correct Answer" value={this.state.answer5}/><br/>
      Wrong Answer:
          <input type="text" placeholder="Wrong Answer" value={this.state.wronganswer5a}/><br/>
      Wrong Answer:
          <input type="text" placeholder="Wrong Answer" value={this.state.wronganswer5b}/><br/>

        <input type="submit" />

      </form>
    )
  }

}

export default Form;
