const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {
 message.delete();
    message.guild.createChannel(`talep-${message.author.username}`, 'text').then(ch => {
        ch.overwritePermissions(message.member.roles.first(),{
            VIEW_CHANNEL: false,
        }).catch()
        message.guild.roles.forEach((role) => {
            if (role.hasPermission("BAN_MEMBERS")) {
                ch.overwritePermissions(role,{
                    VIEW_CHANNEL: true,
                }).catch()
                ch.overwritePermissions(message.author.id,{
                    VIEW_CHANNEL: true,
                }).catch()
            }
        })

        const embed = new Discord.RichEmbed()
        .setTitle(`» Hey ${message.author.username} !`)
        .setAuthor("» SonOyuncu - Eğlence ve Sohbet")
        .setDescription("**Buradaki destek ekibimiz sizinle ilgilenecektir.\nDestek talebini iptal etmek için [.iptal](https://discord.gg/2fUy6uj) yazabilirsin!**")
        .setFooter('SonOyuncu - Eğlence ve Sohbet', client.user.avatarURL)
        .setTimestamp()
        ch.send(embed).catch()
        ch.send("En Kısa Zaman İçinde İlgilenecegiz")
        ch.send("istediginizi yazın")
        ch.awaitMessages((msg)=> {
            if (msg.content === ".iptal") {
                ch.send("`Talebiniz iptal ediliyor!`").then(()=>{
                    setTimeout(()=> {
                        ch.delete().catch()
                    },1000)
                });
            }
        },{time:86400000})
    })
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['talep'],
  permLevel: 0,
  kategori: "bot",
};

exports.help = {
  name: 'talep',
  description: 'Destek talebi açar.',
  usage: '/talep'
};
