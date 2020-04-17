import React, {Component} from 'react'


class Header extends Component {
  render() {
    return (
      <header className="sysbar">
        <div className="items-container">
          <div className="item">
            <i className="icon icon-econ"></i>
            <span className="product">Ericsson Product Name</span>
            <span className="acronym">EPN</span>
          </div>
        </div>
        <div className="items-container">
          <div className="item notification-log-trigger">
            <span className="notification-log-number"></span>
            <i className="icon icon-notification"></i>
            <i className="icon icon-notification-ring"></i>
          </div>
          <div className="item hover settings-trigger">
            <i className="icon icon-profile"></i>
            <span>Username</span>
          </div>
        </div>
      </header>
    )
  }
}

export default Header