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

  handleUpdate = (updateData) => {
    fetch(`${baseUrl}/${updateData.id}`, {
      body: JSON.stringify(updateData),
      method: 'PUT',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
      .then(updatedPost => {
        // switch back to the home view after editing a post
        this.props.handleView('home')
        // for simplicity's sake, we'll just make an extra AJAX call to automatically load the post this time!
        // if you're up for a challenge though, try and see if you can figure out how to do it without an extra call
        this.fetchPosts()
      })
      .catch(err => console.log(err))
  }

  handleDelete = (id) => {
    fetch(`${baseUrl}/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
        .then(json => {
         this.fetchPosts()
       })
      //   this.setState(prevState => {
      //   const posts = prevState.posts.filter(post => post.id !== id)
      //   return { posts }
      // })
      // })
      .catch(err => console.log(err))
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
            handleDelete={this.handleDelete}
          /> ))
          : <Form
              handleCreate={this.handleCreate}
              handleUpdate={this.handleUpdate}
              formInputs={this.props.formInputs}
              view={this.props.view}
            />
      }
      </main>
    )
  }

}

export default Main;
