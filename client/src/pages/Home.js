import React from "react";
import Form from "../components/Form/Form"

const Home = () => (
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
          <Form></Form>
        </div>
      </div>
    </div>
  </div>
)
export default Home;
