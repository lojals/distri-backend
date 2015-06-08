var deployd = require('deployd');

var options = {
  port:process.env.PORT || 3000,
  db:{
    port:43982,              //
    host:"ds043982.mongolab.com", //
    name:"heroku_app37662497",      //
    credentials:{
      username:"distrito_admin", //  /
      password:"-*D1Str1t050N1C0*-"  // /
    }
  }
};

var dpd = deployd(options);
dpd.listen();
