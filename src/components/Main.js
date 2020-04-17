/* eslint-disable */
import React from 'react'
import Form from './Form.js'
import Post from './Post.js'
import Home from './Home.js'

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

  handleCreate = (createData) => {
    fetch(`${baseUrl}`, {
      body: JSON.stringify(createData),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    }).then(createdPost => {
      return createdPost.json()
    }).then(jsonedPost => {
      this.props.handleView('home')
      this.setState(prevState => {
        prevState.posts = jsonedPost
        return {
          posts: prevState.posts
        }
      })
    }).catch(err => console.log(err))
  }

  componentDidMount() {
    this.fetchPosts()
  }


  render() {
    return (
      <main>
      <h1>{this.props.view.pageTitle}</h1>
        {
          this.props.view.page === 'home' ?
          <Home />
          : this.props.view.page ==='viewQuizzes' ? this.state.posts.map((postData) => (
          <Post
            key={postData.id}
            postData={postData}
            handleView={this.props.handleView}
          /> ))
          : <Form
              handleCreate={this.handleCreate}
              fromInputs={this.props.formInputs}
              view={this.props.view}
            />
      }
      </main>
    )
  }

}

export default Main;
