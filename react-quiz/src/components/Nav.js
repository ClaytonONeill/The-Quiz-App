import React from 'react'

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li onClick={() => {this.props.handleView('home')}}>Home</li>
          <li onClick={() => {this.props.handleView('viewQuizzes')}}>Browse Quizzes</li>
          <li onClick={() => {this.props.handleView('makeQuiz')}}>Create Quiz</li>
          <li onClick={() => {this.props.handleView('updateQuiz')}}>Update Quiz</li>
          <li onClick={() => {this.props.handleView('deleteQuiz')}}>Delete Quiz</li>
        </ul>
      </nav>
    )
  }
}

export default Nav;
