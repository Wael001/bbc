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
const {
  TOKEN,
  prefix,
  serverlogo,
  nameproject,
  colorbc,
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
      .setDescription(`\`My Prefix (${prefix})\``)
      .addField("cmd", `**brodcast**: \`${CMD1}\``)
      .setThumbnail(
        "http://www.emoji.co.uk/files/mozilla-emojis/objects-mozilla/11958-open-book.png"
      )
      .setFooter(
        "By Made Store 69",
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
              msg.delete(10000);
            });
          message.guild.members.forEach(member => {
            let bc = new Discord.RichEmbed()
              .setColor(colorbc)
              .setThumbnail(serverlogo) //message.guild.iconURL
              .setAuthor(message.author.username, message.author.avatarURL)
              .addField("● From", message.guild.name, true)
              .addField("● TO", `<@${member.user.id}>`, true)
              .addField(":mega:Message", args)
              .setFooter(
                "By Made Store 69",
                "https://cdn.discordapp.com/attachments/730228438043983973/777671948225740850/69.png"
              );

            member.sendEmbed(bc);
          });
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

module.exports = (client) => {
  const channelIds = [
     '723819742502191165', // testing
  ]

  const addReactions = (message) => {
    message.react('👍')

    setTimeout(() => {
      message.react('👎')
    }, 750)
  }

  client.on('message', async (message) => {
    if (channelIds.includes(message.channel.id)) {
      addReactions(message)
    } else if (message.content.toLowerCase() === '!poll') {
      await message.delete()

      const fetched = await message.channel.messages.fetch({ limit: 1 })
      if (fetched && fetched.first()) {
        addReactions(fetched.first())
      }
    }
  })
}

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
