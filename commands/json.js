

module.exports = {
	name: 'json',
	description: 'Reads a JSON file!',
	execute(message) {
        'use strict';

        const fs = require('fs');
        
        fs.readFile('/home/ec2-user/Turnip-Bot/json/acnh-nintendo-switch.json', (err, data) => {
            if (err) throw err;
            let student = JSON.parse(data);
            console.log(student);

        });
        
        console.log('This is after the read call');
	},
};