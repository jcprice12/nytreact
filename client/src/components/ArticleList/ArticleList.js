import React, {Component} from "react";
import Article from "./Article/Article";
import NoResults from "../NoResults/NoResults"
import "./ArticleList.css"

class ArticleList extends Component{
    constructor(props){
        super();  
        this.state = {
            
        }
    }

    render(){
        return (
            <div>
                {(this.props.articles.length > 0) 
                    ? this.props.articles.map(article =>{
                        return (
                            <Article
                                saveArticle={this.props.saveArticle}
                                title={article.title}
                                snippet={article.snippet}
                                url={article.url}
                                _id={article._id}
                                date={article.date}
                                key={article._id}
                            />
                        )})
                    : <NoResults/>
                }
            </div>
        );
    }
}
export default ArticleList;