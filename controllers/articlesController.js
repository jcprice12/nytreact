const Article = require("../models/Article");

// Defining methods for the articlesController
module.exports = {
  findAll: function(req, res) {
    Article
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  save: function(req, res) {
    Article.findOne({_id : req.body._id}, function(err, article){
        if(err){
            res.status(500).send(err);
        } else {
            if(article){
                res.json({"exists" : true})
            } else {
                var newArticle = new Article({
                    title : req.body.title,
                    snippet: req.body.snippet,
                    date: req.body.date,
                    url: req.body.url,
                    _id: req.body._id
                });
                newArticle.save(function(err, savedArticle){
                    if(err){
                        res.status(500).send(err);
                    } else {
                        res.json(savedArticle);
                    }
                });
            }
        }
    });
  },
  remove: function(req, res) {
    Article
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
  }
};