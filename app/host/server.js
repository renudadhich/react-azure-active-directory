const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;

const passport = require('passport');
const { options } = require('./msal-config');

const BearerStrategy = require('passport-azure-ad').BearerStrategy;

const bearerStrategy = new BearerStrategy(options, (token, done) => {
  // Send user info using the second argument
  done(null, {}, token);
});

const app = express();

app.use(passport.initialize());

passport.use(bearerStrategy);

app.use(cors());
// setup one end point authentication with passport
app.get('/sample-end-point',passport.authenticate('oauth-bearer', {session: false}),(req,res) => {
  console.log("get api point.");
  res.status(200).json({
    'name': 'Renu dadhich',
    'msg': "message is sent from get Api"
});
});
// router.post('/', passport.authenticate('oauth-bearer', {session: false}),
// (req, res) => {
//     console.log('Validated claims: ', req.authInfo);
//     subscriptionDetailFun.subscriptionDetailFun(req);
//     res.send('File processed Successfully');
// });
// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.listen(port, () => {
  console.log(`server is running at ${port}`);
});

module.exports = app;
