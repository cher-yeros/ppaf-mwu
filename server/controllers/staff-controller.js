const { reverse } = require('lodash');
const { Op } = require('sequelize');
const { Issue, Borrow, Return, LeaveIssue, PurchaseRequest, Transfer, Property } = require('../models/schema')

module.exports = {
    async issueProperty(req,res) {
        
        const result = await Issue.create(req.body);
        

         const r = result.getProperty()

         let id = req.body.PropertyId;
         let quantity = req.body.quantity;
         let k = Property.decrement('quantity', {by : quantity , where: { id:id }})

         res.status(200).send({
             k,
             result
         })
    },
    async borrowProperty(req,res) {
    const result = await Borrrow.create(req.body);
        res.send({
        success: true,
        result
        })
    },
    async leaveIssue(req,res) {
        const result = await LeaveIssue.create(req.body);
        res.send({
            sucess: true,
            result
        })

    },
    async returnProperty(req,res) {
        const result = await Return.create(req.body);
        res.send({
            success: true,
            result
        })

    },
    async transferProperty(req,res) {
        const result = await Transfer.create(req.body);
        res.send({
            sucess:true,
            result
        })

    },
    async requestPurchase(req,res) {
        const result = await Request.create(req.body);
        res.send({
            success:true,
            result
        })

    },
    async showStatus(req,res) {
        const issued = await Issue.findAll({
            where: {
                emp_id : {
                    [Op.eq] : req.body.id
                }
            }
        })

        const borrowed = await  Borrow.findAll({
            where: {
                borrower_emp_id : {
                    [Op.eq] : req.body.id
                }
            }
        })

        const borrows = await Borrow.findAll({
            where: {
                borrowed_to_emp_id : {
                    [Op.eq] : req.body.id
                }
            }
        })

        const returns = await Return.findAll({
            where: {
                emp_id : {
                    [Op.eq] : req.body.id
                }
            }
        })

        const leavedIssues = await LeaveIssue.findAll({
            where: {
                emp_id : {
                    [Op.eq] : req.body.id
                }
            }
        })

        const requested = await PurchaseRequest.findAll({
            where: {
                emp_id : {
                    [Op.eq] : req.body.id
                }
            }
        })

        const transfers = await Transfer.findAll({
            where: {
                from_emp_id : {
                    [Op.eq] : req.body.id
                }
            }
        })

        const getTransferFrom = await Transfer.findAll({
            where: {
                to_emp_id : {
                    [Op.eq] : req.body.id
                }
            }
        })

        res.send({
            issued,
            borrowed,
            borrows,
            returns,
            leavedIssues,
            requested,
            transfers,
            getTransferFrom
        })
    }
}