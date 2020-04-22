import React, { Component } from 'react';
import Form from "react-jsonschema-form";
import { Input, Radio } from "@ses/eds-ui";

const InputWidget = (props) => {
  console.log(props);
  const { required, value, placeholder, schema, onChange } = props;
  let type;
  if(schema.type=='string' && !schema.enum) type = 'text';
  if((schema.type=='number' || schema.type=='integer') && !schema.enum) type = 'number';
  return (
    <Input 
      type={type}
      placeholder={placeholder}
      defaultValue={value}
      required={required}
      onChange={(value) => onChange(value)}
    />
  );
};

const RadioWidget = (props) => {
  const { value, schema, onChange } = props;
  const items = [];
  schema.enum.map((item) => {
    items.push({label:item, value:item});
  });
  return (
    <Radio 
      name="RadioGroup"
      items={items}
      defaultValue={value}
      onChange={(value) => onChange(value)}
    />
  );
};

const widgets = {
  inputWidget: InputWidget,
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
      "type": "number",
      "enum": [1,2],
      "title": "Gender"
    }
  }
};

const uiSchema = {
  "name": {
    "ui:widget": "inputWidget",
    "ui:autofocus": true,
    "ui:emptyValue": "",
    "ui:help": "Hint: Make it strong!"
  },
  "age": {
    "ui:widget": "inputWidget",
    "ui:title": "Age of person",
    "ui:description": "(earthian year)"
  },
  "gender": {
    "ui:widget": "radioWidget"
  }
};

const formData = {};  //use to edit


const log = (type) => console.log.bind(console, type);

export default class FormTest extends Component {
  constructor(props){
    super();
    console.log('111111', props);
  }
  render(){
    return(
      <div className="formTest light">
        <Form
          schema={schema}
          uiSchema={uiSchema}
          formData={formData}
          widgets={widgets}
          onChange={log("changed")}
          onSubmit={log("submitted")}
          onError={log("errors")}
        />
      </div>
    );
  }
}