import React, {Component} from 'react'


class Nar extends Component {
  render() {
    return (
      <div className="appnav">
        <div className="tree navigation">
          <ul>
            <li><span className="item active">Example page</span></li>
            <li><span className="item">Standalone example page</span></li>
            <li>
              <span className="title closed item">Group of pages</span>
              <ul>
                <li><a className="item">Example 1</a></li>
                <li><a className="item">Example 2</a></li>
                <li><a className="item">Example 3</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Nar