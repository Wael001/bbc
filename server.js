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
client.login(TOKEN);
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

const developers = ["371322321065213952"];

client.on("message", message => {
  if (message.content.startsWith(prefix + "help")) {
    let embed = new Discord.RichEmbed()
      .setColor("#0ca9ff")
      .setTitle("brodcast-v1-by-ryo")
      .setDescription(`\`My Prefix (${prefix})\``)
      .addField("cmd", `**brodcast**: \`${CMD1}\``)
      .setThumbnail(
        "https://cdn.discordapp.com/icons/754640454598787103/a_4766451f7cc4af28b9f1a4368d0bfc07.gif?size=1024"
      )
      .setFooter(
        "devloper Mody#2003",
        "https://cdn.discordapp.com/avatars/371322321065213952/a_baf60d7ea7ef9b3858fde8a31d2b8901.gif?size=1024"
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
      .setColor("#0ca9ff")
      .setTitle(`message: **${args}** `)
      .setDescription("▬▬▬▬▬▬▬▬▬▬ main ▬▬▬▬▬▬▬▬▬▬")
      .addField("Send to all members", "1️⃣", true)
      .addField("Send to all members without embld", "2️⃣", true)
      .addField("Send to this channel", "3️⃣", true)
      .addField("Send to this channel without embld", "4️⃣", true)
      .addField("Cancel the message", "❌", true)
      .setThumbnail(
        "https://cdn.discordapp.com/icons/754640454598787103/a_4766451f7cc4af28b9f1a4368d0bfc07.gif?size=1024"
      )
      .setFooter(
        "devloper Mody#2003",
        "https://cdn.discordapp.com/avatars/371322321065213952/a_baf60d7ea7ef9b3858fde8a31d2b8901.gif?size=1024"
      );

    message.channel.send(embed).then(m => {
      m.react("1️⃣")
        .then(() => m.react("2️⃣"))
        .then(() => m.react("3️⃣"))
        .then(() => m.react("4️⃣"))
        .then(() => m.react("❌"));

      let allFilter = (reaction, user) =>
        reaction.emoji.name == "1️⃣" && user.id == message.author.id;
      let al2Filter = (reaction, user) =>
        reaction.emoji.name == "2️⃣" && user.id == message.author.id;
      let sendchanelFilter = (reaction, user) =>
        reaction.emoji.name == "3️⃣" && user.id == message.author.id;
      let sendchanesFilter = (reaction, user) =>
        reaction.emoji.name == "4️⃣" && user.id == message.author.id;
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
            .setAuthor(message.author.username, message.author.AvatarURL)
            .addField("● From", message.guild.name, true)
            .addField("● TO", `<@${member.user.id}>`, true)
            .addField(":mega:Message", args)
            .setFooter(
              "devloper Mody#2003",
              "https://cdn.discordapp.com/avatars/371322321065213952/a_baf60d7ea7ef9b3858fde8a31d2b8901.gif?size=1024"
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
            "devloper Mody#2003",
            "https://cdn.discordapp.com/avatars/371322321065213952/a_baf60d7ea7ef9b3858fde8a31d2b8901.gif?size=1024"
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
