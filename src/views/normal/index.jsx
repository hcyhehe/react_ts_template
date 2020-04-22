import React, {Component} from 'react';
import Header from '../../components/header/index';
import Bar from '../../components/bar/index';
import Form from './../../components/jsonSchemaForm/index';
import './index.less';

const schema = {
  "title": "A registration form",
  "description": "A simple form example.",
  "type": "object",
  "required": [
    "name", "age"
  ],
  "properties": {
    "name": {
      "type": "string",
      "title": "Name",
      "description": "This is Name",
      "default": "Chuck",
    },
    "age": {
      "type": "integer",
      "title": "Age",
      "description": "This is Age",
      "default": 18
    },
    "gender": {
      "type": "string",
      "enum": ['Male', 'Female'],
      "title": "Gender",
      "description": "This is Gender",
    },
    "atHome": {
      "type": "boolean",
      "title": "atHome",
      "description": "This is atHome",
      "default": false
    },
  }
};

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
                        <Form
                          schema={schema} 
                        />
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
