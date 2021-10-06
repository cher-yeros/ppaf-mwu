const { Department, Role, Employee, Property, Issue, Transfer, Borrow, Return, PurchaseRequest, LeaveIssue } = require('../models/schema')
const { seq } = require('../utils/dbconnection')
var faker = require('faker');



var issues = []

for (let i = 0; i < 50; i++) {
    var is = {
        emp_id: faker.datatype.number({min:1,max:300}),
        head_id:faker.datatype.number({min:1,max:300}),
        store_keeper_id:faker.datatype.number({min:1,max:300}),
        PropertyId: faker.datatype.number({min:1,max:500})
    }
    issues.push(is)
}

issues.forEach(async (issue) => {
    await Issue.create(issue)
});

var transfers = []

for (let i = 0; i < 50; i++) {
    var tr = {
        from_emp_id: faker.datatype.number({min:1,max:300}),
        to_emp_id:faker.datatype.number({min:1,max:300}),
        store_keeper_id:faker.datatype.number({min:1,max:300}),
        PropertyId: faker.datatype.number({min:1,max:500})
    }
    transfers.push(tr)
}

transfers.forEach(async (tr) => {
    await Transfer.create(tr)
});


var borrows = []

for (let i = 0; i < 50; i++) {
    var brw = {
        borrower_emp_id: faker.datatype.number({min:1,max:300}),
        borrowed_to_emp_id:faker.datatype.number({min:1,max:300}),
        PropertyId: faker.datatype.number({min:1,max:500})
    }
    borrows.push(brw)    
}

borrows.forEach(async (tr) => {
    await Borrow.create(tr)
});

var returns = []

for (let i = 0; i < 50; i++) {
    var rt = {
        store_keeper_id: faker.datatype.number({min:1,max:300}),
        emp_id:faker.datatype.number({min:1,max:300}),
        PropertyId: faker.datatype.number({min:1,max:500})
    }

    returns.push(rt)
    
}

returns.forEach(async (tr) => {
    await Return.create(tr)
});

var requests = []

for (let i = 0; i < 50; i++) {
    var rq = {
            emp_id: faker.datatype.number({min:1,max:300}),
            store_keeper_id:faker.datatype.number({min:1,max:300}),
            head_id:faker.datatype.number({min:1,max:300}),
            PropertyId: faker.datatype.number({min:1,max:500}),
            budget_type: faker.helpers.randomize(["bt1","bt2","bt3","bt4","bt5"]),
            spec: faker.commerce.productDescription()
        }
    requests.push(rq)
}

requests.forEach(async (tr) => {
    await PurchaseRequest.create(tr)
});

var leaveIssues = []

for (let i = 0; i < 50; i++) {
    var lv = {
        emp_id: faker.datatype.number({min:1,max:300}),
        store_keeper_id:faker.datatype.number({min:1,max:300}),
        purchaser_id:faker.datatype.number({min:1,max:300}),
        PropertyId: faker.datatype.number({min:1,max:300}),
        destination: faker.address.streetName()
    }

    leaveIssues.push(lv)
    
}

leaveIssues.forEach(async (tr) => {
    await LeaveIssue.create(tr)
});

