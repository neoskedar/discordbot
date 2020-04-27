

module.exports = {
	name: 'json',
	description: 'Reads a JSON file!',
	execute(message) {
        const fetch = require('node-fetch');
      //  var fs = require('fs');
        //var json = JSON.parse(fs.readFileSync('/home/ec2-user/Turnip-Bot/json/acnh-nintendo-switch.json', 'utf8'));

          //  console.log(json.games.nh.sellPrice.value);

            fetch('https://raw.githubusercontent.com/jefflomacy/villagerdb/master/data/items/acnh-nintendo-switch.json')
             //raw content for the 1UP Cap, fetched from https://raw.githubusercontent.com/jefflomacy/villagerdb/master/data/items/1-up-cap.json
            .then(response => response.json())
            .then(data => {
            console.log(data.games.nh.sellPrice.value);
            })
            .catch(error => console.error(error))

	},
};