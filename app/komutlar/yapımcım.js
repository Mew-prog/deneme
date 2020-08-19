const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor('RANDOM')
    .setTimestamp()
     .addField('**Yapımcım: **', ' <a:kalp52:737763580308619274>     <a:kalp52:737762587848081408>  <a:kalp52:737763549673291818>     @𝐇Ü𝐊Ü𝐌𝐃𝐀𝐑 ッ    〘 ☾★ 𝕸𝖊W𝕱X ☾★ 〙/13#0436    <a:kalp52:737763549673291818>  <a:kalp52:737762551651237899>  <a:kalp52:737763580308619274>  ')
     .addField('**Yapımcım: **', '<a:kalp52:737763580308619274>   <a:kalp52:737762587848081408>  <a:kalp52:737763549673291818>  @BestKnife#4092  <a:kalp52:737763549673291818>  <a:kalp52:737762551651237899>  <a:kalp52:737763580308619274> ')
    .addField('**Ortak: **', '<a:kalp52:737763580308619274>   <a:kalp52:737762587848081408>   <a:kalp52:737763549673291818>  ᴮᵒᵗ ᵰȿ#6663     <a:kalp52:737763549673291818> <a:kalp52:737762551651237899>  <a:kalp52:737763580308619274> ')

    message.channel.send(ozelmesajkontrol) }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yapımcım'],
  permLevel: 0
};

exports.help = {
  name: 'yapımcım',
  description: 'Yapimcimi Gosterir.',
  usage: 'yapimcim'
};




