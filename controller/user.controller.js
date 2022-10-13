const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;
const { hashSync, genSaltSync, compareSync } = require("bcrypt");
// const { sendWelcomeEmail } = require('../utilities/mail');


module.exports = {

  signupUser: async (req, res) => {
      try{
        const salt = genSaltSync(10);
        req.body.password = hashSync(req.body.password, salt)
        var user = await User.create(req.body);
        res.status(201).send(user);
      }catch(error){
        res.status(400).send(error)
      }
      // sendWelcomeEmail(req.body.email, req.body.firstName)
    },

    findAll : (req, res) => {
      const firstName = req.query.firstName;
      var condition = firstName ? { firstName : { [Op.iLike]: `%${firstName}%` } } : null;
    
      User.findAll({ where: condition })
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Somethings went wrong data not found"
          });
        });
    },

    findOne : (req, res) => {
      const id = req.params.id;

      User.findByPk(id)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message: "Error retrieving data with id=" + id
          });
        });
    },

    deleteByone : (req, res) => {
      const id = req.params.id;
    
      User.destroy({
        where: { id: id }
      })
        .then(num => 
        {
          if (num == 1) {
            res.send({
              message: `Data deleted successfully!`
            });
          } else {
            res.send({
              message: `Cannot delete id no. is ${id}`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Could not delete with id=" + id
          });
        });
    },

    update : (req, res) => {
      
      const id = req.body.id;
      const body = req.body;
      const salt = genSaltSync(10);
      body.password = hashSync(body.password, salt);
      console.log(id, ':: :: :: :: :: :: :: :: :: :: :: :: :: :: :: :: :: :: :: :: :: id')
      console.log(body, ':: :: :: :: :: :: :: :: :: :: :: :: :: :: :: :: :: :: :: :: :: body')

      User.update(req.params, {
        where: { id: id }
      })

        .then((num) => {
            if (num == 1) {
            res.send({
              message: "Data updated successfully."
            });
          } else {
            res.send({
              message: `Cannot update Tutorial with id= ${id}`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating Tutorial with id=" + id
          });
        });
    },

  


}