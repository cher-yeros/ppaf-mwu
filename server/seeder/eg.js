const faker = require('faker');
const { Department, Role, Employee, Property, Issue, Transfer, Borrow, Return, PurchaseRequest, LeaveIssue } = require('../models/schema')


colleges = [
    {
        name : "College of Computing",
        deps : [
            {
                name: "Computer Science"
            },
            {
                name: "Information Science"
            },
            {
                name: "Information Technology"
            }
        ]
    },
    {
        name : "College of Engineering",
        deps : [
            {
                name: "Civil Engineering"
            },
            {
                name: "Construction Technology and Management"
            },
            {
                name: "Electrical and Computer Engineering"
            },
            {
                name: "Mechanical Engineering"
            },
            {
                name: "Surveying Engineering"
            },
            {
                name: "water Resource and Irrigation Engineering"
            }
        ]
    },
    {
        name : "College of Business and Economics",
        deps : [
            {
                name: "Accounting and Finance"
            },
            {
                name: "Management"
            },
            {
                name: "Marketing Management"
            },
            {
                name: "Tourism management"
            }
        ]
    },
    {
        name : "College of Agriculture and Natural Resources",
        deps : [
        ]
    },
    {
        name : "college of Education and Behaviorial Science",
        deps : [
        ]
    },
    {
        name : "College of Natural and Computational Science",
        deps : [
        ]
    },
    {
        name : "Institute of Techology",
        deps : [
        ]
    },
    {
        name : "School of law",
        deps : [
        ]
    },

]

offices = [
    {
        name: "President Office",
        deps :[
            {
                name: "President Office Directorate"
            },
            {
                name: "Planning & Program Director"
            },
            {
                name: "Institutional Reform and Transformational Director"
            },
            {
                name: "Internal Audit Office"
            },
            {
                name: "Public and International Relations Office"
            },
            {
                name: "Ethics and Anti-Corruption Directorate"
            },
            {
                name: "Gender Affairs Directorate"
            },
            {
                name: "Legal Affairs Office"
            },
            {
                name: "HIV/AIDS Prevention and Control Director"
            }
        ]
    },
    {
        name: "Administration Vice President Office",
        deps : [
            {
                name: "Student Service Directorate"
            },
            {
                name: "Human Resource Management Directorate"
            },
            {
                name: "Finance $ Budget Directorate"
            },
            {
                name: "Procurement & Property Administration Directorate"
            },
            {
                name: "Facility Management Directorate"
            }
        ]
    },
    {
        name: "Academic Vice President Office",
        deps: [
            {
                name: "Academic Affairs Office"
            },
            {
                name: "School Of Gradute Studies Office"
            },
            {
                name: "Registrar and Alumni Directorate(RAD)"
            },
            {
                name: "Continuing and Distance Education Direcorate"
            },
            {
                name: "Libarary and Documentation Service Directorate"
            },
            {
                name: "Quality Assurance Directorate"
            }
        ]
    },
    {
        name : "Business and Development Vice President Office",
        deps : [
            {
                name: "Business and Development V/P Office Directorate"
            },
            {
                name: "ICT Directorate"
            },
            {
                name: "Revenue Generation Directorate"
            },
            {
                name: "Construction Project Office"
            }
        ]
    }

]

colleges.forEach(async (college) => {
    await Department.create({
        name: college.name,
        college: true
    })

    college.deps.forEach(async(dep) => {
        await Department.create({
            name: dep.name
        })
    })
});

offices.forEach(async (office) => {
    await Department.create({
        name: office.name,
        college: true
    })

    office.deps.forEach(async(dep) => {
        await Department.create({
            name: dep.name
        })
    })
});

const roles = [
    {
        name: "staff"
    },
    {
        name: "store-keeper"
    },
    {
        name: "head"
    },
    {
        name: "purchaser"
    },
    {
        name: "admin"
    }
]

roles.forEach( async(role) => {
    await Role.create(role)
});


var employees = []
for (let i = 0; i < 300; i++) {
    var emp = {
        "fullname": faker.name.findName(),
        "sign": faker.internet.avatar(),
        "avatar": faker.internet.avatar(),
        "position": faker.name.jobType(),
        "phone": "9"+faker.phone.phoneNumber("!#######"),
        "office_no": faker.datatype.number(100),
        "idno": "mwu/"+faker.datatype.number({min: 1000000, max: 9999999 })+"/2015",
        "password": "password",
        "depId": faker.datatype.number(49),
        "email" : faker.internet.email()
    }
    employees.push(emp)
}
employees.forEach(async(emp) => {
    //console.log(emp)
    //return
    await Employee.create(emp)
});

var props = []

for (let i = 0; i < 500; i++) {
    var prop = {
        name: faker.commerce.productName(),
        SNO: faker.random.alphaNumeric(8)+faker.random.alpha(7),
        type: faker.helpers.randomize(["permanent", "temporary"]),
        quantity: faker.datatype.number(75),
        unit: faker.helpers.randomize(["In Number", "Peace", "Birr"]),
        unit_price: faker.datatype.float({min: 300, max: 50000 })
    }

    props.push(prop)
    
}
props.forEach(async(prop) => {
    await Property.create(prop)
});


var issues = []

for (let i = 0; i < 50; i++) {
    var is = {
        emp_id: faker.datatype.number({min:1,max:300}),
        head_id:faker.datatype.number({min:1,max:300}),
        store_keeper_id:faker.datatype.number({min:1,max:300}),
        PropertyId: faker.datatype.number({min:1,max:500}),
        quantity: faker.datatype.number(75),
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
        PropertyId: faker.datatype.number({min:1,max:500}),
        quantity: faker.datatype.number(75),
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
        PropertyId: faker.datatype.number({min:1,max:500}),
        quantity: faker.datatype.number(75),
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
        PropertyId: faker.datatype.number({min:1,max:500}),
        quantity: faker.datatype.number(75),
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
            spec: faker.commerce.productDescription(),
            quantity: faker.datatype.number(75),
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
        destination: faker.address.streetName(),
        quantity: faker.datatype.number(75),
    }

    leaveIssues.push(lv)
    
}

leaveIssues.forEach(async (tr) => {
    await LeaveIssue.create(tr)
});

