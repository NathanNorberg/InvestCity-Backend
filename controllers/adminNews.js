const knex = require("../db/knex.js");


module.exports = {

    getAdminNews: (req, res) => {
        knex('adminNews').then((results) => {
            res.json(results)
        })
    },

    addAdminNews: (req, res) => {
      knex('adminNews').insert(req.body, '*').then((results) => {
          res.json(results[0])
      })
    },

    editAdminNews: (req, res) => {
        knex('adminNews').update(req.body).where('id', req.params.id).then((results) => {
            res.send(200)
        })
    },

    deleteAdminNews: (req, res) => {
    knex('adminNews').del().where('id', req.params.id).then((results) => {
        res.send(200)
    })
  }

}
