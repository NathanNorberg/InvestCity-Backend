const knex = require("../db/knex.js");


module.exports = {

    getAllAdminSuper: (req, res) => {
        knex('adminSuper').then((results) => {
            res.json(results)
        })
    },

    editAdminSuper: (req, res) => {
        knex('adminSuper').update(req.body, '*').where('id', req.params.id).then((results) => {
            res.json(results[0])
        })
    },


}
