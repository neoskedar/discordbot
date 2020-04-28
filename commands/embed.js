module.exports = {
	name: 'embed',
	description: 'Tests Embed Function',
	execute(message) {

        message.channel.send({embed: {
            color: 3447003,
            author: {
              //name: client.user.username,
              //icon_url: client.user.avatarURL
            },
            title: "This is an embed",
            url: "http://google.com",
            description: "This is a test embed to showcase what they look like and what they can do.",
            fields: [{
                name: "Fields",
                value: "They can have different fields with small headlines."
              },
              {
                name: "Masked links",
                value: "You can put [masked links](http://google.com) inside of rich embeds."
              },

              {
                name: "Markdown",
                value: "You can put all the *usual* **__Markdown__** inside of them."
              }
              
            ],
            image: {
                url: 'https://villagerdb.com/images/items/medium/acnh-nintendo-switch.png',
              },
            timestamp: new Date(),
            footer: {
              //icon_url: client.user.avatarURL,
              text: "© Example"
            }
          }
        });


	},
};