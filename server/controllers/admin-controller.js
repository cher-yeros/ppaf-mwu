const Joi = require('joi')
const { Op }  = require('sequelize')
const { 
    Employee, 
    Role, 
    Department, 
    Issue, 
    Property , 
    Transfer, 
    Borrow, 
    LeaveIssue, 
    PurchaseRequest, 
    Return } = require('../models/schema')
 
const empschema = Joi.object({
    fullname: Joi.string().required(),
    sign: Joi.string().required(),
    position: Joi.string().required(),
    phone: Joi.string().required(),
    office_no: Joi.string().required(),
    idno: Joi.string().required(),
    password: Joi.string().required(),
    depId: Joi.number().integer(),
    email: Joi.string().required(),
    avatar: Joi.string()
});

const roleSchema = Joi.object({
    name : Joi.string().required()
});



module.exports = {
    async addEmployee(req,res){
        const result = empschema.validate(req.body);

        if (result.error){
            return res.status(400).send({
                success: 'false',
                error:result.error.details[0].message
            })
        }

        let employee = await Employee.create(req.body);
        let role = await Role.findOne({
            where: {
                name: "staff"
            }
        })

        employee.addRole(role, { through: { selfGranted: false } });

        res.status(200).send({
            success: true,
            response: employee
        })

    },
    async getEmployee(req,res) {
        const q = req.query.q;

        const by = req.query.by;

        //res.send(req.body.depId)
        if(by != undefined && by == 'dep') {
            const employees = await Employee.findAll({
                where: {
                    depId: req.body.depId
                },
                include: [
                    Role,
                    {
                    model: Department,
                    as: 'dep'
                }]
            });
            
            res.send({
                success: true,
                employees
            })
        }
        else { 
        if(q == undefined) {
            const employees = await Employee.findAll({
                include: [
                    Role,
                    {
                    model: Department,
                    as: 'dep'
                }]
            });

            res.send({
                success: true,
                employees
            })
        }
        else {
            const employees = await Employee.findAll({
                where: {
                    fullname: {
                      [Op.like] : `%${q}%`
                    }
                    
                },
                include: [
                    Role,
                    {
                    model: Department,
                    as: 'dep'
                }]
            })

            res.send({
                success: true,
                employees
            })
        }
    }
        
    },
    async addRole(req,res){
        const result = roleSchema.validate(req.body);

        if (result.error){
            return res.status(400).send({
                success: 'false',
                error:result.error.details[0].message
            })
        }

        let ar = Role.create(req.body);
        
        res.status(200).send({
            success: 'true',
            response: ar
        })

    },
    async setRole(req,res) {
        const emp = await Employee.findOne({
            where: {
                id: req.body.emp_id
            }
        })
        const role = await Role.findOne({
            where: {
                name: req.body.role
            }
        })
        const result = emp.addRole(role)

        res.send({
            success: true,
            result: result
        })
    },
    async deleteEmployee(req,res) {
        const result = await Employee.destroy({
            where: {
                id: req.body.id
            }
        })

        res.send({
            success : result
        })
    },
    async updateEmployee(req,res) {
        const result = await Employee.update(req.body,{
            where: {
                id: req.body.id
            }
        })

        res.send({
            success : result
        })
    },
    async addDepartment(req,res) {
        const result = await Department.create(req.body);

        res.send({
            success: result
        })
    },
    async getDepartment(req,res) {
        const q = req.query.q;
        if(q == undefined){
            const deps = await Department.findAll({
                include: [
                    {
                        model :Employee,
                        as: 'dephead',
                        foreignKey : 'headId'
                    }
                ]
            });
            res.send({
                success: true,
                deps
            })
        }
        else {
            const deps = await Department.findAll({
                where: {
                    [Op.like]: `%${q}%`
                }
            });

            res.send({
                success: true,
                deps
            })
        }
        
    },
    async getIssues(req,res) {
        const issues = await Issue.findAll(
            {
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
    },
    async getTransfers(req,res) {
        const transfers = await Transfer.findAll(
            {
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
                success: true,
                transfers
            })
    },
    async getBorrows(req,res) {
        const borrows = await Borrow.findAll(
            {
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

            res.send({
                success: true,
                borrows
            })
    },
    async getLeaveIssues(req,res) {
        const leaveIssues = await LeaveIssue.findAll(
            {
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

            res.send({
                success: true,
                leaveIssues
            })
    },
    async getPurchaseRequests(req,res) {
        const requests = await PurchaseRequest.findAll(
            {
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

            res.send({
                success: true,
                requests
            })
    },
    async getReturns(req,res) {
        const returns = await Return.findAll(
            {
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

            res.send({
                success: true,
                returns
            })
    },
}