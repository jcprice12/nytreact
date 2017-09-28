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
            <a href={props.url}>{props.url}</a>
        </div>
        {props.canSave
            ? 
                <div className="panel-footer">
                    <div className="btn btn-default">Save</div>
                </div>
            : ""
        }
    </div>
)
export default Article;