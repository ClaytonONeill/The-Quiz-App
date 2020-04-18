import React from 'react'

class Post extends React.Component {
  render() {
    return (
        <article>
      <div className='postContain'>
        <h2>{this.props.postData.quiztitle}</h2>
      </div>
      <div className="post-options">
          <ul>
            <li onClick={() => {this.props.handleView('updateQuiz', this.props.postData)}}>edit quiz</li>
            <li onClick={() => {this.props.handleDelete(this.props.postData.id)}}>delete quiz</li>
          </ul>
      </div>
      </article>
    )
  }
}
export default Post;
