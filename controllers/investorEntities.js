const knex = require("../db/knex.js");


module.exports = {

    getAllInvestorEntities: (req, res) => {
        knex('investorEntities').then((results) => {
            res.json(results)
        })
    },

    addInvestorEntity: (req, res) => {
      knex('investorEntities').insert(req.body).then((results) => {
          res.send(200)
      })
    },

    editInvestorEntity: (req, res) => {
        knex('investorEntities').update(req.body).where('id', req.params.id).then((results) => {
            res.send(200)
        })
    },

    deleteInvestorEntity: (req, res) => {
    knex('investorEntity').del().where('id', req.params.id).then((results) => {
        res.send(200)
    })
  }

}