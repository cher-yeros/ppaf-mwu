const { reverse } = require('lodash');
const { Issue } = require('../models/schema')

module.exports = {
    issueProperty(req,res) {
        Issue.create(req.body);

        res.send({
            success: true
        })
    },
    borrowProperty(req,res) {

    },
    leaveIssue(req,res) {

    },
    returnProperty(req,res) {

    },
    transferProperty(req,res) {

    },
    requestPurchase(req,res) {

    },
    showStatus(req,res) {
        
    }
}