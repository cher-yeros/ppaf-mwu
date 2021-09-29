const Joi = require('joi')
const { Sequelize }  = require('sequelize')
const { Property, Employee } = require('../models/schema')

const schema = Joi.object({
    name: Joi.string().required(),
    SNO: Joi.string().required(),
    type: Joi.string().required(),
    quantity: Joi.number().integer().required(),
    unit: Joi.string().required(),
    unit_price: Joi.number(),
});

const empschema = Joi.object({
    fullname: Joi.string().required(),
    sign: Joi.string().required(),
    position: Joi.string().required(),
    phone: Joi.string().required(),
    office_no: Joi.string().required(),
    idno: Joi.string().required(),
    password: Joi.string().required()
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
    
    addemployee(req,res){
        const result = empschema.validate(req.body);

        if (result.error){
            return res.status(400).send({
                success: 'false',
                error:result.error.details[0].message
            })
        }

        let e = Employee.create(req.body);

        res.status(200).send({
            success: "true",
            response: e
        })

    }
}