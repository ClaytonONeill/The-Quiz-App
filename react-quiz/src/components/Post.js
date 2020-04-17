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
            <li onClick={() => {this.props.handleView('editPost', this.props.postData)}}>edit post</li>
            <li onClick={() => {this.props.handleDelete(this.props.postData.id)}}>delete post</li>
          </ul>
      </div>
      </article>
    )
  }
}
export default Post;
