const Discord = require('discord.js');

const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const juke = new Discord.RichEmbed()
    .setColor('GOLD')
    .setAuthor(`E-Space | Yetkili Komutları`, client.user.avatarURL) 
      .setDescription('**[ Destek Sunucum <3  https://discord.gg/VCDyK2Z] <a:f_:737763580308619274> (Sunucuna Davet Etmeyi Unutma  <a:sag:737762587848081408>  .davet <a:sol:737762551651237899> )**')
.setThumbnail(client.user.avatarURL)
      .addField('**<a:onay:737754602589651105>  Genel  <a:onay:737766008403656766>**', '`icon`, `yavaşmod`, `davet`, `reboot`,  `yaz`, `uyar`, `ban`, `kick`, `banlist`, `duyuru`, `çekiliş`, `oylama`,  `Havadurumu`, `botkontrol`')
      .addField('** <a:onay:737766008403656766>  Gerekli Komutlar  <a:onay:737754602589651105> **', '`otorol-sistemi`, `sayaç-sistemi`, `kayıt-sistemi`,')
      .addField('**<a:onay:737754602589651105>  Eğlence Komutları  <a:onay:737766008403656766> **', ',  `zarat`, `dans`, `fbi`, `taş-kağıt-makas`, `soygunyap`, `sigara`, `saat`, `rip`, `atasözü`, `aşkölçer`, `ilginçbilgi`, `espri`, `boks-makinesi`, `avatar`, `doğrulukcesaret`, `tekerleme`,')
      .addField('**<a:onay:737766008403656766>  Diğer  <a:onay:737754602589651105>**', ',`davet-takip`, `davet-sıralaması`, `sayaç-ayarla`, `sayaç-kaldır`')
      .addField('**<a:onay:737754602589651105>  Sunucu Komutları  <a:onay:737766008403656766>**', '`ses-kanal-aç`, `rol-liste`, `temizle`, `botkoruma`, `güvenlik`, `rol-koruma`, `kanal-koruma`, `reklam-engelleme`')
    .setFooter(``, client.user.avatarURL)
    .setTimestamp()
    message.channel.send(juke).catch()


};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'yardım',
      category: 'Yardım',
      description: 'Yardım kategorilerini gösteir.',
};