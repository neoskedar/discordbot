module.exports = {
	name: 'fc-list',
	//aliases: 'args',
	description: 'List Friend Codes in database',
	args: false,
	//usage: '<Name> <Friend Code>',
	execute(message, args) {
        var db = require('/home/ec2-user/Turnip-Bot/db');

          var sql = "SELECT count(*) as total FROM friendCode";
          var query = db.query(sql, function(err, result) {
            count = result[0].total;
          var queryString = 'SELECT * FROM friendCode'; 
          db.query(queryString, function(err, rows, fields) {
              if (err) throw err;
           
              for (var i in rows) {
                  message.channel.send(rows[i].name + ': ' + rows[i].code);
              }
          })
          });
	
},
}