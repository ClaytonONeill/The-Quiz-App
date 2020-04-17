import React from 'react'

class Post extends React.Component {
  render() {
    return (
      <div className='postContain'>
        <h2>{this.props.postData.quiztitle}</h2>
      </div>
    )
  }
}
export default Post;
