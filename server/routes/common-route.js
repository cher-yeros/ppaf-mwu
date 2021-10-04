const express = require('express')
const router = express.Router()
const { Employee } = require('../models/schema')

router.post("/login", async (req,res) => {
    const emp = await Employee.findOne({
        where: {
            idno: req.body.id,
            password: req.body.password  //compare hashing
        }
    })

    res.send({
        success: true,
        emp: emp
    })
})

module.exports = router;