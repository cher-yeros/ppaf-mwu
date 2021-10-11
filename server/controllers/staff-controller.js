const { reverse } = require('lodash');
const { Op } = require('sequelize');
const { Issue, Borrow, Return, LeaveIssue, PurchaseRequest, Transfer, Property, Employee } = require('../models/schema')

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
        let id = req.params.id
        const issued = await Issue.findAll({
            where: {
                emp_id : id,
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
            
        })


        const borrowedFrom = await  Borrow.findAll({
            where: {
                borrowed_to_emp_id : id
            },
            include : [
                {
                    model: Employee,
                    foreignKey : "borrower_emp_id",
                    as: 'giver'
                },
                {
                    model: Employee,
                    foreignKey : "borrowed_to_emp_id",
                    as: 'taker'
                },
                Property
            ]
        })

        const borrowsTo = await Borrow.findAll({
            where: {
                borrower_emp_id : id
            },
            include : [
                {
                    model: Employee,
                    foreignKey : "borrower_emp_id",
                    as: 'giver'
                },
                {
                    model: Employee,
                    foreignKey : "borrowed_to_emp_id",
                    as: 'taker'
                },
                Property
            ]
        })

        const returns = await Return.findAll({
            where: {
                emp_id : id
            },
            include : [
                {
                    model: Employee,
                    foreignKey : "emp_id",
                    as: 'employee'
                },
                {
                    model: Employee,
                    foreignKey : "store_keeper_id",
                    as: 'storeKeeper'
                },
                Property
            ]
        })

        const leavedIssues = await LeaveIssue.findAll({
            where: {
                emp_id : id
            },
            include : [
                {
                    model: Employee,
                    foreignKey : "emp_id",
                    as: 'employee'
                },
                {
                    model: Employee,
                    foreignKey : "store_keeper_id",
                    as: 'storeKeeper'
                },
                {
                    model: Employee,
                    foreignKey : "purchaser_id",
                    as: 'purchaser'
                },
                Property
            ]
        })

        const requested = await PurchaseRequest.findAll({
            where: {
                emp_id : id
            },
            include : [
                {
                    model: Employee,
                    foreignKey : "emp_id",
                    as: 'employee'
                },
                {
                    model: Employee,
                    foreignKey : "store_keeper_id",
                    as: 'storeKeeper'
                },
                {
                    model: Employee,
                    foreignKey : "head_id",
                    as: 'head'
                },
                Property
            ]
        })

        const transfers = await Transfer.findAll({
            where: {
                from_emp_id : id
            },
            include : [
                {
                    model: Employee,
                    foreignKey : "from_emp_id",
                    as: 'from'
                },
                {
                    model: Employee,
                    foreignKey : "to_emp_id",
                    as: 'to'
                },
                {
                    model: Employee,
                    foreignKey : "store_keeper_id",
                    as: 'storeKeeper'
                },
                Property
            ]
        })

        const getTransferFrom = await Transfer.findAll({
            where: {
                to_emp_id : id
            },
            include : [
                {
                    model: Employee,
                    foreignKey : "from_emp_id",
                    as: 'from'
                },
                {
                    model: Employee,
                    foreignKey : "to_emp_id",
                    as: 'to'
                },
                {
                    model: Employee,
                    foreignKey : "store_keeper_id",
                    as: 'storeKeeper'
                },
                Property
            ]
        })

        res.send({
            issued,
            borrowedFrom,
            borrowsTo,
            returns,
            leavedIssues,
            requested,
            transfers,
            getTransferFrom
        })
    }
}