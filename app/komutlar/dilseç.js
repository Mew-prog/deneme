const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
    let secim = args[0];
    if (!secim) return message.channel.send(`Dil seç komutunu kullanmak için işlem argümanı gerekiyor. (\`${ayarlar.prefix}dilseç <TR/ENG/sıfırla/reset>\`)`)
    let islemler = ['TR', 'ENG', 'tr', 'eng', "sıfırla", "reset"]
    if (!islemler.includes(secim)) return message.channel.send(`Lütfen TR/ENG/sıfırla/reset seçeneklerinden birisini yazıp tekrar dene.`)
        
    if (secim == "TR") {
        db.set(`dil_${message.guild.id}`, "TR")
        message.channel.send(`Dil başarıyla TR olarak seçildi.`)
    }
    else if (secim == "ENG") {
        db.set(`dil_${message.guild.id}`, "ENG")
        message.channel.send(`Selected as ENG using language.`)
    }
    else if (secim == "sıfırla" || secim == "reset") {
        let dil = await db.fetch(`dil_${message.guild.id}`)
        if (!dil) return message.channel.send("Bu sunucuda Dil ayarlanmamış!")
        db.delete(`dil_${message.guild.id}`)
        message.channel.send(`Dil başarıyla sıfırlandı.`)
    }
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['dilsec'],
    permLevel: 3 // Kendinize göre ayarlayın
}

exports.help = {
    name: 'dilseç',
    description: 'Dil seçme sistemi prefix+dilseç <TR/ENG/sıfırla/reset>.',
    usage: 'dilseç'
}       