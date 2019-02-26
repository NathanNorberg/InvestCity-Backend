const adminMinor = require("../controllers/adminMinor.js")
const adminNews = require("../controllers/adminNews.js")
const adminSuper = require("../controllers/adminSuper.js")
const investors = require("../controllers/investors.js")
const investments = require("../controllers/investments.js")
const investorEntities = require("../controllers/investorEntities.js")
const investorInvestmentNotes = require("../controllers/investorInvestmentNotes.js")
const investmentInvestors = require("../controllers/investmentInvestors.js")
const login_register = require("../controllers/login_register.js")
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET || 'investcity'


module.exports = (app) => {

//WITHIN getAllSituations, MAKE JOIN KNEX CALL TO GRAB ALL SOLUTION_RATINGS AS WELL

//TOKEN NOT REQUIRED
    app.post('/adminLogin', login_register.adminLogin);
    app.post('/investorLogin', login_register.investorLogin);

    // app.use(verifyToken)

    //TOKEN REQUIRED

// Investors
    app.get('/investors', investors.getAllInvestors);
    app.post('/investors/addInvestors', investors.addInvestors);
    app.patch('/investors/editInvestor/:id', investors.editInvestor);
    app.delete('/investors/deleteInvestor/:id', investors.deleteInvestor);

// Investor Entities
    app.get('/investorEntities', investorEntities.getAllInvestorEntities);
    app.post('/investorEntities/addInvestorEntity', investorEntities.addInvestorEntity);
    app.patch('/investorEntities/editInvestorEntity/:id', investorEntities.editInvestorEntity);
    app.delete('/investorEntities/deleteInvestorEntity/:id', investorEntities.deleteInvestorEntity);


// Admin
    app.get('/adminSuper', adminSuper.getAllAdminSuper);
    app.patch('/adminSuper/editAdminSuper/:id', adminSuper.editAdminSuper);
    // app.delete('/adminSuper/deleteAdminSuper/:id', adminSuper.deleteAdminSuper);

// Admin Minor
    app.get('/adminMinorRegister', login_register.adminMinorRegister);
    app.get('/adminMinor', adminMinor.getAllAdminMinors);
    app.patch('/adminMinor/editAdminMinor/:id', adminMinor.editAdminMinor);
    app.delete('/adminMinor/deleteAdminMinor/:id', adminMinor.deleteAdminMinor);


// Investments
    app.get('/investments', investments.getAllInvestments);
    app.post('/investments/addInvestment', investments.addInvestment);
    app.patch('/investments/editInvestment/:id', investments.editInvestment);
    app.delete('/investments/deleteInvestment/:id', investments.deleteInvestment);

// Admin News
    app.get('/adminNews', adminNews.getAdminNews);
    app.post('/adminNews/addAdminNews', adminNews.addAdminNews);
    app.patch('/adminNews/editAdminNews/:id', adminNews.editAdminNews);
    app.delete('/adminNews/deleteAdminNews/:id', adminNews.deleteAdminNews);


// Investment Investors
    app.get('/investmentInvestors', investmentInvestors.getAllInvestmentInvestors);
    app.post('/investmentInvestors/addInvestmentInvestor', investmentInvestors.addInvestmentInvestor);
    app.patch('/investmentInvestors/editInvestmentInvestor/:id', investmentInvestors.editInvestmentInvestor);
    app.delete('/investmentInvestors/deleteInvestmentInvestor/:id', investmentInvestors.deleteInvestmentInvestor);

// Investor Investment Notes
    app.get('/investorInvestmentNotes', investorInvestmentNotes.getAllInvestorInvestmentNotes);
    app.post('/investorInvestmentNotes/addInvestorInvestmentNote', investorInvestmentNotes.addInvestorInvestmentNote);
    app.patch('/investorInvestmentNotes/editInvestorInvestmentNote/:id', investorInvestmentNotes.editInvestorInvestmentNote);
    app.delete('/investorInvestmentNotes/deleteInvestorInvestmentNote/:id', investorInvestmentNotes.deleteInvestorInvestmentNote);

}

function verifyToken(req, res, next) {

    // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token || req.headers['token'];

    // decode token
    if (token) {

      // verifies secret and checks exp
      jwt.verify(token, secret, function(err, decoded) {
        if (err) {
          return res.status(401).send({message: 'Token incorrect, You are not authorized to view that resource, Please log in to continue.' });
        } else {
          // if everything is good, save to request for use in other routes
          delete decoded.password;
          req.decoded = decoded;
          next();
        }
      });

    } else {

      // if there is no token
      // return an error
      return res.status(401).send({
          message: 'No Token, You are not authorized to view that resource, Please log in to continue.'
      });

    }
}
