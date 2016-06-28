const express = require('express')
const app = express()
const path = require('path')

let app = express();

app.get('/', (req,res) => {
  res.sendFile(path(__dirname,'index.html'));
})

app.listen(3000, () => {
  console.log('listening on port 3000');
})
