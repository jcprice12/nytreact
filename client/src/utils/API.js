import axios from "axios";
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=";
const APIKEY = "6a9b71c29150417cad5148cf18d33e62";

const recursiveGet = function(searchTerm, startYear, endYear, wantedNumber, results, page, resolve, reject){
  //set up initial query 
  let queryURL = BASEURL + APIKEY + "&q=";
  queryURL += searchTerm;
  queryURL += ("&page=" + page);
  // If the user provides a startYear -- the startYear will be included in the queryURL
  if (parseInt(startYear,10)) {
    queryURL += "&begin_date=" + startYear + "0101";
  }
  // If the user provides a startYear -- the endYear will be included in the queryURL
  if (parseInt(endYear,10)) {
    queryURL += "&end_date=" + endYear + "0101";
  }

  axios.get(queryURL).then(function(res){
    console.log(results);
    console.log(res);
    for(var i = 0; i < res.data.response.docs.length; i++){
      if(results.length >= wantedNumber){
        break;
      }
      results.push(res.data.response.docs[i]);
    }
    if((res.data.response.meta.hits > results.length) && (results.length < wantedNumber)){
      recursiveGet(searchTerm, startYear, endYear, wantedNumber, results, (page+1), resolve, reject);
    } else {
      resolve(results);
    }
    
  }).catch(function(err){
    reject(err);
  });
}

export default {
  search: function(searchTerm, startYear, endYear, wantedNumber) {
    let promise = new Promise(function(resolve, reject){
      recursiveGet(searchTerm, startYear, endYear, wantedNumber, [], 0, resolve, reject);
    });
    return promise;
  }
};