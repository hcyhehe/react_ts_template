import React, {Component} from 'react'
import Header from '../../components/header/index'
import Bar from '../../components/bar/index'

class Normal extends Component {
  render() {
    return (
      <div className="light">
        <Header />
        <main>
          <div className="app">
            <Bar />
            <div className="appbody">
              <div className="appcontent">
                <div className="row row-panel">
                  <div className="tile sm-12">
                    <div className="content">
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default Normal
