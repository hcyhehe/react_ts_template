import React, { Component } from 'react';
import Form from "react-jsonschema-form";
import { Input, Radio } from "@ses/eds-ui";

const InputIntWidget = (props) => {
  const { value } = props;
  return (
    <Input 
      type="number"
      placeholder="placeholder"
      defaultValue={value}
    />
  );
};

const InputTextWidget = (props) => {
  const { value } = props;
  return (
    <Input 
      type="text"
      placeholder="placeholder"
      defaultValue={value}
    />
  );
};

const radioItems = [
  {id:'1', label:'Male', value:1},
  {id:'2', label:'Female', value:2}
];
const RadioWidget = (props) => {
  const { value } = props;
  return (
    <Radio 
      name="RadioGroup"
      items={radioItems}
      defaultValue={value}
    />
  );
};

const widgets = {
  inputTextWidget: InputTextWidget,
  inputIntWidget: InputIntWidget,
  radioWidget: RadioWidget
};

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
      "default": "Chuck"
    },
    "age": {
      "type": "integer",
      "title": "Age"
    },
    "gender": {
      "type": "boolean",
      "title": "Gender"
    }
  }
};

const uiSchema = {
  "name": {
    "ui:widget": "inputTextWidget",
    "ui:autofocus": true,
    "ui:emptyValue": "",
    "ui:help": "Hint: Make it strong!"
  },
  "age": {
    "ui:widget": "inputIntWidget",
    "ui:title": "Age of person",
    "ui:description": "(earthian year)"
  },
  "gender": {
    "ui:widget": "radioWidget",
  }
};

const formData = {
  "name": "William",
  "age": 45,
  "gender": 1
};

export default class FormTest extends Component {
  render(){
    return(
      <div className="formTest light">
        <Form
          schema={schema}
          uiSchema={uiSchema}
          formData={formData}
          widgets={widgets}
        />
      </div>
    );
  }
}