const knex = require("../db/knex.js");
const hasher = require('../config/hasher');
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET || 'investcity'

module.exports = {

  adminLogin: (req, res) => {
      console.log('this is the body', req.body)
        knex('adminSuper')
        .where('emailAndLogin', req.body.emailAndLogin)
        .first()
        .then((admin)=>{
          console.log(admin)
          if(admin){
              if(admin.password === req.body.password){
                const token = jwt.sign(admin, secret);
                delete admin.password;
                console.log({token, admin})
                res.json(JSON.stringify({token, admin}))
              }else{
                res.status(400).send({message: 'Invalid Email / Password'});
              }
          }else{
            res.status(400).send({message: 'Invalid Email / Password'});
          }
        }).catch((err)=>{
          res.status(400).send({message: 'Invalid Email / Password'});
        })
    },

    investorLogin: (req, res) => {
        knex('investors')
        .where('name', req.body.name)
        .first()
        .then((investor)=>{
          if(investor){
            hasher.check(investor, req.body).then((isMatch)=>{
              if(isMatch){
                const token = jwt.sign(investor, secret);
                delete investor.password;
                res.json({message: "Successfully signed in", token, user})
              }else{
                res.status(400).send({message: 'Invalid Email / Password'});
              }
            })
          }else{
            res.status(400).send({message: 'Invalid Email / Password'});
          }
        }).catch((err)=>{
          res.status(400).send({message: 'Invalid Email / Password'});
        })
    },

    investorRegister: (req, res) => {
        hasher.hash(req.body).then((investor)=>{
            knex('investors').insert({
              name: investor.name,
              entityName: investor.entityName,
              emailAndLogin: investor.emailAndLogin,
              password: investor.password,
              address: investor.address,
              city: investor.city,
              state: investor.state,
              contactNumber: investor.contactNumber,
              mobileNumber: investor.mobileNumber,
              status: investor.status,
              notesForInvestors: investor.notesForInvestors,
            }, 'id').then((results)=>{
              res.json({message: "Successfully registered, please log in", id:results[0]});
            }).catch((err)=>{
              res.status(400).send({message: err});
            })
          })
    },

    adminMinorRegister: (req, res) => {
        hasher.hash(req.body).then((investor)=>{
            knex('investors').insert({
              name: investor.name,
              emailAndLogin: investor.emailAndLogin,
              password: investor.password,
              city: investor.city,
              state: investor.state,
              contactNumber: investor.contactNumber,
            }, 'id').then((results)=>{
              res.json({message: "Successfully registered, please log in", id:results[0]});
            }).catch((err)=>{
              res.status(400).send({message: err});
            })
          })
    },


    verify: (req, res)=>{
        res.json(req.decoded);
      }
}
