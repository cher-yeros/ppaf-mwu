const Joi = require('joi')
const { Sequelize }  = require('sequelize')
const { Property } = require('../models/schema')

const schema = Joi.object({
    name: Joi.string().required(),
    SNO: Joi.string().required(),
    type: Joi.string().required(),
    quantity: Joi.number().integer().required(),
    unit: Joi.string().required(),
    unit_price: Joi.number(),
});

module.exports = {
    addProperty(req,res) {
        const result = schema.validate(req.body);

        if(result.error) {
            return res.status(400).send({
                success: 'false',
                error: result.error.details[0].message
            })
        }


        let r = Property.create(req.body);

        res.status(200).send({
            success: "true",
            response: r
        })
    },
    deleteProperty(req,res) {},
    updateProperty(req,res) {}
}