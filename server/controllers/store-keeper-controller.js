const Joi = require('joi')
const { Op }  = require('sequelize')
const { Property, Issue, Employee } = require('../models/schema')

const schema = Joi.object({
    name: Joi.string().required(),
    SNO: Joi.string().required(),
    type: Joi.string().required(),
    quantity: Joi.number().integer().required(),
    unit: Joi.string().required(),
    unit_price: Joi.number().required(),
});

module.exports = {
    async addProperty(req,res) {
        const result = schema.validate(req.body);

        if(result.error) {
            return res.status(400).send({
                success: 'false',
                error: result.error.details[0].message
            })
        }


        let r = await Property.create(req.body);

        res.status(200).send({
            success: "true",
            response: r
        })
    },
    async getProperty(req,res) {
        const q = req.query.q;
        
        if(q == undefined) {
            const properties = await Property.findAll({
                order: [
                    ['name', 'ASC']
                ],
                where: {
                    quantity: {
                        [Op.gte]: 1
                    }
                }
            });

            res.send({
                success: true,
                properties
            })
        }
        else {
            const properties = await Property.findAll({
                where: {
                    [Op.or] : {
                        name: {
                            [Op.like] : `%${q}%`
                        },
                        SNO: {
                            [Op.like] : `%${q}%`
                        }
                    }
                },
                order: [
                    ['name', 'ASC']
                ]
            })

            res.send({
                success: true,
                properties
            })
        }
    },
    async deleteProperty(req,res) {
        const result = await Property.destroy({
            where:{
                id:req.body.id
            }
        });
        res.send({
           success: result
           
       })
   
    },
    async updateProperty(req,res) {
        const id = req.body.id;
        delete req.body.id;

        const result = await Property.update(req.body, {
             where:{
                 id:id
             }
        })
   
        res.send({
            success: result
        })
   
   
    },
    async approveIssue(req,res) {
        const result = await Issue.update({approved: true},{
                where:{
                    id: req.body.id
                }
        })

        res.send({
            result
        })
    },
    async approveReturn(req,res) {
        //res.send(req.body);
        let quantity = req.body.quantity
        let propId = req.body.propId
        let issueId = req.body.issueId
        
        let inc = await Property.increment('quantity', {by : quantity , where: { id:propId }})

        let del =  await Issue.destroy({
            where: {
                id: issueId
            }
        })

        res.send({
            inc,
            del
        })
    },
    async getApprovedIssues(req,res) {
        const issues = await Issue.findAll(
            {
                where: {
                    approved: true
                },
                include : [
                {
                    model: Employee,
                    foreignKey : "emp_id",
                    as: 'employee'
                },
                {
                    model: Employee,
                    foreignKey : "head_id",
                    as: 'head'
                },
                {
                    model: Employee,
                    foreignKey : "store_keeper_id",
                    as: 'storeKeeper'
                },
                Property
            ]
        }
        );

        res.send({
            success: true,
            issues
        })
    }
}