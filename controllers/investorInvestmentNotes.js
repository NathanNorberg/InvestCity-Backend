const knex = require("../db/knex.js");


module.exports = {

    getAllInvestorInvestmentNotes: (req, res) => {
        knex('investorInvestmentNotes').then((results) => {
            res.json(results)
        })
    },

    addInvestorInvestmentNote: (req, res) => {
      knex('investorInvestmentNotes').insert(req.body).then((results) => {
          res.send(200)
      })
    },

    editInvestorInvestmentNote: (req, res) => {
        knex('investorInvestmentNotes').update(req.body).where('id', req.params.id).then((results) => {
            res.send(200)
        })
    },

    deleteInvestorInvestmentNote: (req, res) => {
    knex('investorInvestmentNotes').del().where('id', req.params.id).then((results) => {
        res.send(200)
    })
  }

}
