import React from 'react'

class Post extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.postData.category}</h1>
      </div>
    )
  }


}

export default Post;
