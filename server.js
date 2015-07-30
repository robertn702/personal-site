var
  express = require('express'),
  app = express(),
  path = require('path');

app.use(express.static(__dirname + '/web'));

require(__dirname + '/server/routes.js')(app);

app.listen(8080);

console.log('listening on port 8080');
