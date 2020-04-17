import React, {Component} from 'react';
import Header from '../../components/header/index';
import Bar from '../../components/bar/index';
import './index.less';

class Normal extends Component {
  render(){
    return(
      <div className="light">
        <Header />
        <main>
          <div className="app">
            <Bar />
            <div className="appbody">
              <div className="appcontent">
                <div className="row row-panel">
                  <div className="tile sm-12">
                    <div className="content drag-panel">
                      <div className="left-panel">
                        <div className="header">
                          <div className="title">Functions</div>
                          <i className="icon icon-cross"></i>
                        </div>
                        <div className="list">

                        </div>
                      </div>
                      <div className="center-panel">
                        <i className="icon icon-sidemenu-left-close"></i>
                      </div>
                      <div className="right-panel">

                      </div>
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
