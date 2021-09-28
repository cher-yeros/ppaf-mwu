const { Sequlieze } = require('sequelize')
const { Department } = require('../models/schema')

const deps = [
    {
        name : "ICT ceneter"
    },
    {
        name : "Computing College"
    },
    {
        name : "Engineering Department"
    },
    {
        name : "Business College"
    },
    {
        name : "Health College"
    },
    {
        name : "Social Science College"
    },
    {
        name : "Geology and Civil "
    },
    {
        name : "Applied Science"
    },
    {
        name : "Application Developement"
    },
];

deps.forEach(async (dep) => {
    
    await Department.create(dep);

});

//dd();

//async function  dd(){
//    let res = await Department.create({
//        name: "Blu Bla bLu"
//    });
//    console.log(res)
//}

