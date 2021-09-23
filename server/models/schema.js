const { Sequelize, DataTypes } = require('sequelize');
const connection = require('../utils/dbconnection')

const Property = connection.define('Property', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name : {
        type: DataTypes.STRING,
        allowNull: false
    },
    SNO : {
        type: DataTypes.STRING,
        allowNull: false
    },
    type : {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantity : {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    unit : {
        type: DataTypes.STRING,
        allowNull: false
    },
    unit_price : {
        type: DataTypes.FLOAT,
        allowNull: false
    },
});

const Employee = connection.define('Employee', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    fullname : {
        type: DataTypes.STRING,
        allowNull: false
    },
    sign : {
        type: DataTypes.STRING,
        allowNull: false
    },
    position : {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone : {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    office_no : {
        type: DataTypes.STRING,
        allowNull: false
    }
});

const Department = connection.define('Department', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name : {
        type: DataTypes.STRING,
        allowNull: false
    }
});

const Role = connection.define('Role', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name : {
        type: DataTypes.STRING,
        allowNull: false
    }
});

const Issue = connection.define('Issue', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }
});


const Transfer = connection.define('Transfer', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }
});

const Return = connection.define('Return', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }
});

const Borrow = connection.define('Borrow', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }
});

const LeaveIssue = connection.define('LeaveIssue', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    destination: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

const PurchaseRequest = connection.define('PurchaseRequest', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    budget_type : {
        type: DataTypes.STRING,
        allowNull: false
    },
    budget_type : {
        type: DataTypes.STRING,
        allowNull: true
    }
});

Employee.belongsToMany(Role, { through: 'EmployeeRole' });
Role.belongsToMany(Employee, { through: 'EmployeeRole' });

Employee.hasOne(Department, {
    as: 'dephead',
    foreignKey: 'headId'
});

Department.hasMany(Employee, {
    as: 'dep',
    foreignKey: 'depId',
    constraints: false  
});


Employee.hasOne(Issue, {
    foreignKey: 'emp_id',
    constraints: false  
});

Employee.hasOne(Issue, {
    foreignKey: 'store_keeper_id',
    constraints: false  
});

Employee.hasOne(Issue, {
    foreignKey: 'head_id',
    constraints: false  
});

Property.hasOne(Issue);  //make sure issue has many property

Employee.hasOne(Transfer, { //alternative using as:
    foreignKey: 'from_emp_id',
    constraints: false  
})

Employee.hasOne(Transfer, { //alternative using as:
    foreignKey: 'to_emp_id',
    constraints: false  
})

Employee.hasOne(Transfer, { //alternative using as:
    foreignKey: 'store_keeper_id',
    constraints: false  
})

Property.hasOne(Transfer)

Employee.hasOne(Borrow, {
    foreignKey: 'borrower_emp_id',
    constraints: false
})

Employee.hasOne(Borrow, {
    foreignKey: 'borrowed_to_emp_id',
    constraints: false
})

Property.hasOne(Borrow)

Employee.hasOne(Return, {
    foreignKey: 'store_keeper_id',
    constraints: false
})

Employee.hasOne(Return, {
    foreignKey: 'emp_id',
    constraints: false
})

Property.hasOne(Return)

Employee.hasOne(LeaveIssue, {
    foreignKey: 'emp_id',
    constraints: false
})

Employee.hasOne(LeaveIssue, {
    foreignKey: 'store_keeper_id',
    constraints: false
})

Employee.hasOne(LeaveIssue, {
    foreignKey: 'purchaser_id',
    constraints: false
})

Property.hasMany(LeaveIssue)

Employee.hasOne(PurchaseRequest, {
    foreignKey: 'emp_id',
    constraints: false
})

Employee.hasOne(PurchaseRequest, {
    foreignKey: 'head_id',
    constraints: false
})

Employee.hasOne(PurchaseRequest, {
    foreignKey: 'store_keeper_id',
    constraints: false
})

Property.hasOne(PurchaseRequest)

module.exports.Employee = Employee;
module.exports.Role = Role;
module.exports.Department = Department;
module.exports.Issue = Issue;
module.exports.Property = Property;
module.exports.Transfer = Transfer;
module.exports.Return = Return;
module.exports.Borrow = Borrow;
module.exports.LeaveIssue = LeaveIssue;
module.exports.PurchaseRequest = PurchaseRequest;

connection.sync({ force: true });




