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

//pkg
const { Client, RichEmbed } = require("discord.js");
var { Util } = require("discord.js");
const {
  TOKEN,
  prefix,
  serverlogo,
  nameproject,
  colorbc,
  reactromm,
  reactro1mm,
  reactro2mm,
  CMD1
} = require("./config");
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
const hastebins = require("hastebin-gen");
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
      .setDescription(`\`My Prefix (${prefix})\``)
      .addField("cmd", `**brodcast**: \`${CMD1}\``)
      .setThumbnail(
        "http://www.emoji.co.uk/files/mozilla-emojis/objects-mozilla/11958-open-book.png"
      )
      .setFooter(
        "Made By Store 69",
        "https://cdn.discordapp.com/attachments/730228438043983973/777671948225740850/69.png"
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
  if (command == CMD1) {
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("**للأسف لا تمتلك صلاحية `ADMINISTRATOR`**");
    }
    if (!args) {
      return message.reply("**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**");
    }
    message.channel;
    let embed = new Discord.RichEmbed()
      .setColor("#ff0000")
      .setTitle(`message: **${args}** `)
      .setDescription(
        "▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ main ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬"
      )
      .addField("Send to all members", "👥", true)
      .addField("Send to all members without embld", "🤩", true)
      .addField("Send to this channel", "🌐", true)
      .addField("Send to this channel without embld", "💫", true)
      .addField("Cancel the message", "❌", true)
      .setThumbnail(
        "http://www.emoji.co.uk/files/mozilla-emojis/objects-mozilla/11958-open-book.png"
      )
      .setFooter(
        "devloper ! Ryo#7984",
        "https://cdn.discordapp.com/attachments/730228438043983973/777671948225740850/69.png"
      );

    message.channel.send(embed).then(m => {
      m.react("👥")
        .then(() => m.react("🤩"))
        .then(() => m.react("🌐"))
        .then(() => m.react("💫"))
        .then(() => m.react("❌"));

      let allFilter = (reaction, user) =>
        reaction.emoji.name == "👥" && user.id == message.author.id;
      let al2Filter = (reaction, user) =>
        reaction.emoji.name == "🤩" && user.id == message.author.id;
      let sendchanelFilter = (reaction, user) =>
        reaction.emoji.name == "🌐" && user.id == message.author.id;
      let sendchanesFilter = (reaction, user) =>
        reaction.emoji.name == "💫" && user.id == message.author.id;
      let noFiler = (reaction, user) =>
        reaction.emoji.name == "❌" && user.id == message.author.id;

      let all = m.createReactionCollector(allFilter);
      let al2 = m.createReactionCollector(al2Filter);
      let sendchanel = m.createReactionCollector(sendchanelFilter);
      let sendchanes = m.createReactionCollector(sendchanesFilter);
      let no = m.createReactionCollector(noFiler);

      all.on("collect", v => {
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
            msg.delete(10000);
          });
        message.guild.members.forEach(member => {
          let bc = new Discord.RichEmbed()
            .setColor(colorbc)
            .setThumbnail(serverlogo) //message.guild.iconURL
            .setAuthor(message.author.username, message.author.user)
            .addField("● From", message.guild.name, true)
            .addField("● TO", `<@${member.user.id}>`, true)
            .addField(":mega:Message", args)
            .setFooter(
              "Made By Store 69",
              "https://cdn.discordapp.com/attachments/730228438043983973/777671948225740850/69.png"
            );

          member.sendEmbed(bc);
          console.log("There is someone using the command: bc");
        });
      });
      al2.on("collect", v => {
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
            msg.delete(10000);
          });
        message.guild.members.forEach(member => {
          member.send(args);
          console.log("There is someone using the command: bc");
        });
      });
      sendchanel.on("collect", v => {
        m.delete();
        message.channel
          .sendMessage("", {
            embed: {
              title: `تم ارسال رسالتك`,
              description: ``,
              color: 3003135,
              footer: {}
            }
          })
          .then(msg => {
            msg.delete(10000);
          });
        if (!message.channel.guild)
          return message.channel
            .send("**هذا الأمر فقط للسيرفرات**")
            .then(m => m.delete(5000));
        if (!message.member.hasPermission("ADMINISTRATOR"))
          return message.channel.send(
            "**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`"
          );
        let say = new Discord.RichEmbed()
          .setColor("RANDOM")
          .setTitle(args)
          .setDescription("**Message🔼**")
          .setThumbnail(message.author.avatarURL)
          .setFooter(
            "mad by「ryo」シ#7987",
            "https://cdn.discordapp.com/avatars/557657031713095705/9617e32d32b5654d6ec87b899afb2c9c.png?size=2048"
          );

        message.channel.sendEmbed(say);
        message.delete();
      });
      sendchanes.on("collect", v => {
        m.delete();
        message.channel
          .sendMessage("", {
            embed: {
              title: `تم ارسال رسالتك`,
              description: ``,
              color: 3003135,
              footer: {}
            }
          })
          .then(msg => {
            msg.delete(10000);
          });
        if (!message.channel.guild)
          return message.channel
            .send("**هذا الأمر فقط للسيرفرات**")
            .then(m => m.delete(5000));
        if (!message.member.hasPermission("ADMINISTRATOR"))
          return message.channel.send(
            "**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`"
          );
        message.channel.send(args);
        message.delete();
      });
      no.on("collect", v => {
        m.delete();
        message.channel
          .sendMessage("", {
            embed: {
              title: `تم إلغاء رسالتك:x:`,
              description: ` محتوى الرسالة هو : **${args}**  :arrow_right: `,
              color: 16711680,
              footer: {}
            }
          })
          .then(msg => {
            msg.delete(10000);
          });
      });
    });
  }
});

let channelID = reactromm;

client.on("message", async message => {
  if (message.channel.id === channelID) {
    message.react(reactro1mm);
    message.react(reactro2mm);
  }
});

console.log("Bot is Online ");
///
//الاكواد
