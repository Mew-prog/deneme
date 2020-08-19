const Discord = require('discord.js');

let botid = ('700089027751182376') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`${client.user.username} İletişim Bilgileri`)
    .addField('Davet', 'Discord kullanıcıların sunucularını daha iyi hale getirmek için çabalayan bir ekibiz.')//ne kadar yetkili komutunuz varsa o kadar .addField('prefix+komut', 'açıklama/kullanım amacı') koyun
    .addField(`» Linkler`, `[<a:kalp52:737754577708908605>  Bot Davet Linki  <a:kalp52:737754577708908605>](https://discordapp.com/oauth2/authorize?client_id=700089027751182376&scope=bot&permissions=805314622
) **|** [Destek Sunucusu](https://discord.gg/AHe4u4m) **|** [Bota Oy Ver (Vote)](Yakında) **|** [Web Sitesi ( Yakında )]()`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz
    message.channel.send(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2,
};

exports.help = {
  name: 'davet',
  description: 'bot hakkında bilgi',
  usage: 'davetet'
};

