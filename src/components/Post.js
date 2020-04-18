import React from 'react'

class Post extends React.Component {
  render() {
    return (
        <article>
      <div className='postContain'>
        <h2 onClick={ () => {this.props.handleView('showQuiz', this.props.postData)}}>{this.props.postData.quiztitle}</h2>
        <h3>Category: {this.props.postData.category}</h3>
      </div>
      <div className="post-options">
          <ul>
            <li id='post-update' onClick={() => {this.props.handleView('updateQuiz', this.props.postData)}}>Edit Quiz</li>
            <li id='post-delete' onClick={() => {this.props.handleDelete(this.props.postData.id)}}>Delete Quiz</li>
          </ul>
      </div>
      </article>
    )
  }
}
export default Post;
