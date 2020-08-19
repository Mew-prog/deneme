const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {
 var cevaplar = ['<a:onay:737922223200796733>   Boks Makinesi Sonucu : **Boks makinesi kırıldı :D=3000** !', 
                 '<a:onay:737922223200796733>   Boks Makinesi Sonucu : **Çok yavaş vurdun bir daha dene :smile: 100** !', 
                 '<a:onay:737922223200796733>   Boks Makinesi Sonucu : **Eh,yani 900** !', 
                 '<a:onay:737922223200796733>   Boks Makinesi Sonucu : **1000** !',
                 '<a:onay:737922223200796733>   Boks Makinesi Sonucu : **Acayip yavaş vurdun :nauseated_face: =50** !', 
                 '<a:onay:737922223200796733>   Boks Makinesi Sonucu : **Çok iyi! :boxing_glove: =2000** !', 
                 '<a:onay:737922223200796733>   Boks Makinesi Sonucu : **Daha iyisini yapabilirsin! :muscle: =700** !',
                 '<a:onay:737922223200796733>   Boks Makinesi Sonucu : **Daha iyisini yapabilirsin! :muscle: = 550** !', 
                 '<a:onay:737922223200796733>   Boks Makinesi Sonucu : **Niye 1000 değil :D=999** !', 
                 '<a:onay:737922223200796733>   Boks Makinesi Sonucu : **Orta! :crown:=1250** !', 
                 '<a:onay:737922223200796733>   Boks Makinesi Sonucu : **Yine iyisin :white_check_mark: =1150** !', 
                 '<a:onay:737922223200796733>   Boks Makinesi Sonucu : **Fena değil :smile: =1200** !'
                ];
 var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)]; 
 const ping = new Discord.RichEmbed()
 .setColor(2828)
 .setDescription(":boxing_glove: " + cevap)
 return  message.channel.sendEmbed(ping)
};

exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: ['boks-makinası'],
   permLevel: 0
 };

 exports.help = {
   name: 'boks-makinesi',
   description: 'Boks makinesine vurur.',
   usage: 'boks-makinesi'
}