const { Department, Role, Employee, Property, Issue, Transfer, Borrow, Return, PurchaseRequest, LeaveIssue } = require('../models/schema')
const { seq } = require('../utils/dbconnection')


//seq.destroy({
//    where: {},
//    truncate:{ 
//        cascade: true 
//    }
//})

Department.destroy({
    where: {},
    truncate: true
})
Role.destroy({
    where: {},
    truncate:{ 
        cascade: true 
    }
})

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

//console.log("\nDestroying tables...\n")


//console.log("\nSeeding tables...\n")

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


var employees = [
    {
        "fullname": "temirat",
        "sign": "weldfd",
        "position": "teameadser",
        "phone": 911133892,
        "office_no": "wmu1123",
        "idno": "68a87sldfd",
        "password": "we33dlgo",
        "depId": 2
    },
    {
        "fullname": "temirat",
        "sign": "weldfd",
        "position": "teameadser",
        "phone": 911133892,
        "office_no": "wmu1123",
        "idno": "68a8j7sdfjd",
        "password": "we33dlgo",
        "depId": 3
    },
    {
        "fullname": "temirat",
        "sign": "weldfd",
        "position": "teameadser",
        "phone": 911133892,
        "office_no": "wmu1123",
        "idno": "6k8a8jj7sdfjd",
        "password": "we33dlgo",
        "depId": 5
    },
    {
        "fullname": "temirat",
        "sign": "weldfd",
        "position": "teameadser",
        "phone": 911133892,
        "office_no": "wmu1123",
        "idno": "6778987sdfjd",
        "password": "we33dlgo",
        "depId": 7
    }
]

employees.forEach(async(emp) => {
    await Employee.create(emp)
});

var properties = [
    {
        name: "Printer",
        SNO: "hjbadffb8876",
        type: "permanent",
        quantity: 34,
        unit: "In Number",
        unit_price: 326.43
    },
    {
        name: "Table",
        SNO: "hjbfb8876",
        type: "permanent",
        quantity: 34,
        unit: "In Number",
        unit_price: 326.43
    },
    {
        name: "Keyboard",
        SNO: "hjbfb8999876",
        type: "permanent",
        quantity: 34,
        unit: "In Number",
        unit_price: 326.43
    },
    {
        name: "UUUUUUUUU",
        SNO: "hjadbf6765gb8876",
        type: "permanent",
        quantity: 34,
        unit: "In Number",
        unit_price: 326.43
    },
    {
        name: "Mama",
        SNO: "hjb0fb8768876",
        type: "permanent",
        quantity: 34,
        unit: "In Number",
        unit_price: 326.43
    }
]

properties.forEach( async(prop) => {
    await Property.create(prop)
});

var issues = [
    {
        emp_id: 1,
        head_id:2,
        store_keeper_id:3,
        PropertyId: 1
    }
]

issues.forEach(async (issue) => {
    await Issue.create(issue)
});

var transfers = [
    {
        from_emp_id: 1,
        to_emp_id:2,
        store_keeper_id:3,
        PropertyId: 1
    }
]

transfers.forEach(async (tr) => {
    await Transfer.create(tr)
});


var borrows = [
    {
        borrower_emp_id: 1,
        borrowed_to_emp_id:2,
        PropertyId: 1
    }
]

borrows.forEach(async (tr) => {
    await Borrow.create(tr)
});

var returns = [
    {
        store_keeper_id: 1,
        emp_id:2,
        PropertyId: 1
    }
]

returns.forEach(async (tr) => {
    await Return.create(tr)
});

var requests = [
    {
        emp_id: 1,
        store_keeper_id:2,
        head_id:2,
        PropertyId: 1,
        budget_type: "something",
        spec: "bla bla bla"
    }
]

requests.forEach(async (tr) => {
    await PurchaseRequest.create(tr)
});

var leaveIssues = [
    {
        emp_id: 1,
        store_keeper_id:2,
        purchaser_id:2,
        PropertyId: 1,
        destination: "something"
    }
]

leaveIssues.forEach(async (tr) => {
    await LeaveIssue.create(tr)
});