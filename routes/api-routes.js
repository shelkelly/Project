const { sequelize } = require("../models");
const {Op} = require("sequelize")
const db = require("../models")
// const sequelize = require('sequelize')
module.exports = function(app) {
  
  

  // Route for getting some data about our user to be used client side
  app.get("/api/all", function(req, res) {
    
    db.book.findAll({}).then(function(results) {
        res.json(results);
    });
  });
  app.get("/api/search/:term?", (req,res)=>{
    const term = req.params.term.toLowerCase()
    db.book.findAll({where:{
      [Op.or]:{
      authors: sequelize.where(sequelize.fn('LOWER', sequelize.col('authors')), 'LIKE','%'+term+'%'),
      title: sequelize.where(sequelize.fn('LOWER', sequelize.col('title')), 'LIKE','%'+term+'%')}
    }})
    .then(results=>res.json(results))
    .catch(results=>res.json(results))
  })
};
