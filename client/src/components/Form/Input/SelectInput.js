import React from "react";
import "./Input.css";

const SelectInput = (props) =>
    <div className="input-group col-xs-12 myInputGroup">
        <label htmlFor={props.id}>{props.label}</label>
        <select id={props.id} className="form-control" required={props.required}>
            {props.options.map(option => {
                return <option key={`${props.id}_${option}`} value={option}>{option}</option>
            })}
        </select>
    </div>;

export default SelectInput;