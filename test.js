var mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'db1'
})

connection.connect()

var sql = 'SELECT * FROM class'


function select() {
    connection.query(sql, function(err,ret){
        if(err){
            console.log('select error', err.message)
            return
        }
        console.log('running...')
        console.log()
        // return ret[1].Cno
    })
}

// var data = select()
select()