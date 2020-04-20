import React, { Component } from 'react'



class Home extends Component {
  render () {
    return  (
      <React.Fragment>
        <div className='homeContain'>
          <div className='homePContain'>
            <h2>ABOUT THIS APP :</h2>
            <p>This is a site where you can try out all sorts of quizzes from all different categories with varying levels of difficulty. Enjoy!</p>
            <h2>CREATED BY :</h2>
            <ul>
              <a href="https://github.com/MadMax1776"><li>Max Meacham</li></a>
              <a href="https://github.com/Zilllla"><li>Courtney Zavaleta</li></a>
              <a href="https://github.com/ClaytonONeill"><li>Clayton O'Neill</li></a>
            </ul>
          </div>
        </div>
      </React.Fragment>
    )
  }
}


export default Home;
