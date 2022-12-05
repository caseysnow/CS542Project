const express = require('express');
const routes = require('./routes')
const app = express()

const hostname = '127.0.0.1';
const port = 3000

app.use(express.json());
app.use(express.static('server'));
app.use('/', routes)
  
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  }); 

