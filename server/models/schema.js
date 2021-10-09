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
        allowNull: false,
        unique: true
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
        type: DataTypes.STRING,
        allowNull: false
    },
    email : {
        type: DataTypes.STRING,
        allowNull: false
    },
    avatar : {
        type: DataTypes.STRING,
        allowNull: false
    },
    office_no : {
        type: DataTypes.STRING,
        allowNull: false
    },
    idno: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password : {
        type: DataTypes.STRING,
        allowNull: false,
        //set(value) {
        //    this.setDataValue('password', hash(value));
        //}
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
        allowNull: false,
    },
    college: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    
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
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    approved: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
});

const Transfer = connection.define('Transfer', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

const Return = connection.define('Return', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
    }
});

const Borrow = connection.define('Borrow', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }
    ,
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
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
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
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
    spec : {
        type: DataTypes.STRING,
        allowNull: true
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
    }
});

Employee.belongsToMany(Role, { through: 'EmployeeRole' });
Role.belongsToMany(Employee, { through: 'EmployeeRole' });

Department.belongsTo(Employee, {
    as: 'dephead',
    foreignKey: 'headId',
    constraints: false
});

Employee.belongsTo(Department, {
    constraints: false,
    as : 'dep',
    //foreignKey: 'depId'
})

Issue.belongsTo(Employee, {
    as : "employee",
    foreignKey: 'emp_id'
})

Issue.belongsTo(Employee, {
    as : 'storeKeeper',
    foreignKey: 'store_keeper_id',
    constraints: false  
})

Issue.belongsTo(Employee,  {
    as : 'head',
    foreignKey: 'head_id',
    constraints: false 
})

Property.hasOne(Issue);  //make sure issue has many property
Issue.belongsTo(Property);

Transfer.belongsTo(Employee, {
    as : 'from',
    foreignKey: 'from_emp_id',
    constraints: false  
})

Transfer.belongsTo(Employee, {
    as : 'to',
    foreignKey: 'to_emp_id',
    constraints: false  
})

Transfer.belongsTo(Employee, {
    as : 'storeKeeper',
    foreignKey: 'store_keeper_id',
    constraints: false  
})

Property.hasOne(Transfer)
Transfer.belongsTo(Property)

Borrow.belongsTo(Employee, {
    as: 'giver',
    foreignKey: 'borrower_emp_id',
    constraints: false
})

Borrow.belongsTo(Employee, {
    as: 'taker',
    foreignKey: 'borrowed_to_emp_id',
    constraints: false
})

Property.hasOne(Borrow)
Borrow.belongsTo(Property)

Return.belongsTo(Employee, {
    as: 'storeKeeper',
    foreignKey: 'store_keeper_id',
    constraints: false
})

Return.belongsTo(Employee, {
    as: 'employee',
    foreignKey: 'emp_id',
    constraints: false
})
Property.hasOne(Return)
Return.belongsTo(Property)

LeaveIssue.belongsTo(Employee, {
    as : 'employee',
    foreignKey: 'emp_id',
    constraints: false
})

LeaveIssue.belongsTo(Employee, {
    as : 'storeKeeper',
    foreignKey: 'store_keeper_id',
    constraints: false
})

LeaveIssue.belongsTo(Employee, {
    as : 'purchaser',
    foreignKey: 'purchaser_id',
    constraints: false
})

Property.hasMany(LeaveIssue)
LeaveIssue.belongsTo(Property)

PurchaseRequest.belongsTo(Employee, {
    as: 'employee',
    foreignKey: 'emp_id',
    constraints: false
})

PurchaseRequest.belongsTo(Employee, {
    as: 'head',
    foreignKey: 'head_id',
    constraints: false
})

PurchaseRequest.belongsTo(Employee, {
    as: 'storeKeeper',
    foreignKey: 'store_keeper_id',
    constraints: false
})


Property.hasOne(PurchaseRequest)
PurchaseRequest.belongsTo(Property)

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

// connection.sync({ force: true });