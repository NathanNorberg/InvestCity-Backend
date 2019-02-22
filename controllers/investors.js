const knex = require("../db/knex.js");


module.exports = {

    getAllInvestors: (req, res) => {
        knex('investors').then((results) => {
            res.json(results)
        })
    },

    addInvestors: (req, res) => {
      knex('investors').insert(req.body, '*').then((results) => {
          res.json(results[0])
      })
    },

    editInvestor: (req, res) => {
        knex('investors').update(req.body).where('id', req.params.id).then((results) => {
            res.send(200)
        })
    },

    deleteInvestor: (req, res) => {
    knex('investors').del().where('id', req.params.id).then((results) => {
        res.send(200)
    })
  }

}
