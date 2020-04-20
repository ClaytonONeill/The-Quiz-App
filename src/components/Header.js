import React from 'react'

class Header extends React.Component {
  render() {
    return(
      <header>
        <div>
        {this.props.view.page === "home" ? <h1>THE QUIZ APP!</h1> : <h1 style={{color: '#5ABF86'}}>THE QUIZ APP!</h1> }
        </div>
        <div className="navBottom">
        </div>
      </header>
    )
  }
}

export default Header;
