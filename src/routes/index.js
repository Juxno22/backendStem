const administrator = require('../controllers/admin');
const createSummons = require('../controllers/createSummons');
const editSummons = require('../controllers/editSummons');
const mainDashboard = require('../controllers/main');
const maintenance = require('../controllers/maintenance');
const reports = require('../controllers/reports');
const rubric = require('../controllers/rubric');
const login = require('../controllers/signin');
const summons = require('../controllers/summons');

function createRoutes(app){
    app.use('/administrador', administrator);
    app.use('/createSummons', createSummons);
    app.use('/editSummons', editSummons);
    app.use('/mainDashboard', mainDashboard);
    app.use('/maintenance', maintenance);
    app.use('/reports', reports);
    app.use('/rubric', rubric);
    app.use('/signin', login);
    app.use('/summons', summons);
};
module.exports = createRoutes;