const knex = require("../db/knex.js");


module.exports = {

    getAllInvestmentInvestors: (req, res) => {
        knex('investmentInvestors').then((results) => {
            res.json(results)
        })
    },

    addInvestmentInvestor: (req, res) => {
      knex('investmentInvestors').insert(req.body).then((results) => {
          res.json(results[0])
      })
    },

    editInvestmentInvestor: (req, res) => {
        knex('investmentInvestors').update(req.body, '*').where('id', req.params.id).then((results) => {
            res.json(results[0])
        })
    },


    deleteInvestmentInvestor: (req, res) => {
    knex('investmentInvestors').del().where('id', req.params.id).then((results) => {
        res.json(results[0])
    })
  }

}
