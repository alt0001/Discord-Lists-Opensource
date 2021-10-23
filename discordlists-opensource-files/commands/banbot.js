const BanBot = require('../models/banned-bots')
const Botinfo = require('../models/bots')

module.exports = {
  name: "banbot",
  description: "Ban a bot from the list.",

      async execute(client, message, args){
        const adminRole = message.guild.roles.cache.find(role => role.name === "Admin")
        if (!adminRole)    
        //return console.log("The Admin role does not exist");
        return message.reply('<:RedX:896116561176326155> The specified role inputted into code has not been found. <@&879715853468315688> We have contacted a developer to fix your issue.').then === console.log('The Admin role has not been found. Please either rename the Admin role or change this adminRole variable to match the new Admin role name.')

        if (!message.member.roles.cache.has(adminRole.id))    return message.reply("<:RedX:896116561176326155> You do not have significant permissions to use this command. \n \n**Required Permission:** ```Admin Role```");

        //message.channel.send('Ban Bot Coming Soon!')

        const bot = await Botinfo.findOne({ botid: args[0] })
       if(!bot){
           message.channel.send({
               embed:{
                   color:'RED',
                   title:'Error:',
                   description: '<:RedX:896116561176326155> The bot specified was not found in the database.'
               }
           })
           return
       }
      }
}