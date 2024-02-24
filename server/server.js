const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const PORT = 3333;

const metricsRouter = require('./routes/metricsRouter');

// HANDLE PARSING OF REQUEST BODY
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// SERVE STATIC FILES
app.use(express.static(path.resolve(__dirname, '../client/public')));

// METRICS ROUTER
app.use('/metrics', metricsRouter);

// CATCH-ALL ROUTE HANDLER
app.use('/*', (req, res) => {
  return res.status(404).send('Page not found - 404');
});

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















