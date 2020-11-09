const http = require("http");
const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`https://${nameproject}.glitch.me/`);
}, 280000);

// كل البكجات الي ممكن تحتجها في اي بوت
const { Client, RichEmbed } = require("discord.js");
var { Util } = require("discord.js");
const { TOKEN, prefix, serverlogo, nameproject, colorbc } = require("./config");
const client = new Client({ disableEveryone: true });
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss");
const fetchVideoInfo = require("youtube-info");
const botversion = require("./package.json").version;
const simpleytapi = require("simple-youtube-api");
const moment = require("moment");
const fs = require("fs");
const util = require("util");
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const jimp = require("jimp");
const { get } = require("snekfetch");
const guild = require("guild");
const dateFormat = require("dateformat"); //npm i dateformat
const YouTube = require("simple-youtube-api");
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const hastebins = require("hastebin-gen");
const getYoutubeID = require("get-youtube-id");
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const pretty = require("pretty-ms");
client.login(TOKEN);
const queue = new Map();
var table = require("table").table;
const Discord = require("discord.js");
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag} By RYO!`);
});

client.on("guildCreate", guild => {
  var embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(
      `BOT BRODCAST v1 BY RYO | bot: I have joined the server | Thanks for your confidence in Ryo`
    );
  guild.owner.send(embed);
});

const developers = ["557657031713095705"];

client.on("message", message => {
  if (message.content.startsWith(prefix + "help")) {
    let embed = new Discord.RichEmbed()
      .setColor("#ff0000")
      .setTitle("Bot Fivem brodcast")
      .setDescription(" ```My Prfix (-)``` ")
      .addField("cmd", "brodcast: bc")
      .setThumbnail(
        "http://www.emoji.co.uk/files/mozilla-emojis/objects-mozilla/11958-open-book.png"
      )
      .setFooter(
        "devloper ! Ryo#9999",
        "https://cdn.discordapp.com/avatars/557657031713095705/a_8531a8f0ab02f7bf3644b6ccce86ec1a.gif?size=1024"
      );

    message.channel.send(embed);
  }
});

client.on("message", async message => {
  var command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  if (!message.channel.guild) return;
  var args = message.content
    .split(" ")
    .slice(1)
    .join(" ");
  if (command == "bc") {
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("**للأسف لا تمتلك صلاحية `ADMINISTRATOR`**");
    }
    if (!args) {
      return message.reply("**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**");
    }
    message.channel
      .send(
        `**هل أنت متأكد من إرسالك البرودكاست؟\nمحتوى البرودكاست: \`${args}\`**`
      )
      .then(m => {
        m.react("✅").then(() => m.react("❌"));

        let yesFilter = (reaction, user) =>
          reaction.emoji.name == "✅" && user.id == message.author.id;
        let noFiler = (reaction, user) =>
          reaction.emoji.name == "❌" && user.id == message.author.id;

        let yes = m.createReactionCollector(yesFilter);
        let no = m.createReactionCollector(noFiler);

        yes.on("collect", v => {
          m.delete();
          message.channel
            .sendMessage("", {
              embed: {
                title: `تم ارسال رسالتك:ballot_box_with_check:   ... محتوى الرسالة هو : **${args}**  :arrow_right: `,
                description: ` وعدد مستلمين الرسالة: **${message.guild.memberCount}**:busts_in_silhouette:`,
                color: 3003135,
                footer: {}
              }
            })
            .then(msg => {
              msg.delete(3000);
            });
          message.guild.members.forEach(member => {
            let bc = new Discord.RichEmbed()
              .setColor(colorbc)
              .setThumbnail(serverlogo)
              .setAuthor(message.author.username, message.author.avatarURL)
              .addField("● From", message.guild.name, true)
              .addField("● TO", `<@${member.user.id}>`, true)
              .addField(":mega:Message", args)
              .setFooter(
                "devloper ! Ryo#9999",
                "https://cdn.discordapp.com/avatars/557657031713095705/a_8531a8f0ab02f7bf3644b6ccce86ec1a.gif?size=1024"
              );

            member.sendEmbed(bc);
          });
        });
        no.on("collect", v => {
          m.delete();
          message.channel
            .sendMessage("", {
              embed: {
                title: `تم ارسال إلغاء رسالتك:x:`,
                description: ` محتوى الرسالة هو : **${args}**  :arrow_right: `,
                color: 16711680,
                footer: {}
              }
            })
            .then(msg => {
              msg.delete(3000);
            });
        });
      });
  }
});


client.on("message", async message => {
    if (!message.guild || message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    if (message.content.startsWith(prefix + "bc")) {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply('You dont have Permissions.');
        if (message.guild.interval) return message.reply('**بث آخر قيد التشغيل ، الرجاء الانتظار حتى ينتهي**')
        let args = message.content
            .split(" ")
            .slice(1)
            .join(" ");
        if (!args)
            return message.reply('**يرجى إرسال رسالة بعد الأمر لإرسالها**');

        message.channel
            .send(
                ">>> **[1] جميع الاعضاء\n[2] الاعضاء المتصلين\n[3] الرتب الخاصة\n[0] الغاء الأمر**"
            )
            .then(m => {
                message.channel
                    .awaitMessages(msg => msg.author.id === message.author.id, {
                        max: 1,
                        time: 1000 * 60 * 2,
                        errors: ["time"]
                    })
                    .then(async (c) => {
                        var members = null;
                        if (c.first().content === "1") {
                            members = message.guild.members.array();
                            c.first().delete().catch (err => null);
                            m.delete().catch (err => null);
                        }
                        if (c.first().content === "2") {
                            members = message.guild.members
                                .filter(m => m.presence.status !== "offline").array();

                            c.first().delete().catch (err => null);
                            m.delete().catch (err => null);
                        }
                        if (c.first().content == "0") {
                            c.first().delete().catch (err => null);
                            m.delete().catch (err => null);
                            message.channel.send("**تم الغاء الامر بنجاح**");
                        }
                        if (c.first().content === "3") {
                            m.edit("**>>> ادخل اسم الرتبة من فضلك**").then(ms => {
                                message.channel
                                    .awaitMessages(msg => msg.author.id === message.author.id, {
                                        max: 1,
                                        time: 1000 * 60 * 2,
                                        errors: ["time"]
                                    })
                                    .then(async collected => {
                                        let role = message.guild.roles.find(
                                            role => role.name === collected.first().content
                                        );
                                        if (!role)
                                            return message.channel
                                                .send("**:x: لا استطيع العثور على الرتبة الخاصة بالرسالة**")
                                                .then(() => {
                                                    ms.delete().catch (err => null);
                                                    collected.first().delete().catch (err => null);
                                                });

                                        let roleID = role.id;
                                        members = message.guild.roles.get(roleID).members.array();
                                        if (members == null) return message.reply('**رقم غير صالح**');
                                        if (members.length == 0) return message.reply('**لم يتم العثور على الرقم.**');
                                        else {
                                            const msg = await message.channel.send(`**جاري إرسال الرسالة إلى ${members.length} عضواً...**`)
                                            var count = 0;
                                            var ycount = 0;
                                            var xcount = 0;
                                            message.guild.interval = await setInterval(() => {
                                                if (!members[count]) {
                                                    clearInterval(message.guild.inter);
                                                    msg.edit(new Discord.RichEmbed().setDescription(`** :mailbox_with_mail:  ؛ تم أرسال الرسالة الى  ${ycount} عضواً\n:lock: ؛ و لم أستطع أرسال الرسالة إلى ${xcount} عضواً**`).setTimestamp());
                                                    message.guild.interval = false;
                                                } else if (!members[count].user.bot) {
                                                    members[count]
          message.guild.members.forEach(member => {
            let bc = new Discord.RichEmbed()
              .setColor(colorbc)
              .setThumbnail(serverlogo)
              .setAuthor(message.author.username, message.author.avatarURL)
              .addField("● From", message.guild.name, true)
              .addField("● TO", `<@${member.user.id}>`, true)
              .addField(":mega:Message", args)
              .setFooter(
                "devloper ! Ryo#9999",
                "https://cdn.discordapp.com/avatars/557657031713095705/a_8531a8f0ab02f7bf3644b6ccce86ec1a.gif?size=1024"
              );

            member.sendEmbed(embed);
                                                        return xcount++;
                                                    });
                                                }
                                                count++;
                                            }, 500)
                                        }
                                        collected.first().delete();
                                        m.delete();
                                    }).catch(err => {
                                        return ms.delete().catch (err => null);
                                    })
                            });
                        };
                        if (['1', '2'].includes(c.first().content)) {
                            if (members == null) return message.reply('**رقم غير صالح**');
                            if (members.length == 0) return message.reply('**لم يتم العثور على الرقم.**');
                            else {
                                const msg = await message.channel.send(`**جاري إرسال الرسالة إلى ${members.length} عضواً...**`)
                                var count = 0;
                                var ycount = 0;
                                var xcount = 0;
                                message.guild.interval = await setInterval(() => {
                                    if (!members[count]) {
                                        clearInterval(message.guild.inter);
                                        msg.edit(new Discord.RichEmbed().setDescription(`** :mailbox_with_mail:  ؛ تم أرسال الرسالة الى  ${ycount} عضواً\n:lock: ؛ و لم أستطع أرسال الرسالة إلى ${xcount} عضواً**`).setTimestamp());
                                        message.guild.interval = false;
                                    } else if (!members[count].user.bot) {
                                        members[count].send(`${args}`).then(() => {
                                            ycount++;
                                        }).catch(err => {
                                            return xcount++;
                                        });
                                    }
                                    count++;
                                }, 500)
                            }
                        }


                    })
                    .catch((err) => {
                        return m.delete().catch (err => null);
                    });
            });
    } else if (message.content.startsWith(prefix + "setname")) {
        let args = message.content
            .split(" ")
            .slice(1)
            .join(" ");
        if (!message.author.id === "696338291229982820") return; ///تعديل مهم حط الايدي تبعك
        client.user.setUsername(args);
        message.channel.send(`تم تغيير الاسم الى ..**${args}** `);
    } else if (message.content.startsWith(prefix + "setavatar")) {
        let args = message.content
            .split(" ")
            .slice(1)
            .join(" ");
        if (!message.author.id === "696338291229982820") return; /// تعديل مهم حط الايدي تبعك
        client.user.setAvatar(args).catch(err => message.reply("send a valid url"));
        message.channel.send(`تم تغيير الصورة الى :**${args}** `);
    }
});


console.log("==================================");
console.log("1");
console.log("2");
console.log("3");
console.log("=========> Bot Online <=========");
console.log("========> TestBot <========");
console.log("=======> Token Bot **** <=======");
console.log("3");
console.log("2");
console.log("1");
console.log("====================================");
console.log("Bot Online 24/7");
///
//الاكواد
