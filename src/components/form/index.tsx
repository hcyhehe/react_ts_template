import React, { Component } from 'react';
import './index.less'

interface FormProps {
  
}

interface FormState {

}

export default class Form extends Component<FormProps, FormState> {
  constructor(props: FormProps){
    super(props);
  }
  render(){
    return(
      <div className="formOne">
        formOne
      </div>
    );
  }
}