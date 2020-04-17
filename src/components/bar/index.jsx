import React, {Component} from 'react'


class Bar extends Component {
  render() {
    return (
      <nav className="appbar">
        <div className="actions-left">
          <div className="item">
            <i className="navigation-toggle closed"></i>
          </div>
          <div className="menu-anchor open-menu">Menu</div>
          <div className="title open-menu">
            <span className="title-name">Example page</span>
            <span className="subtitle">Page subtitle</span>
          </div>
        </div>
        <div className="actions-right"></div>
      </nav>
    )
  }
}

export default Bar