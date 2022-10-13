const Joi = require("joi");


const schema = {
  users : Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    gender: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    number: Joi.number().required(),
  }),
};

module.exports = schema;
