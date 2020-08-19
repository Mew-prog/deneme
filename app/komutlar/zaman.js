exports.run = async(client, message, args) => {
    var DURATION    = require("humanize-duration")
    var USER        = client.users.get(args[0]) || message.mentions.users.first(), m3rt = ["İsminizi ve kodunuzu"];
    if (!USER) return SEND("**Lütfen bir kullanıcının ID'sini yaz veya etiketle!**", 10000)
    var TIMESTAMP   = Date.now() - USER.createdAt.getTime()
    var RESULT      = DURATION(TIMESTAMP, { language: "tr", round: true, conjunction: " , ", serialComma: false })
    SEND(`>>> **${USER.tag}** adlı kullanıcının;\n\nHesabı **${RESULT}** önce oluşturuldu!`, 25000)
 function SEND(string, number) {
    return message.channel.send(string).then(value => value.delete(number))}}
 exports.conf = { aliases: ["süre","kontrol-et","kontrolet","güvenlik"], permLevel: 2}
 exports.help = { name: "kontrol" }
