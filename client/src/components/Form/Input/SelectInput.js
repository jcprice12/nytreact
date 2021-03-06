import React from "react";
import "./Input.css";

const SelectInput = (props) =>
    <div className="input-group col-xs-12 myInputGroup">
        <label htmlFor={props.id}>{props.label}</label>
        <select 
            name={props.name}
            onChange={props.onChange}
            value={props.value}
            id={props.id} 
            className={props.className ? props.className : "form-control"} 
            required={props.required}>
                {props.options.map(option => {
                    return <option key={`${props.id}_${option}`} value={option}>{option}</option>
                })}
        </select>
    </div>;

export default SelectInput;