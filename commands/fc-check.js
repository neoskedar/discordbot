module.exports = {
	name: 'fc-check',
	//aliases: 'args',
	description: 'Add Friend Code to database',
	args: false,
	usage: '<Name> <Friend Code>',
	execute(message, args) {
    var db = require('/home/ec2-user/Turnip-Bot/db');

          var sql = "SELECT count(*) as total FROM friendCode";
          var query = db.query(sql, function(err, result) {
            count = result[0].total;
          var queryString = 'SELECT * FROM friendCode'; 
          db.query(queryString, function(err, rows, fields) {
              if (err) throw err;
           
              for (var i in rows) {
				  message.channel.send(rows[i].userId);
				  if ((rows[i].userId) == message.author.id) {
					  message.channel.send("Entry already exists")
				  }
              }
          })
          });
	
},
}
