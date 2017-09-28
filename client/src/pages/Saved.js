import React, {Component} from "react";
import ArticleList from "../components/ArticleList/ArticleList"
import API from "../utils/API";

class Saved extends Component{
  constructor(){
    super();
    this.state = {
      articles : []
    };
    this.getArticles = this.getArticles.bind(this);
    this.deleteArticle = this.deleteArticle.bind(this);
  }

  componentDidMount(){
    this.getArticles();
  }

  getArticles(){
    let that = this;
    API.getSavedArticles().then(function(res){
      console.log(res);
      that.setState({
        "articles" : res.data
      });
    }).catch(function(err){
      console.log(err);
      alert(err);
    });
  }

  deleteArticle(id){
    let that = this;
    API.deleteArticle(id).then(function(res){
      console.log(res);
      let newArticles = that.state.articles.filter(myArticle => {
        return (id !== myArticle._id);
      });
      that.setState({
        "articles" : newArticles 
      });
    }).catch(function(err){
      console.log(err);
      alert("Error Occurred. Could not delete article");
    });
  }

  render(){
    return(
      <div>
        <div className="container-fluid jumbotron">
          <div className="container">
            <h1>Saved Articles</h1>
          </div>
        </div>
        <div className="container">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h2>Articles</h2>
            </div>
            <div className="panel-body">
              <ArticleList deleteArticle={this.deleteArticle} articles={this.state.articles}></ArticleList>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default Saved;
