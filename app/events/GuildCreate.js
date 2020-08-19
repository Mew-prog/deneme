const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('quick.db');  

module.exports = guild =>{
    db.set(`sunucu.${guild.id}.dil`, "en")  
}
