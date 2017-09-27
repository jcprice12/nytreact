import React, {Component} from "react";
import NormalInput from "./Input/NormalInput";
import SelectInput from "./Input/SelectInput";
import "./Form.css"

class Form extends Component{
    constructor(){
        super();  
        this.state = {
            searchTerm : "",
            startYear : "",
            endYear : "",
            numberOfResultsName : ""
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmission = this.handleFormSubmission.bind(this);
        this.handleClear = this.handleClear.bind(this);
    }

    handleInputChange(event) {
        // Getting the value and name of the input which triggered the change
        const value = event.target.value;
        const name = event.target.name;
        // Updating the input's state
        this.setState({
            [name]: value
        });
    };

    handleFormSubmission(event){
        event.preventDefault();
    }

    handleClear(event){
        event.preventDefault();
        this.setState({
            searchTerm: "",
            startYear : "",
            endYear : "",
            numberOfResultsSelect : ""
        });
    }

    render(){
        return (
            <form className="container-fluid">
                <NormalInput value={this.state.searchTerm} onChange={this.handleInputChange} name="searchTerm" id="searchTermInput" label="Search Term" type="text" required={true} placeholder="National Football League"></NormalInput>
                <SelectInput value={this.state.numberOfResultsName} onChange={this.handleInputChange} name="numberOfResultsName" id="numberOfResultsSelect" label="Number of Records to Retrieve" required={true} options={[5,10,15]}></SelectInput>
                <NormalInput value={this.state.startYear} onChange={this.handleInputChange} name="startYear" id="startYearInput" label="Start Year (Optional)" type="number" required={false} placeholder="1975"></NormalInput>
                <NormalInput value={this.state.endYear} onChange={this.handleInputChange} name="endYear" id="endYearInput" label="End Year (Optional)" type="number" required={false} placeholder="2017"></NormalInput>
                <button onClick={this.handleFormSubmission} className="btn btn-primary col-xs-5 col-sm-2 myButton" type="submit">
                    <span className="glyphicon glyphicon-ok" aria-hidden="true"></span> Submit
                </button>
                <button onClick={this.handleClear} className="btn btn-primary col-xs-5 col-sm-2 myButton">
                    <span className="glyphicon glyphicon-trash" aria-hidden="true"></span> Clear
                </button>
            </form>
        );
    }
}
export default Form;