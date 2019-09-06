var express = require('express')

var app = express()

app.listen(3000, function(err){
    if(err) {
        console.log('Server Error!')
    }
    console.log('Server is running......')
})

app.get('/', function(req, res){
    res.send('long time no see')
})