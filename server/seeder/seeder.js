const { Department } = require('../models/schema')

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

Department.destroy({
    where: {},
    truncate: true
})

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