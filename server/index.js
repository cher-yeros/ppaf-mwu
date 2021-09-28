const express = require('express')
const app = express()
app.use(express.json());
 
const head = require('./routes/head')
const purchaser = require('./routes/purchaser')
const staff = require('./routes/staff')
const storeKeeper = require('./routes/store-keeper')
const admin = require('./routes/admin')


// add login and register
app.use('/api/head', head);
app.use('/api/purchaser', purchaser);
app.use('/api/staff', staff);
app.use('/api/store-keeper', storeKeeper);
app.use('/api/sa',admin)
 
app.listen(3000)

console.log('Server is listening ')