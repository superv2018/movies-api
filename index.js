const express = require('express');
const app = express();
const cors = require('cors')
const logger = require('morgan')
const PORT = 3001;

app.use(cors());

//import route
const getsRoute = require('./route/gets')

app.use('/api/data', getsRoute)
app.use(logger('combined'))




app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT)
})