const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static(path.resolve(__dirname, '../client/public')));

//Global error handler
app.use((err, req, res, next) => {
    const defaultErr = {
        log: 'Express error handler caught unknown middleware error',
        status: 500,
        message: {err: 'An error occurred'}
    }
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
});



app.listen(PORT, () => {console.log(`Listening in Port ${PORT}...`)});



module.exports = app;















