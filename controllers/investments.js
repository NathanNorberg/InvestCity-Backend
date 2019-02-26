const knex = require("../db/knex.js");


module.exports = {

    getAllInvestments: (req, res) => {
        knex('investments').then((results) => {
            res.json(results)
        })
    },

    addInvestment: (req, res) => {
      knex('investments').insert(req.body, '*').then((results) => {
          res.json(results[0])
      })
    },

    editInvestment: (req, res) => {
        knex('investments').update(req.body, '*').where('id', req.params.id).then((results) => {
            res.json(results[0])
        })
    },

    deleteInvestment: (req, res) => {
    knex('investments').del().where('id', req.params.id).then((results) => {
        res.json(results[0])
    })
  }

}
