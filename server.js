var
  express = require('express'),
  app = express(),
  path = require('path');

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/web/index.html'));
});

app.use(express.static(__dirname + '/web'));

app.listen(8080);

console.log('listening on port 8080');
