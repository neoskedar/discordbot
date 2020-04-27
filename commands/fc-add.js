module.exports = {
	name: 'fc-add',
	//aliases: 'args',
	description: 'Add Friend Code to database',
	args: true,
	usage: '<Name> <Friend Code>',
	execute(message, args) {
    var db = require('/home/ec2-user/Turnip-Bot/db');

    var test = 0; 

    function checkExist(){

      var sql = "SELECT count(*) as total FROM friendCode";
      var query = db.query(sql, function(err, result) {
        count = result[0].total;
      var queryString = 'SELECT * FROM friendCode'; 
      db.query(queryString, function(err, rows, fields) {
          if (err) throw err;
       
          for (var i in rows) {
      //message.channel.send(rows[i].userId);
      if (args.length > 2) {
        return message.channel.send(`You entered too many arguements!`);
       } else if ((rows[i].userId) == message.author.id) {
        message.channel.send("You already have a friend code in the database!")
        test = 1;
        //console.log(test);
        return test;
        
      } 
    

      //return message.channel.send(`Added: ${args[0]} ${args[1]}`);
          }
      })
      });	
    }

    function addCode(){
      //console.log(test)
      if (test==0) {
          //console.log(test);
        var sql = "INSERT INTO friendCode (name, code, userId) VALUES ('" + args[0] + "', '" + args[1] + "', '" + message.author.id + "')";        
        db.query(sql, function (err, result) {
         if (err) throw err;
        });
        return message.channel.send(`Added: ${args[0]} ${args[1]}`);
      }
    }
    checkExist();
    setTimeout(addCode, 1000);
},
}
