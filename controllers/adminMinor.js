const knex = require("../db/knex.js");


module.exports = {

    getAllAdminMinors: (req, res) => {
        knex('adminMinor').then((results) => {
            res.json(results)
        })
    },

    editAdminMinor: (req, res) => {
        knex('adminMinor').update(req.body).where('id', req.params.id).then((results) => {
            res.send(200)
        })
    },

    deleteAdminMinor: (req, res) => {
    knex('adminMinor').del().where('id', req.params.id).then((results) => {
        res.send(200)
    })
  }

}
