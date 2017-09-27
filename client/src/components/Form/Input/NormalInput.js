import React from "react";
import "./Input.css";

const NormalInput = (props) =>
    <div className="input-group col-xs-12 myInputGroup">
        <label htmlFor={props.id}>{props.label}</label>
        <input 
            onChange={props.onChange}
            value={props.value} 
            name={props.name}
            id={props.id} 
            type={props.type} 
            className="form-control" 
            placeholder={props.placeholder} 
            required={props.required}
        />
    </div>;

export default NormalInput;