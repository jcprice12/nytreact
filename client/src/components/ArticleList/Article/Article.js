import React from "react";
import "./Article.css"

const Article = (props) => (
    <div className="panel panel-primary">
        <div className="panel-heading">
            <h4>{props.title}</h4>
        </div>
        <div className="panel-body">
            <p>{props.snippet}</p>
            <p>Published: {props.date}</p>
            <a href={props.url}>View Article</a>
        </div>
        {props.saveArticle
            ? 
                <div className="panel-footer">
                    <div onClick={() => props.saveArticle({
                        "title" : props.title,
                        "snippet" : props.snippet,
                        "date" : props.date,
                        "url" : props.url,
                        "_id" : props._id
                    })} className="btn btn-default">Save</div>
                </div>
            : 
                (props.deleteArticle
                    ?
                        <div className="panel-footer">
                            <div className="btn btn-default">Delete</div>
                        </div>
                    : ""
                )
        }
    </div>
)
export default Article;