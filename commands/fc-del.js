module.exports = {
	name: 'fc-del',
	//aliases: 'args',
	description: 'Delete Friend Code to database',
	args: false,
	//usage: '<Name> <Friend Code>',
	execute(message, args) {
    
        var db = require('/home/ec2-user/Turnip-Bot/db');
          var sql = "DELETE FROM friendCode WHERE userID  = '" + message.author.id + "'";        
          db.query(sql, function (err, result) {
            if (err) throw err;
          });
          return message.channel.send(`Deleted`);
	
},
}
