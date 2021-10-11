const express = require('express')
const router = express.Router()
const { Employee, Role, Department } = require('../models/schema')

router.post("/login", async (req,res) => {
    const emp = await Employee.findOne({
        where: {
            idno: req.body.idno,
            password: req.body.password
        }
    })

    if(!emp) {
        res.send({
            success: false,
            error: "Incorrect ID Number or Password"
        })
    }
    else {
        const e = await Employee.findOne({
            where: {
                id:emp.id
            },
            include: [
                Role,
                {
                model: Department,
                as: 'dep'
            }]
        })
    
        let roleError = true
    
        if(e) {
            e.Roles.forEach(role => {
                if(role.name == req.body.role) {
                    roleError = false
                }
            });
            if(roleError) {
                res.send({
                    success: false,
                    error: "You are not granted"
                })
            }
            else {
                res.send({
                    success: true,
                    e
                })
            }
        }
        else {
            res.send({
                success: false,
                error: "Incorrect ID Number or Password"
            }) 
        }
    }
})

module.exports = router;