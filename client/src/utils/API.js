import axios from "axios";
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=";
const APIKEY = "6a9b71c29150417cad5148cf18d33e62";

export default {
  search: function(searchTerm, startYear, endYear) {
    let queryURL = BASEURL + APIKEY + "&q=";
    queryURL += searchTerm;
  
    // If the user provides a startYear -- the startYear will be included in the queryURL
    if (parseInt(startYear,10)) {
      queryURL += "&begin_date=" + startYear + "0101";
    }
    // If the user provides a startYear -- the endYear will be included in the queryURL
    if (parseInt(endYear,10)) {
      queryURL += "&end_date=" + endYear + "0101";
    }
  
    return axios.get(queryURL);
  },
  getSavedArticles : function(){
    return axios.get("/api/save");
  },
  saveArticle : function(article){
    console.log("saving article");
    return axios.post("/api/save",article)
  },
  deleteArticle : function(id){
    return axios.delete(("/api/save/" + id));
  }
};