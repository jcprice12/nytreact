import React, {Component} from "react";
import Form from "../components/Form/Form"
import ArticleList from "../components/ArticleList/ArticleList"
import API from "../utils/API";

class Home extends Component{
  constructor(){
    super()
    this.state = {
      results : []
    }
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
    this.saveArticle = this.saveArticle.bind(this);
  }

  handleFormSubmission(searchTerm, startYear, endYear, numberOfResultsName){
    console.log("handling form submission");
    const that = this;
    API.search(searchTerm, startYear, endYear).then(function(resp){
      let results = [];
      for(var i = 0; i < numberOfResultsName; i++){
        let art = resp.data.response.docs[i];
        let article = {
          "title" : art.headline.main,
          "snippet" : art.snippet,
          "date" : art.pub_date,
          "url" : art.web_url,
          "_id" : art._id,
        }
        results.push(article);
      }
      console.log(results);
      that.setState({
        "results" : results
      })
    }).catch(function(err){
      that.setState({
        "results" : []
      })
      console.log(err);
    })
  }

  saveArticle(article){
    let that = this;
    API.saveArticle(article).then(function(res){
      console.log(res);
      if(res.data.hasOwnProperty("exists")){
        alert("Unable to save, article already exists in the DB");
      } else {
        let newResults = that.state.results.filter(myArticle => {
          return (article._id !== myArticle._id);
        });
        that.setState({
          "results" : newResults 
        });
      }
    }).catch(function(err){
      console.log(err);
      alert("Error Occurred. Could not save article");
    });
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
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h2>Results</h2>
            </div>
            <div className="panel-body">
              <ArticleList saveArticle={this.saveArticle} articles={this.state.results}></ArticleList>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
