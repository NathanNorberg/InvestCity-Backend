const knex = require("../db/knex.js");


module.exports = {

    getAllinvestmentInvestors: (req, res) => {
        knex('investmentInvestors').then((results) => {
            res.json(results)
        })
    },

    addInvestmentInvestor: (req, res) => {
      knex('investmentInvestors').insert(req.body).then((results) => {
          res.send(200)
      })
    },


    deleteInvestmentInvestor: (req, res) => {
    knex('investmentInvestors').del().where('id', req.params.id).then((results) => {
        res.send(200)
    })
  }

}
