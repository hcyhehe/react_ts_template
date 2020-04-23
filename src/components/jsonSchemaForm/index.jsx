import React, { Component } from 'react';
import Form from "react-jsonschema-form";
import { Input, Select, Radio } from "@ses/eds-ui";
import { v1 as uuidV1 } from 'uuid';

const InputWidget = (props) => {
  //console.log(props);
  const { required, value, placeholder, schema, onChange } = props;
  let type;
  if(schema.type==='string' && !schema.enum) type = 'text';
  if((schema.type==='number' || schema.type==='integer') && !schema.enum) type = 'number';
  return (
    <Input 
      type={type}
      placeholder={placeholder}
      defaultValue={value}
      required={required}
      onChange={(value) => {
        onChange(value)
      }}
    />
  );
};

const SelectWidget = (props) => {
  console.log('222', props);
  const { value, schema, onChange } = props;
  //const key = `sl-${uuidV1()}`;
  const getOptionList = () => {
    return schema.enum.map((item, index) => (
      <Select.Option key={`sl-option-${index}`} title={item} value={item}></Select.Option>
    ));
  }
  return (
    <Select 
      type="single"
      defaultValue={value}
      onChange={(value) => {
        console.log('Select', value);
        onChange(value[0]);
      }}
    >
      {getOptionList()}
    </Select>
  );
};

const RadioWidget = (props) => {
  const { value, onChange } = props;
  const items = [
    {label:'true', value:true},
    {label:'false', value:false}
  ];
  return (
    <Radio 
      name="RadioGroup"
      items={items}
      defaultValue={value}
      onChange={(value) => {
        console.log('radio', value);
        onChange(value);
      }}
    />
  );
};

const widgets = {
  inputWidget: InputWidget,
  selectWidget: SelectWidget,
  radioWidget: RadioWidget
};


const log = (type) => console.log.bind(console, type);

export default class JsonSchemaForm extends Component {
  constructor(props){
    super();
    console.log('props', props);
    const uiSchema = {};
    const properties = props.schema.properties;
    for(let i in properties){
      if(
          (
            properties[i].type === "string" || 
            properties[i].type === "number" || 
            properties[i].type === "integer"
          ) && !properties[i].enum
        ){
        uiSchema[i] = {"ui:widget":"inputWidget"};
      }
      if(properties[i].enum){
        uiSchema[i] = {"ui:widget":"selectWidget"};
      }
      if(properties[i].type === "boolean"){
        uiSchema[i] = {"ui:widget":"radioWidget"};
      }
    }
    this.state = {
      uiSchema
    }
  }
  render(){
    const { schema, formData } = this.props;
    const { uiSchema } = this.state;
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