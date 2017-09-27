import React from "react";
import NormalInput from "./Input/NormalInput";
import SelectInput from "./Input/SelectInput";
import "./Form.css"
const Form = () =>
    <form className="container-fluid">
        <NormalInput id="searchTermInput" label="Search Term" type="text" required={true} placeholder="National Football League"></NormalInput>
        <SelectInput id="numberOfResultsSelect" label="Number of Records to Retrieve" required={true} options={[5,10,15]}></SelectInput>
        <NormalInput id="searchTermInput" label="Start Year (Optional)" type="number" required={false} placeholder="1975"></NormalInput>
        <NormalInput id="searchTermInput" label="End Year (Optional)" type="number" required={false} placeholder="2017"></NormalInput>
        <button className="btn btn-primary col-xs-5 col-sm-2 myButton" type="submit">
            <span className="glyphicon glyphicon-ok" aria-hidden="true"></span> Submit
        </button>
        <button className="btn btn-primary col-xs-5 col-sm-2 myButton">
            <span className="glyphicon glyphicon-trash" aria-hidden="true"></span> Clear
        </button>
    </form>;

export default Form;