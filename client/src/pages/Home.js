import React, {Component} from "react";
import Form from "../components/Form/Form"
import API from "../utils/API";

class Home extends Component{
  constructor(){
    super()
    this.state = {
      results : []
    }
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
  }

  handleFormSubmission(searchTerm, startYear, endYear, numberOfResultsName){
    console.log("handling form submission");
    const that = this;
    API.search(searchTerm, startYear, endYear, numberOfResultsName).then(function(data){
      console.log(data);
      that.setState({
        "results" : data
      })
    }).catch(function(err){
      that.setState({
        "results" : []
      })
      console.log(err);
    })
  }

  render(){
    return( 
      <div>
        <div className="container-fluid jumbotron">
          <div className="container">
            <h1>New York Times Search</h1>
          </div>
        </div>
        <div className="container">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h2>Search Parameters</h2>
            </div>
            <div className="panel-body">
              <Form handleFormSubmission={this.handleFormSubmission}></Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
