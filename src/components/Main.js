/* eslint-disable */
import React from 'react'
import Form from './Form.js'
import Post from './Post.js'

let baseUrl = '';
if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://mighty-brook-52509.herokuapp.com/api/quizzes'
} else {
  console.log('this is for heroku');
}

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }

  fetchPosts = () => {
    fetch(`${baseUrl}`)
    .then(data=>data.json())
    .then(jData=> {
      this.setState({posts:jData})
    }).catch(err=>console.log(err))
  }

  componentDidMount() {
    this.fetchPosts()
  }


  render() {
    return (
      <main>
        {this.state.posts.map((postData) => {
          <Post
            key={postData.id}
            postData={postData}
          />
        })}
      </main>
    )
  }

}

export default Main;
