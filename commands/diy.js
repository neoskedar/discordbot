module.exports = {
	name: 'diy',
	description: 'List components of DIY recipe',
	args: true,
	usage: '<Item>',
	execute(message, args) {
        const fetch = require('node-fetch');
        //  var fs = require('fs');
          //var json = JSON.parse(fs.readFileSync('/home/ec2-user/Turnip-Bot/json/acnh-nintendo-switch.json', 'utf8'));
  
            //  console.log(json.games.nh.sellPrice.value);
  
              fetch('https://raw.githubusercontent.com/jefflomacy/villagerdb/master/data/items/' + args[0] + '.json')
               //raw content for the 1UP Cap, fetched from https://raw.githubusercontent.com/jefflomacy/villagerdb/master/data/items/1-up-cap.json
              .then(response => response.json())
              .then(data => {
                //message.channel.send('Results for: ' + data.name)
                //message.channel.send('Price is: ' + data.games.nh.buyPrices[0].value + ' ' + data.games.nh.buyPrices[0].currency);
                //message.channel.send('View item at: https://villagerdb.com/item/' + args[0] );

                message.channel.send({embed: {
                    color: 3447003,
                    author: {
                      //name: client.user.username,
                      //icon_url: client.user.avatarURL
                    },
                    title: data.name,
                    url: 'https://villagerdb.com/item/' + args[0] + '/',
                    //description: "This is a test embed to showcase what they look like and what they can do.",
                    fields: [{
                        name: "Components",
                        value: "Items would be here:",
                      },
                      //{
                        //name: "Orderable?",
                        //value: data.games.nh.orderable
                      //},

                     // {
                       // name: "Source",
                        //value: data.games.nh.sources[0]
                      //},
        
                      //{
                       // name: "Markdown",
                        //value: "You can put all the *usual* **__Markdown__** inside of them."
                      //}
                      
                    ],
                    image: {
                        url: 'https://villagerdb.com/images/items/full/' + args[0] + '.png',
                      },
                    timestamp: new Date(),
                    footer: {
                      //icon_url: client.user.avatarURL,
                      text: "© Sourced from www.villagerdb.com"
                    }
                  }
                });

              })
              .catch(error => console.error(error))
        //message.channel.send(`First argument: ${args[0]}`);
        

	},
};