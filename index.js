process.on("unhandledRejection", error => {
  return console.log(error)
}); // يمنع ايرور عن اطفاء البروجكت 
//
require("events").EventEmitter.defaultMaxListeners = 9999999999999999999999999999; // ايفنت
//
const express = require("express");
const app = express();

app.listen(() => console.log("we!"));
app.get('/', (req, res) => {
  res.send(`
  <body>
  <center><h1>we!!<h1><p>we!
  </body>`)
});
app.listen(8000, function () {
  console.log('Example app listening on port 8000!');
 });
//
const Discord = require("discord.js");
const {
  MessageActionRow,
  MessageButton,
  Client,
  Intents,
  TextInputComponent,
} = require("discord.js");
const embed = new Discord.MessageEmbed();
const discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const ms = require("ms");
const { joinVoiceChannel } = require('@discordjs/voice');
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const moment = require("moment")
require("moment-duration-format");
//
const Database = require("st.db")
const db = new Database({path: "database.json"})
const dbb = new Database({path: "tf3el.json"})
const dbp = new Database({path: "points.json"})
const dbt = new Database({path: "ticket.json"})
const dbf9l = new Database({path: "m69ol.json"})
//
const dbm = require('pro.db')
// بكج
let owner = ['497796195104718888']
//
const client = new Client({
  partials: ["CHANNEL"],
  intents: [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MESSAGES,
    Discord.Intents.FLAGS.GUILD_MEMBERS,
    Discord.Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
    Discord.Intents.FLAGS.GUILD_PRESENCES,
    Discord.Intents.FLAGS.GUILD_INVITES,
    Discord.Intents.FLAGS.GUILD_BANS,
    Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Discord.Intents.FLAGS.GUILD_INTEGRATIONS,
    Discord.Intents.FLAGS.GUILD_MESSAGE_TYPING,
    Discord.Intents.FLAGS.GUILD_VOICE_STATES,
    Discord.Intents.FLAGS.GUILD_WEBHOOKS,
    Discord.Intents.FLAGS.DIRECT_MESSAGES,
    Discord.Intents.FLAGS.DIRECT_MESSAGE_TYPING,
    Discord.Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
  ],
});
// انتيست

const { DiscordModal, ModalBuilder, ModalField } = require("discord-modal");
DiscordModal(client);
const cooldown = new Set();
// تحضير
let line = new Discord.MessageAttachment("https://media.discordapp.net/attachments/982409404043374602/1088235782919164076/9596a469648c5614.jpg?width=1025&height=100");
// خط
const prefix = "-"; // البرفكس
//
client.on("ready", () => {
  console.log(`dn on a : ${client.user.tag}`);
  client.user.setActivity("لـ خدمة FBI", { type: "WATCHING" });
  client.user.setStatus("idle");
  setInterval(async () => {
    client.channels.fetch("980494400926924860")
      .then((channel) => {
        const VoiceConnection = joinVoiceChannel({
          channelId: channel.id,
          guildId: channel.guild.id,
          adapterCreator: channel.guild.voiceAdapterCreator
        });
      }).catch((error) => { return; });
  }, 1000)

});

 client.on("messageCreate", message => {
  if (message.content.startsWith(prefix+'إسم-البوت')) {
    if (!owner.includes(message.author.id)) return message.reply({ content: ' __** منت ستيفن لا تحاول هعهعهعهع **__ ' })
    let args = message.content.split(" ").slice(1).join(" ")
    if (!args) return message.reply({ content: ' __** إكتب الإسم الجديد ! **__ ' })
    client.user.setUsername(args)
    message.reply({ content: `__** ✅ | تم تغيير الإسم المستعار بنجاح

تم تغييره إلى : ${args} **__` })
  }
});

client.on("messageCreate", message => {
if (message.content.startsWith(prefix+'أفتار-البوت')) {
if (!owner.includes(message.author.id)) return message.reply({ content: ' __** منت ستيفن لا تحاول هعهعهعهع **__ ' });
let args = message.content.split(" ");
let avatar = args.slice(1).join(" ");
if (!avatar) return message.reply({ content: ` __** إرسل الأفتار ! **__ ` });
client.user.setAvatar(`${avatar}`);
message.reply({ content: ` __** تم تغيير أفتار البوت إلى : ${avatar} **__ ` });
}
});

client.on('messageCreate', message => {
  let guildID = message.content.split(' ')[1]
  let guild = client.guilds.cache.get(guildID)
  if (message.content.startsWith(prefix+'لفت')) {
    if (!owner.includes(message.author.id)) return message.reply({ content: ' __** منت ستيفن لا تحاول هعهعهعهع **__ ' })
    if (!guild) return message.reply({ content: '__** يا مصدع ارسل أيدي السيرفر ! **__' })
    message.reply({ content: `__** اخخخخخخخ وداعاً جاري تسجيل خروجي من السيرفر 

قود باي [${guild.name}] **__` })
    guild.leave()
  }
});

client.on("messageCreate", message => {
if(message.content === prefix +"سيرفراتي") {
if(!owner.includes(message.author.id)) return;
let servers = " "; 
let num = 0;
client.guilds.cache.forEach(server =>{
let members = server.members.cache
num = num + 1;
servers += `السيرفر الـ "\`${num}\`" إسم السيرفر : "${server.name}" | أيدي السيرفر : ${server.id} | عدد أعضاء السيرفر : "${server.memberCount}" \n`;})
//
let embed = new Discord.MessageEmbed()
.setColor('#32496b')
.setTitle('عدد سيرفراتي !!!')
.setDescription(`__** ${servers} **__`)
// message.reply({ embeds: [embed] });
message.reply({ content: ` ** ${servers} **` });
//
}
});

  client.on('messageCreate', async message => {
    if(message.author.bot) return;
    if(message.content === prefix+'توضيح') {
    let row = new Discord.MessageActionRow()
    .addComponents(
    new Discord.MessageSelectMenu()
    .setMinValues(0)
    .setMaxValues(1)
    .setPlaceholder('إضغط هنا لرؤية خريطة التوضيح')
    .setCustomId('todeh')
    .addOptions([
    {
    label: 'القسم الإداري',
    description: 'لـ عرض أوامر الإدارة يرجى الضغط هنا',
    emoji: '👮🏻‍♂️',
    value: 'tf'
    },
    {
      label: 'قسم اوامر التكت',
      description: 'لـ عرض أوامر التكت يرجى الضغط هنا',
      emoji: '👮🏻‍♂️',
      value: 'tkt'
      },
    {
      label: 'القسم العام',
      description: 'لـ عرض أوامر القسم العام يرجى الضغط هنا',
      emoji: '👮🏻‍♂️',
      value: '3am'
      }
    ])
    )
    let embed = new Discord.MessageEmbed()
    .setColor('#32496b')
    .setDescription('لـ رؤية خريطة التوضيح قم بالضغط على الزر اللذي بالأسفل و تحديد ما تريده')
   await message.reply({ embeds: [embed], components: [row] });
  }
    });

  client.on("interactionCreate" , interaction => {
    if (!interaction.isSelectMenu()) return;
    if (interaction.customId == "todeh") {
    if(interaction.values[0] == 'tf') {
      if (!interaction.member.permissions.has('ADMINISTRATOR'))
      if (!interaction.member.roles.cache.has('980494296320999424'))
      return interaction.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ', ephemeral: true });
      //
      let embed2 = new Discord.MessageEmbed()
      .setTitle(`الأوامر الإدارية :`)
      .setDescription(`__** FBI Police \n لـ ترقية شخص قم بكتابة : ${prefix}ترقية \n لـ تفعيل شخص قم بكتابة : ${prefix}تفعيل \n لـ فصل شخص قم بكتابة : ${prefix}فصل \n لـ قبول إستقالة شخص قم بكتابة : ${prefix}استقالة \n لـ إعطاء أو إزالة رتبة من عسكري قم بكتابة : role${prefix} \n مع منشن للعضو بعد كل أمر ! **__ `)
      .setFooter({text:`حاكم الدولة بالخدمة`})
      .setColor(`#32496b`)
      .setImage('https://media.discordapp.net/attachments/982409404043374602/1088235782919164076/9596a469648c5614.jpg?width=1025&height=100')
      interaction.reply({ embeds: [ embed2 ], ephemeral: true});
      }
      //
      if(interaction.values[0] == '3am') {
        let embed2 = new Discord.MessageEmbed()
        .setTitle(`الأوامر العامة :`)
        .setDescription(`__** FBI Police \n لـ معرفة تحاضير شخص او نفسك قم بكتابة : ${prefix}تحضيراتي \n لـ معرفة توب 20 تحاضير قم بكتابة : ${prefix}توب ! **__ `)
        .setFooter({text:`حاكم الدولة بالخدمة`})
        .setColor(`#32496b`)
        .setImage('https://media.discordapp.net/attachments/982409404043374602/1088235782919164076/9596a469648c5614.jpg?width=1025&height=100')
        interaction.reply({ embeds: [ embed2 ], ephemeral: true});
        }
        //
      if(interaction.values[0] == 'tkt') {
        if (!interaction.member.permissions.has('ADMINISTRATOR'))
        if (!interaction.member.roles.cache.has('980494296320999424'))
        return interaction.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ', ephemeral: true });
        //
        let embed7 = new Discord.MessageEmbed()
        .setTitle(`أوامر التكت :`)
.setDescription(`__** FBI Police \n لـ إدخال شخص إلى التكت قم بكتابة : ${prefix}اضافة . \n لـ طرد شخص من التكت قم بكتابة : ${prefix}طرد . \n لـ حذف تكت قم بكتابة : ${prefix}حذف \n لـ قفل تكت قم بكتابة : ${prefix}اقفال \n أو يمكنك إستخدام الأوامر الموجودة في أعلى التكت . \n أو منشن البوت . **__ `)
        .setFooter({text:`حاكم الدولة بالخدمة`})
        .setColor(`#32496b`)
        .setImage('https://media.discordapp.net/attachments/982409404043374602/1088235782919164076/9596a469648c5614.jpg?width=1025&height=100')
        interaction.reply({ embeds: [ embed7 ], ephemeral: true });
        }
    }
  });

client.on("messageCreate" , message => {
  if(message.author.bot) return;
  if(message.content.startsWith(prefix+"لوق-التفعيل")) {
    if(!message.member.permissions.has("ADMINISTRATOR")) return;
    let channel = message.mentions.channels.first()
    if(!channel) return message.reply({ content: ` __** منشن الشات ! **__ `} )
    dbb.set(`logtf3el_${message.guild.id}` , channel.id)
    message.reply({ content: ` > __** تم تعيين ${channel} كـ لوق تفعيل **__ ` })
  }
});


client.on("messageCreate", async message => {
  if(message.author.bot) return;
  if (message.content.startsWith(prefix+"تفعيل")) {
 let member = message.mentions.members.first();
     let user = message.mentions.members.first();
    //
      if (!message.member.permissions.has('ADMINISTRATOR'))
        //
        if (!message.member.roles.cache.has('980494296320999424'))
          return message.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ' });
    //
    if(!dbb.has(`logtf3el_${message.guild.id}`)) return message.reply({ content: ` __** يرجى تعيين لوق التفعيل قبل !
  \`${prefix}لوق-التفعيل\` **__ ` });
    //
      if (!member) return message.reply({ content: ' __** منشن العسكري **__ ' });
      if(message.author.id == user.id) return message.reply({ content: ` __** لا يمكنك تفعيل نفسك ! **__ ` });
      if(user.bot) return message.reply({ content: " __** لا يمكن تفعيل البوتات :x: **__ " });
        //
  let idps4 = message.content.split(' ').slice(2).join(' ')
  if(!idps4) return message.reply({ content: `__** يرجى كتابة أيدي العسكري **__ ` })
//
    let row = new Discord.MessageActionRow()
    .addComponents(
    new Discord.MessageSelectMenu()
    .setMinValues(0)
    .setMaxValues(1)
    .setPlaceholder('إضغط هنا لرؤية خريطة التفعيل')
    .setCustomId('tf3el')
    .addOptions([
      {
        label: 'القوات-الخاصة',
        description: 'لـ تفعيل شخص بـ قطاع القوات الخاصة',
        emoji: '💂🏻',
        value: '8wat5a9h'
        },
    {
    label: 'الشرطة-العسكرية',
    description: 'لـ تفعيل شخص بـ قطاع الشرطة العسكرية',
    emoji: '👮🏻‍♂️',
    value: 'amn3am'
    }
    ])
    )
    let embed = new Discord.MessageEmbed()
    .setColor('#32496b')
    .setDescription('__** لـ تفعيل عسكري قم بإختيار القطاع من الأسفل . **__')  
    let m = await message.reply({ embeds: [ embed ], components: [ row ] });
  
    let collector = m.createMessageComponentCollector({ filter: i => i.user.id === message.author.id, time: 3600000})
    
      collector.on('collect', async i => {
      if (i.customId == "tf3el") {
         if(i.values[0] === 'amn3am' || i.values[1] === 'amn3am') {
        if (!i.member.permissions.has('ADMINISTRATOR'))
        if (!i.member.roles.cache.has('980494296320999424'))
          return i.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ' , ephemeral: true });
        //
        let amn3am = i.guild.channels.cache.get("1033297231756926977")  
        let ch = dbb.get(`logtf3el_${message.guild.id}`)
        let logtf3el = message.guild.channels.cache.find(c => c.id == ch)
        //
        let da7leh = message.guild.roles.cache.get('980494313295331328');// الداخلية
        let amn = message.guild.roles.cache.get('980494327371399218');// القوات
        let t7t = message.guild.roles.cache.get('980494360539987978');// تحت التدريب
        //
        if(user.roles.cache.some(r=> r.id == da7leh)) return i.reply({ content: ` __** تم تفعيل العسكري مسبقاُ **__ ` , ephemeral: true });
        if(user.roles.cache.some(r=> r.id == amn)) return i.reply({ content: ` __** تم تفعيل العسكري مسبقاُ **__ ` , ephemeral: true });
        if(user.roles.cache.some(r=> r.id == t7t)) return i.reply({ content: ` __** تم تفعيل العسكري مسبقاُ **__ ` , ephemeral: true });
        //
        member.roles.add(da7leh);
        member.roles.add(amn);
        member.roles.add(t7t);
        //
        let count = dbb.fetch(`codeamn_${message.guild.id}`)
        let embed = new MessageEmbed()
        .setTitle("التفعيل الوزاري")
        .setDescription(` __** عزيزي العسكري : ${user} . \n صاحب الأيدي : \`${idps4}\` و الكود : U-${count || 0} . \n نحيطك علماَ بأنه قم تم تفعيلك في FBI Police و إعتبارك عسكري رسمياَ . \n و قد تم تفعيلك من الإداري : ${message.author} . \n و نرجى منك مراجعة القوانين و البروتوكولات لـ تجنب الإنذارات و الفصل . **__ `)
        .setImage('https://media.discordapp.net/attachments/982409404043374602/1088235782919164076/9596a469648c5614.jpg?width=1025&height=100')
        .setThumbnail(user.user.avatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor("#11e2e2")
        i.channel.send({ embeds: [embed] });
      //
  dbb.add(`pointsstaff_${message.author.id}`, 1)
  let countstaff = dbb.fetch(`pointsstaff_${message.author.id}`)
//
      dbb.add(`codeamn_${message.guild.id}`, 1)
      user.setNickname(`${idps4} ( U-${count || 0} )`);
      amn3am.send({ content: ` __** تم تفعيل العسكري : ${user} \n أيديه : \`${idps4}\` \n كوده العسكري : U-${count || 0} \n قطاعه : <@&980494327371399218> \n <@&980494296320999424> **__ `, files: ["https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png"] });
      //
      i.channel.send({ content: " __** تم تفعيل `العسكري` بـ نجاح **__ " });
      
      let embed2 = new Discord.MessageEmbed()
      .setColor(`#32496b`)
      .setDescription(` __** تم تفعيل : ${user} \n و الأيدي : ${idps4} \n و الكود العسكري : U-${count || 0} \n و إسمه بالكامل : ${user.nickname} \n من قبل الإداري : ${message.author} \n و نقاطه هيا : ${countstaff || 0} **__ `);

    logtf3el.send({ embeds: [embed2] });
    logtf3el.send({ files: [line] });  
           m.delete();  
    }   
    //
         if(i.values[0] === '8wat5a9h' || i.values[1] === '8wat5a9h') {
        if (!i.member.permissions.has('ADMINISTRATOR'))
        if (!i.member.roles.cache.has('980494296320999424'))
          return i.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ' , ephemeral: true });
        //
        let gwat5a9h = i.guild.channels.cache.get("1033297213255852072")  
        let ch = dbb.get(`logtf3el_${message.guild.id}`)
        let logtf3el = message.guild.channels.cache.find(c => c.id == ch)
        //
        let da7leh = message.guild.roles.cache.get('980494313295331328');// الداخلية
        let ha9h = message.guild.roles.cache.get('980494318580162590');// القوات
        let t7t = message.guild.roles.cache.get('980494360539987978');// تحت التدريب
        //
        if(user.roles.cache.some(r=> r.id == da7leh)) return i.reply({ content: ` __** تم تفعيل العسكري مسبقاُ **__ ` , ephemeral: true });
        if(user.roles.cache.some(r=> r.id == ha9h)) return i.reply({ content: ` __** تم تفعيل العسكري مسبقاُ **__ ` , ephemeral: true });
        if(user.roles.cache.some(r=> r.id == t7t)) return i.reply({ content: ` __** تم تفعيل العسكري مسبقاُ **__ ` , ephemeral: true });
        //
        member.roles.add(da7leh);
        member.roles.add(ha9h);
        member.roles.add(t7t);
        //
        let count = dbb.fetch(`code8wat_${message.guild.id}`)
        let embed = new MessageEmbed()
        .setTitle("التفعيل الوزاري")
        .setDescription(` __** عزيزي العسكري : ${user} . \n صاحب الأيدي : \`${idps4}\` و الكود : S-${count || 0} . \n نحيطك علماَ بأنه قم تم تفعيلك في FBI Police و إعتبارك عسكري رسمياَ . \n و قد تم تفعيلك من الإداري : ${message.author} . \n و نرجى منك مراجعة القوانين و البروتوكولات لـ تجنب الإنذارات و الفصل . **__ `)
.setImage('https://media.discordapp.net/attachments/982409404043374602/1088235782919164076/9596a469648c5614.jpg?width=1025&height=100')
        .setThumbnail(user.user.avatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor("#11e2e2")
        i.channel.send({ embeds: [embed] });
      //      
  dbb.add(`pointsstaff_${message.author.id}`, 1)
  let countstaff = dbb.fetch(`pointsstaff_${message.author.id}`)
//
      dbb.add(`code8wat_${message.guild.id}`, 1)
      user.setNickname(`${idps4} ( S-${count || 0} )`);
      gwat5a9h.send({ content: ` __** تم تفعيل العسكري : ${user} \n أيديه : \`${idps4}\` \n كوده العسكري : S-${count || 0} \n قطاعه : <@&980494318580162590> \n <@&980494296320999424> **__ `, files: ["https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png"] });
      //
      i.channel.send({ content: " __** تم تفعيل `العسكري` بـ نجاح **__ " });
      
      let embed2 = new Discord.MessageEmbed()
      .setColor(`#32496b`)
      .setDescription(` __** تم تفعيل : ${user} \n و الأيدي : ${idps4} \n و الكود العسكري : S-${count || 0} \n و إسمه بالكامل : ${user.nickname} \n من قبل الإداري : ${message.author} \n و نقاطه هيا : ${countstaff || 0} **__ `);
    
    logtf3el.send({ embeds: [embed2] });
    logtf3el.send({ files: [line] });
m.delete();  
    }
    }
    })
}});

client.on("messageCreate", async message => {
  if(message.author.bot) return;
  if (message.content.startsWith(prefix+"ترقية")) {
 let member = message.mentions.members.first();
     let user = message.mentions.members.first();
    //
      if (!message.member.permissions.has('ADMINISTRATOR'))
if (!message.member.roles.cache.has('980494296320999424'))
          return message.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ' });
    //
    if(!dbb.has(`logtf3el_${message.guild.id}`)) return message.reply({ content: ` __** يرجى تعيين لوق التفعيل قبل !
  \`${prefix}لوق-التفعيل\` **__ ` });
    //
      if (!member) return message.reply({ content: ' __** منشن العضو **__ ' });
     if(message.author.id == user.id) return message.reply({ content: ` __** لا يمكنك ترقية نفسك ! **__ ` });
      if(user.bot) return message.reply({ content: " __** لا يمكن ترقية البوتات :x: **__ " });
    //
    let row = new Discord.MessageActionRow()
    .addComponents(
    new Discord.MessageSelectMenu()
    .setMinValues(0)
    .setMaxValues(1)
    .setPlaceholder('إضغط هنا لرؤية خريطة الترقيات')
    .setCustomId('tr8eh')
    .addOptions([
      {
        label: 'تحت-التدريب',
        description: 'لـ ترقية شخص إلى جندي تحت التدريب',
        emoji: '👮🏻‍♂️',
        value: 't7taltdreb'
        },
    {
    label: 'جندي',
    description: 'لـ ترقية شخص إلى جندي',
    emoji: '👮🏻‍♂️',
    value: 'gnde'
    },
    {
      label: 'جندي-أول',
      description: 'لـ ترقية شخص إلى جندي أول',
      emoji: '👮🏻‍♂️',
      value: 'gndeaol'
      },
      {
        label: 'عريف',
        description: 'لـ ترقية شخص إلى عريف',
        emoji: '👮🏻‍♂️',
        value: '3ref'
        },
        {
          label: 'رقيب',
          description: 'لـ ترقية شخص إلى رقيب',
          emoji: '👮🏻‍♂️',
          value: 'r8eb'
          },
          {
            label: 'رقيب-أول',
            description: 'لـ ترقية شخص إلى رقيب أول',
            emoji: '👮🏻‍♂️',
            value: 'r8ebaol'
            },
            {
              label: 'ملازم',
              description: 'لـ ترقية شخص إلى ملازم',
              emoji: '👮🏻‍♂️',
              value: 'mlazm'
              },
              {
                label: 'ملازم-أول',
                description: 'لـ ترقية شخص إلى ملازم أول',
                emoji: '👮🏻‍♂️',
                value: 'mlazmaol'
                },
                {
                  label: 'عقيد',
                  description: 'لـ ترقية شخص إلى عقيد',
                  emoji: '👮🏻‍♂️',
                  value: '38ed'
                  },
                  {
                    label: 'لواء',
                    description: 'لـ ترقية شخص إلى لواء',
                    emoji: '👮🏻‍♂️',
                    value: 'lwaaa'
                    },
                    {
                      label: 'فريق',
                      description: 'لـ ترقية شخص إلى فريق',
                      emoji: '👮🏻‍♂️',
                      value: 'fre8'
                      },
                      {
                        label: 'فريق-أول',
                        description: 'لـ ترقية شخص إلى فريق أول',
                        emoji: '👮🏻‍♂️',
                        value: 'fre8aol'
                        }
    ])
    )
    let embed = new Discord.MessageEmbed()
    .setColor('#32496b')
    .setDescription('__** لـ ترقية عسكري قم بإختيار الرتبة من الأسفل . **__')  
    let m = await message.reply({ embeds: [ embed ], components: [ row ] });
  
    let collector = m.createMessageComponentCollector({ filter: i => i.user.id === message.author.id, time: 3600000})
    
      collector.on('collect', async i => {
      if (i.customId == "tr8eh") {
      if(i.values[0] === 't7taltdreb' || i.values[1] === 't7taltdreb') {
        if (!i.member.permissions.has('ADMINISTRATOR'))
        if (!i.member.roles.cache.has('980494296320999424'))
          return i.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ' , ephemeral: true });
        //
        let ch = dbb.get(`logtf3el_${message.guild.id}`)
        let logtf3el = message.guild.channels.cache.find(c => c.id == ch)
        //
        let t7t = message.guild.roles.cache.get('980494360539987978');
        let gnde = message.guild.roles.cache.get('980494359508164628');
        let gndeaol = message.guild.roles.cache.get('1005542090270318592');
        let href = message.guild.roles.cache.get('1005543033363767336');
        let r8eb = message.guild.roles.cache.get('980494355846561872');
        let r8ebaol = message.guild.roles.cache.get('1005542165721665717');
        let mlazm = message.guild.roles.cache.get('980494352495284326');
        let mlazmaol = message.guild.roles.cache.get('980494350624641155');
        let h8ed = message.guild.roles.cache.get('980494347491500034');
        let lwaaa = message.guild.roles.cache.get('980494345717305504');
        let fre8 = message.guild.roles.cache.get('980494341359411300');
        let fre8aol = message.guild.roles.cache.get('980494340516376606');
       //
        member.roles.add(t7t);
        member.roles.remove(gnde);
        member.roles.remove(gndeaol);
        member.roles.remove(href);
        member.roles.remove(r8eb);
        member.roles.remove(r8ebaol);
        member.roles.remove(mlazm);
        member.roles.remove(mlazmaol);
        member.roles.remove(h8ed);
        member.roles.remove(lwaaa);
        member.roles.remove(fre8);
        member.roles.remove(fre8aol);
        //
        let embed = new MessageEmbed()
        .setTitle("الترقيات الوزارية")
        .setDescription(` __** عزيزي العسكري : ${user} . \n يسرنا بأنه قم تم ترقيتك \n و لكن يرجى منك الإستمرار على هذا المجهود و ستصل إلى أعلى المراتب بإذن الله .\n و يرجى الحفاظ على القوانين و البورتوكولات و عدم الإغترار بنفسك و التصغير من زملائك . \n و قد تم ترقيتك من الإداري : ${message.author} . \n و مرةَ أخرى ; نتمنى لك التوفيق و المراتب العليا . **__ `)
.setImage('https://media.discordapp.net/attachments/982409404043374602/1088235782919164076/9596a469648c5614.jpg?width=1025&height=100')
        .setThumbnail(user.user.avatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor("#11e2e2")
        i.channel.send({ embeds: [embed] });
          //
      i.channel.send({ content: " __** تم ترقية `العسكري` بـ نجاح **__ " });
      
      let embed2 = new Discord.MessageEmbed()
      .setColor(`#32496b`)
      .setDescription(` __** تم ترقية : ${user} \n إلى : جندي تحت التدريب . \n من قبل الإداري : ${message.author} **__ `);
    
    logtf3el.send({ embeds: [embed2] });
    logtf3el.send({ files: [line] });
    m.delete();  
    message.delete();
    }
        //
          if(i.values[0] === 'gnde' || i.values[1] === 'gnde') {
        if (!i.member.permissions.has('ADMINISTRATOR'))
        if (!i.member.roles.cache.has('980494296320999424'))
          return i.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ' , ephemeral: true });
        //
        let ch = dbb.get(`logtf3el_${message.guild.id}`)
        let logtf3el = message.guild.channels.cache.find(c => c.id == ch)
        //
        let t7t = message.guild.roles.cache.get('980494360539987978');
        let gnde = message.guild.roles.cache.get('980494359508164628');
        let gndeaol = message.guild.roles.cache.get('1005542090270318592');
        let href = message.guild.roles.cache.get('1005543033363767336');
        let r8eb = message.guild.roles.cache.get('980494355846561872');
        let r8ebaol = message.guild.roles.cache.get('1005542165721665717');
        let mlazm = message.guild.roles.cache.get('980494352495284326');
        let mlazmaol = message.guild.roles.cache.get('980494350624641155');
        let h8ed = message.guild.roles.cache.get('980494347491500034');
        let lwaaa = message.guild.roles.cache.get('980494345717305504');
        let fre8 = message.guild.roles.cache.get('980494341359411300');
        let fre8aol = message.guild.roles.cache.get('980494340516376606');
       //
        member.roles.remove(t7t);
        member.roles.add(gnde);
        member.roles.remove(gndeaol);
        member.roles.remove(href);
        member.roles.remove(r8eb);
        member.roles.remove(r8ebaol);
        member.roles.remove(mlazm);
        member.roles.remove(mlazmaol);
        member.roles.remove(h8ed);
        member.roles.remove(lwaaa);
        member.roles.remove(fre8);
        member.roles.remove(fre8aol);
        //
        let embed = new MessageEmbed()
        .setTitle("الترقيات الوزارية")
        .setDescription(` __** عزيزي العسكري : ${user} . \n يسرنا بأنه قم تم ترقيتك \n و لكن يرجى منك الإستمرار على هذا المجهود و ستصل إلى أعلى المراتب بإذن الله .\n و يرجى الحفاظ على القوانين و البورتوكولات و عدم الإغترار بنفسك و التصغير من زملائك . \n و قد تم ترقيتك من الإداري : ${message.author} . \n و مرةَ أخرى ; نتمنى لك التوفيق و المراتب العليا . **__ `)
        .setImage('https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png')
        .setThumbnail(user.user.avatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor("#11e2e2")
        i.channel.send({ embeds: [embed] });
          //
      i.channel.send({ content: " __** تم ترقية `العسكري` بـ نجاح **__ " });
      
      let embed2 = new Discord.MessageEmbed()
      .setColor(`#32496b`)
      .setDescription(` __** تم ترقية : ${user} \n إلى : جندي  . \n من قبل الإداري : ${message.author} **__ `);
    
    logtf3el.send({ embeds: [embed2] });
    logtf3el.send({ files: ["https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png"] });
    m.delete();  
    message.delete();
    }
        //
              if(i.values[0] === 'gndeaol' || i.values[1] === 'gndeaol') {
        if (!i.member.permissions.has('ADMINISTRATOR'))
        if (!i.member.roles.cache.has('980494296320999424'))
          return i.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ' , ephemeral: true });
        //
        let ch = dbb.get(`logtf3el_${message.guild.id}`)
        let logtf3el = message.guild.channels.cache.find(c => c.id == ch)
        //
        let t7t = message.guild.roles.cache.get('980494360539987978');
        let gnde = message.guild.roles.cache.get('980494359508164628');
        let gndeaol = message.guild.roles.cache.get('1005542090270318592');
        let href = message.guild.roles.cache.get('1005543033363767336');
        let r8eb = message.guild.roles.cache.get('980494355846561872');
        let r8ebaol = message.guild.roles.cache.get('1005542165721665717');
        let mlazm = message.guild.roles.cache.get('980494352495284326');
        let mlazmaol = message.guild.roles.cache.get('980494350624641155');
        let h8ed = message.guild.roles.cache.get('980494347491500034');
        let lwaaa = message.guild.roles.cache.get('980494345717305504');
        let fre8 = message.guild.roles.cache.get('980494341359411300');
        let fre8aol = message.guild.roles.cache.get('980494340516376606');
       //
        member.roles.remove(t7t);
        member.roles.remove(gnde);
        member.roles.add(gndeaol);
        member.roles.remove(href);
        member.roles.remove(r8eb);
        member.roles.remove(r8ebaol);
        member.roles.remove(mlazm);
        member.roles.remove(mlazmaol);
        member.roles.remove(h8ed);
        member.roles.remove(lwaaa);
        member.roles.remove(fre8);
        member.roles.remove(fre8aol);
        //
        let embed = new MessageEmbed()
        .setTitle("الترقيات الوزارية")
        .setDescription(` __** عزيزي العسكري : ${user} . \n يسرنا بأنه قم تم ترقيتك \n و لكن يرجى منك الإستمرار على هذا المجهود و ستصل إلى أعلى المراتب بإذن الله .\n و يرجى الحفاظ على القوانين و البورتوكولات و عدم الإغترار بنفسك و التصغير من زملائك . \n و قد تم ترقيتك من الإداري : ${message.author} . \n و مرةَ أخرى ; نتمنى لك التوفيق و المراتب العليا . **__ `)
        .setImage('https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png')
        .setThumbnail(user.user.avatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor("#11e2e2")
        i.channel.send({ embeds: [embed] });
          //
      i.channel.send({ content: " __** تم ترقية `العسكري` بـ نجاح **__ " });
      
      let embed2 = new Discord.MessageEmbed()
      .setColor(`#32496b`)
      .setDescription(` __** تم ترقية : ${user} \n إلى : جندي أول . \n من قبل الإداري : ${message.author} **__ `);
    
    logtf3el.send({ embeds: [embed2] });
    logtf3el.send({ files: ["https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png"] });
    m.delete();  
    message.delete();
    }
        //
              if(i.values[0] === 't7taltdreb' || i.values[1] === 't7taltdreb') {
        if (!i.member.permissions.has('ADMINISTRATOR'))
        if (!i.member.roles.cache.has('980494296320999424'))
          return i.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ' , ephemeral: true });
        //
        let ch = dbb.get(`logtf3el_${message.guild.id}`)
        let logtf3el = message.guild.channels.cache.find(c => c.id == ch)
        //
        let t7t = message.guild.roles.cache.get('980494360539987978');
        let gnde = message.guild.roles.cache.get('980494359508164628');
        let gndeaol = message.guild.roles.cache.get('1005542090270318592');
        let href = message.guild.roles.cache.get('1005543033363767336');
        let r8eb = message.guild.roles.cache.get('980494355846561872');
        let r8ebaol = message.guild.roles.cache.get('1005542165721665717');
        let mlazm = message.guild.roles.cache.get('980494352495284326');
        let mlazmaol = message.guild.roles.cache.get('980494350624641155');
        let h8ed = message.guild.roles.cache.get('980494347491500034');
        let lwaaa = message.guild.roles.cache.get('980494345717305504');
        let fre8 = message.guild.roles.cache.get('980494341359411300');
        let fre8aol = message.guild.roles.cache.get('980494340516376606');
       //
        member.roles.remove(t7t);
        member.roles.remove(gnde);
        member.roles.remove(gndeaol);
        member.roles.add(href);
        member.roles.remove(r8eb);
        member.roles.remove(r8ebaol);
        member.roles.remove(mlazm);
        member.roles.remove(mlazmaol);
        member.roles.remove(h8ed);
        member.roles.remove(lwaaa);
        member.roles.remove(fre8);
        member.roles.remove(fre8aol);
        //
        let embed = new MessageEmbed()
        .setTitle("الترقيات الوزارية")
        .setDescription(` __** عزيزي العسكري : ${user} . \n يسرنا بأنه قم تم ترقيتك \n و لكن يرجى منك الإستمرار على هذا المجهود و ستصل إلى أعلى المراتب بإذن الله .\n و يرجى الحفاظ على القوانين و البورتوكولات و عدم الإغترار بنفسك و التصغير من زملائك . \n و قد تم ترقيتك من الإداري : ${message.author} . \n و مرةَ أخرى ; نتمنى لك التوفيق و المراتب العليا . **__ `)
        .setImage('https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png')
        .setThumbnail(user.user.avatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor("#11e2e2")
        i.channel.send({ embeds: [embed] });
          //
      i.channel.send({ content: " __** تم ترقية `العسكري` بـ نجاح **__ " });
      
      let embed2 = new Discord.MessageEmbed()
      .setColor(`#32496b`)
      .setDescription(` __** تم ترقية : ${user} \n إلى : عريف . \n من قبل الإداري : ${message.author} **__ `);
    
    logtf3el.send({ embeds: [embed2] });
    logtf3el.send({ files: ["https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png"] });
    m.delete();  
    message.delete();
    }
        //
              if(i.values[0] === 'r8eb' || i.values[1] === 'r8eb') {
        if (!i.member.permissions.has('ADMINISTRATOR'))
        if (!i.member.roles.cache.has('980494296320999424'))
          return i.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ' , ephemeral: true });
        //
        let ch = dbb.get(`logtf3el_${message.guild.id}`)
        let logtf3el = message.guild.channels.cache.find(c => c.id == ch)
        //
        let t7t = message.guild.roles.cache.get('980494360539987978');
        let gnde = message.guild.roles.cache.get('980494359508164628');
        let gndeaol = message.guild.roles.cache.get('1005542090270318592');
        let href = message.guild.roles.cache.get('1005543033363767336');
        let r8eb = message.guild.roles.cache.get('980494355846561872');
        let r8ebaol = message.guild.roles.cache.get('1005542165721665717');
        let mlazm = message.guild.roles.cache.get('980494352495284326');
        let mlazmaol = message.guild.roles.cache.get('980494350624641155');
        let h8ed = message.guild.roles.cache.get('980494347491500034');
        let lwaaa = message.guild.roles.cache.get('980494345717305504');
        let fre8 = message.guild.roles.cache.get('980494341359411300');
        let fre8aol = message.guild.roles.cache.get('980494340516376606');
       //
        member.roles.remove(t7t);
        member.roles.remove(gnde);
        member.roles.remove(gndeaol);
        member.roles.remove(href);
        member.roles.add(r8eb);
        member.roles.remove(r8ebaol);
        member.roles.remove(mlazm);
        member.roles.remove(mlazmaol);
        member.roles.remove(h8ed);
        member.roles.remove(lwaaa);
        member.roles.remove(fre8);
        member.roles.remove(fre8aol);
        //
        let embed = new MessageEmbed()
        .setTitle("الترقيات الوزارية")
        .setDescription(` __** عزيزي العسكري : ${user} . \n يسرنا بأنه قم تم ترقيتك \n و لكن يرجى منك الإستمرار على هذا المجهود و ستصل إلى أعلى المراتب بإذن الله .\n و يرجى الحفاظ على القوانين و البورتوكولات و عدم الإغترار بنفسك و التصغير من زملائك . \n و قد تم ترقيتك من الإداري : ${message.author} . \n و مرةَ أخرى ; نتمنى لك التوفيق و المراتب العليا . **__ `)
        .setImage('https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png')
        .setThumbnail(user.user.avatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor("#11e2e2")
        i.channel.send({ embeds: [embed] });
          //
      i.channel.send({ content: " __** تم ترقية `العسكري` بـ نجاح **__ " });
      
      let embed2 = new Discord.MessageEmbed()
      .setColor(`#32496b`)
      .setDescription(` __** تم ترقية : ${user} \n إلى : رقيب . \n من قبل الإداري : ${message.author} **__ `);
    
    logtf3el.send({ embeds: [embed2] });
    logtf3el.send({ files: ["https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png"] });
    m.delete();  
    message.delete();
    }
        //
              if(i.values[0] === 'r8ebaol' || i.values[1] === 'r8ebaol') {
        if (!i.member.permissions.has('ADMINISTRATOR'))
        if (!i.member.roles.cache.has('980494296320999424'))
          return i.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ' , ephemeral: true });
        //
        let ch = dbb.get(`logtf3el_${message.guild.id}`)
        let logtf3el = message.guild.channels.cache.find(c => c.id == ch)
        //
        let t7t = message.guild.roles.cache.get('980494360539987978');
        let gnde = message.guild.roles.cache.get('980494359508164628');
        let gndeaol = message.guild.roles.cache.get('1005542090270318592');
        let href = message.guild.roles.cache.get('1005543033363767336');
        let r8eb = message.guild.roles.cache.get('980494355846561872');
        let r8ebaol = message.guild.roles.cache.get('1005542165721665717');
        let mlazm = message.guild.roles.cache.get('980494352495284326');
        let mlazmaol = message.guild.roles.cache.get('980494350624641155');
        let h8ed = message.guild.roles.cache.get('980494347491500034');
        let lwaaa = message.guild.roles.cache.get('980494345717305504');
        let fre8 = message.guild.roles.cache.get('980494341359411300');
        let fre8aol = message.guild.roles.cache.get('980494340516376606');
       //
        member.roles.remove(t7t);
        member.roles.remove(gnde);
        member.roles.remove(gndeaol);
        member.roles.remove(href);
        member.roles.remove(r8eb);
        member.roles.add(r8ebaol);
        member.roles.remove(mlazm);
        member.roles.remove(mlazmaol);
        member.roles.remove(h8ed);
        member.roles.remove(lwaaa);
        member.roles.remove(fre8);
        member.roles.remove(fre8aol);
        //
        let embed = new MessageEmbed()
        .setTitle("الترقيات الوزارية")
        .setDescription(` __** عزيزي العسكري : ${user} . \n يسرنا بأنه قم تم ترقيتك \n و لكن يرجى منك الإستمرار على هذا المجهود و ستصل إلى أعلى المراتب بإذن الله .\n و يرجى الحفاظ على القوانين و البورتوكولات و عدم الإغترار بنفسك و التصغير من زملائك . \n و قد تم ترقيتك من الإداري : ${message.author} . \n و مرةَ أخرى ; نتمنى لك التوفيق و المراتب العليا . **__ `)
        .setImage('https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png')
        .setThumbnail(user.user.avatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor("#11e2e2")
        i.channel.send({ embeds: [embed] });
          //
      i.channel.send({ content: " __** تم ترقية `العسكري` بـ نجاح **__ " });
      
      let embed2 = new Discord.MessageEmbed()
      .setColor(`#32496b`)
      .setDescription(` __** تم ترقية : ${user} \n إلى : رقيب أول . \n من قبل الإداري : ${message.author} **__ `);
    
    logtf3el.send({ embeds: [embed2] });
    logtf3el.send({ files: ["https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png"] });
    m.delete();  
    message.delete();
    }
        //
              if(i.values[0] === 'mlazm' || i.values[1] === 'mlazm') {
        if (!i.member.permissions.has('ADMINISTRATOR'))
        if (!i.member.roles.cache.has('980494296320999424'))
          return i.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ' , ephemeral: true });
        //
        let ch = dbb.get(`logtf3el_${message.guild.id}`)
        let logtf3el = message.guild.channels.cache.find(c => c.id == ch)
        //
        let t7t = message.guild.roles.cache.get('980494360539987978');
        let gnde = message.guild.roles.cache.get('980494359508164628');
        let gndeaol = message.guild.roles.cache.get('1005542090270318592');
        let href = message.guild.roles.cache.get('1005543033363767336');
        let r8eb = message.guild.roles.cache.get('980494355846561872');
        let r8ebaol = message.guild.roles.cache.get('1005542165721665717');
        let mlazm = message.guild.roles.cache.get('980494352495284326');
        let mlazmaol = message.guild.roles.cache.get('980494350624641155');
        let h8ed = message.guild.roles.cache.get('980494347491500034');
        let lwaaa = message.guild.roles.cache.get('980494345717305504');
        let fre8 = message.guild.roles.cache.get('980494341359411300');
        let fre8aol = message.guild.roles.cache.get('980494340516376606');
       //
        member.roles.remove(t7t);
        member.roles.remove(gnde);
        member.roles.remove(gndeaol);
        member.roles.remove(href);
        member.roles.remove(r8eb);
        member.roles.remove(r8ebaol);
        member.roles.add(mlazm);
        member.roles.remove(mlazmaol);
        member.roles.remove(h8ed);
        member.roles.remove(lwaaa);
        member.roles.remove(fre8);
        member.roles.remove(fre8aol);
        //
        let embed = new MessageEmbed()
        .setTitle("الترقيات الوزارية")
        .setDescription(` __** عزيزي العسكري : ${user} . \n يسرنا بأنه قم تم ترقيتك \n و لكن يرجى منك الإستمرار على هذا المجهود و ستصل إلى أعلى المراتب بإذن الله .\n و يرجى الحفاظ على القوانين و البورتوكولات و عدم الإغترار بنفسك و التصغير من زملائك . \n و قد تم ترقيتك من الإداري : ${message.author} . \n و مرةَ أخرى ; نتمنى لك التوفيق و المراتب العليا . **__ `)
        .setImage('https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png')
        .setThumbnail(user.user.avatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor("#11e2e2")
        i.channel.send({ embeds: [embed] });
          //
      i.channel.send({ content: " __** تم ترقية `العسكري` بـ نجاح **__ " });
      
      let embed2 = new Discord.MessageEmbed()
      .setColor(`#32496b`)
      .setDescription(` __** تم ترقية : ${user} \n إلى : ملازم . \n من قبل الإداري : ${message.author} **__ `);
    
    logtf3el.send({ embeds: [embed2] });
    logtf3el.send({ files: ["https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png"] });
    m.delete();  
    message.delete();
    }
        //
              if(i.values[0] === 'mlazmaol' || i.values[1] === 'mlazmaol') {
        if (!i.member.permissions.has('ADMINISTRATOR'))
        if (!i.member.roles.cache.has('980494296320999424'))
          return i.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ' , ephemeral: true });
        //
        let ch = dbb.get(`logtf3el_${message.guild.id}`)
        let logtf3el = message.guild.channels.cache.find(c => c.id == ch)
        //
        let t7t = message.guild.roles.cache.get('980494360539987978');
        let gnde = message.guild.roles.cache.get('980494359508164628');
        let gndeaol = message.guild.roles.cache.get('1005542090270318592');
        let href = message.guild.roles.cache.get('1005543033363767336');
        let r8eb = message.guild.roles.cache.get('980494355846561872');
        let r8ebaol = message.guild.roles.cache.get('1005542165721665717');
        let mlazm = message.guild.roles.cache.get('980494352495284326');
        let mlazmaol = message.guild.roles.cache.get('980494350624641155');
        let h8ed = message.guild.roles.cache.get('980494347491500034');
        let lwaaa = message.guild.roles.cache.get('980494345717305504');
        let fre8 = message.guild.roles.cache.get('980494341359411300');
        let fre8aol = message.guild.roles.cache.get('980494340516376606');
       //
        member.roles.remove(t7t);
        member.roles.remove(gnde);
        member.roles.remove(gndeaol);
        member.roles.remove(href);
        member.roles.remove(r8eb);
        member.roles.remove(r8ebaol);
        member.roles.remove(mlazm);
        member.roles.add(mlazmaol);
        member.roles.remove(h8ed);
        member.roles.remove(lwaaa);
        member.roles.remove(fre8);
        member.roles.remove(fre8aol);
        //
        let embed = new MessageEmbed()
        .setTitle("الترقيات الوزارية")
        .setDescription(` __** عزيزي العسكري : ${user} . \n يسرنا بأنه قم تم ترقيتك \n و لكن يرجى منك الإستمرار على هذا المجهود و ستصل إلى أعلى المراتب بإذن الله .\n و يرجى الحفاظ على القوانين و البورتوكولات و عدم الإغترار بنفسك و التصغير من زملائك . \n و قد تم ترقيتك من الإداري : ${message.author} . \n و مرةَ أخرى ; نتمنى لك التوفيق و المراتب العليا . **__ `)
        .setImage('https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png')
        .setThumbnail(user.user.avatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor("#11e2e2")
        i.channel.send({ embeds: [embed] });
          //
      i.channel.send({ content: " __** تم ترقية `العسكري` بـ نجاح **__ " });
      
      let embed2 = new Discord.MessageEmbed()
      .setColor(`#32496b`)
      .setDescription(` __** تم ترقية : ${user} \n إلى : ملازم أول . \n من قبل الإداري : ${message.author} **__ `);
    
    logtf3el.send({ embeds: [embed2] });
    logtf3el.send({ files: ["https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png"] });
    m.delete();  
    message.delete();
    }
        //
              if(i.values[0] === 'h8ed' || i.values[1] === 'h8ed') {
        if (!i.member.permissions.has('ADMINISTRATOR'))
        if (!i.member.roles.cache.has('980494296320999424'))
          return i.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ' , ephemeral: true });
        //
        let ch = dbb.get(`logtf3el_${message.guild.id}`)
        let logtf3el = message.guild.channels.cache.find(c => c.id == ch)
        //
        let t7t = message.guild.roles.cache.get('980494360539987978');
        let gnde = message.guild.roles.cache.get('980494359508164628');
        let gndeaol = message.guild.roles.cache.get('1005542090270318592');
        let href = message.guild.roles.cache.get('1005543033363767336');
        let r8eb = message.guild.roles.cache.get('980494355846561872');
        let r8ebaol = message.guild.roles.cache.get('1005542165721665717');
        let mlazm = message.guild.roles.cache.get('980494352495284326');
        let mlazmaol = message.guild.roles.cache.get('980494350624641155');
        let h8ed = message.guild.roles.cache.get('980494347491500034');
        let lwaaa = message.guild.roles.cache.get('980494345717305504');
        let fre8 = message.guild.roles.cache.get('980494341359411300');
        let fre8aol = message.guild.roles.cache.get('980494340516376606');
       //
        member.roles.remove(t7t);
        member.roles.remove(gnde);
        member.roles.remove(gndeaol);
        member.roles.remove(href);
        member.roles.remove(r8eb);
        member.roles.remove(r8ebaol);
        member.roles.remove(mlazm);
        member.roles.remove(mlazmaol);
        member.roles.add(h8ed);
        member.roles.remove(lwaaa);
        member.roles.remove(fre8);
        member.roles.remove(fre8aol);
        //
        let embed = new MessageEmbed()
        .setTitle("الترقيات الوزارية")
        .setDescription(` __** عزيزي العسكري : ${user} . \n يسرنا بأنه قم تم ترقيتك \n و لكن يرجى منك الإستمرار على هذا المجهود و ستصل إلى أعلى المراتب بإذن الله .\n و يرجى الحفاظ على القوانين و البورتوكولات و عدم الإغترار بنفسك و التصغير من زملائك . \n و قد تم ترقيتك من الإداري : ${message.author} . \n و مرةَ أخرى ; نتمنى لك التوفيق و المراتب العليا . **__ `)
        .setImage('https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png')
        .setThumbnail(user.user.avatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor("#11e2e2")
        i.channel.send({ embeds: [embed] });
          //
      i.channel.send({ content: " __** تم ترقية `العسكري` بـ نجاح **__ " });
      
      let embed2 = new Discord.MessageEmbed()
      .setColor(`#32496b`)
      .setDescription(` __** تم ترقية : ${user} \n إلى : عقيد . \n من قبل الإداري : ${message.author} **__ `);
    
    logtf3el.send({ embeds: [embed2] });
    logtf3el.send({ files: ["https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png"] });
    m.delete();  
    message.delete();
    }
        //
              if(i.values[0] === 'lwaaa' || i.values[1] === 'lwaaa') {
        if (!i.member.permissions.has('ADMINISTRATOR'))
        if (!i.member.roles.cache.has('980494296320999424'))
          return i.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ' , ephemeral: true });
        //
        let ch = dbb.get(`logtf3el_${message.guild.id}`)
        let logtf3el = message.guild.channels.cache.find(c => c.id == ch)
        //
        let t7t = message.guild.roles.cache.get('980494360539987978');
        let gnde = message.guild.roles.cache.get('980494359508164628');
        let gndeaol = message.guild.roles.cache.get('1005542090270318592');
        let href = message.guild.roles.cache.get('1005543033363767336');
        let r8eb = message.guild.roles.cache.get('980494355846561872');
        let r8ebaol = message.guild.roles.cache.get('1005542165721665717');
        let mlazm = message.guild.roles.cache.get('980494352495284326');
        let mlazmaol = message.guild.roles.cache.get('980494350624641155');
        let h8ed = message.guild.roles.cache.get('980494347491500034');
        let lwaaa = message.guild.roles.cache.get('980494345717305504');
        let fre8 = message.guild.roles.cache.get('980494341359411300');
        let fre8aol = message.guild.roles.cache.get('980494340516376606');
       //
        member.roles.remove(t7t);
        member.roles.remove(gnde);
        member.roles.remove(gndeaol);
        member.roles.remove(href);
        member.roles.remove(r8eb);
        member.roles.remove(r8ebaol);
        member.roles.remove(mlazm);
        member.roles.remove(mlazmaol);
        member.roles.remove(h8ed);
        member.roles.add(lwaaa);
        member.roles.remove(fre8);
        member.roles.remove(fre8aol);
        //
        let embed = new MessageEmbed()
        .setTitle("الترقيات الوزارية")
        .setDescription(` __** عزيزي العسكري : ${user} . \n يسرنا بأنه قم تم ترقيتك \n و لكن يرجى منك الإستمرار على هذا المجهود و ستصل إلى أعلى المراتب بإذن الله .\n و يرجى الحفاظ على القوانين و البورتوكولات و عدم الإغترار بنفسك و التصغير من زملائك . \n و قد تم ترقيتك من الإداري : ${message.author} . \n و مرةَ أخرى ; نتمنى لك التوفيق و المراتب العليا . **__ `)
        .setImage('https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png')
        .setThumbnail(user.user.avatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor("#11e2e2")
        i.channel.send({ embeds: [embed] });
          //
      i.channel.send({ content: " __** تم ترقية `العسكري` بـ نجاح **__ " });
      
      let embed2 = new Discord.MessageEmbed()
      .setColor(`#32496b`)
      .setDescription(` __** تم ترقية : ${user} \n إلى : لواء . \n من قبل الإداري : ${message.author} **__ `);
    
    logtf3el.send({ embeds: [embed2] });
    logtf3el.send({ files: ["https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png"] });
    m.delete();  
    message.delete();
    }
        //
              if(i.values[0] === 'fre8' || i.values[1] === 'fre8') {
        if (!i.member.permissions.has('ADMINISTRATOR'))
        if (!i.member.roles.cache.has('980494296320999424'))
          return i.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ' , ephemeral: true });
        //
        let ch = dbb.get(`logtf3el_${message.guild.id}`)
        let logtf3el = message.guild.channels.cache.find(c => c.id == ch)
        //
        let t7t = message.guild.roles.cache.get('980494360539987978');
        let gnde = message.guild.roles.cache.get('980494359508164628');
        let gndeaol = message.guild.roles.cache.get('1005542090270318592');
        let href = message.guild.roles.cache.get('1005543033363767336');
        let r8eb = message.guild.roles.cache.get('980494355846561872');
        let r8ebaol = message.guild.roles.cache.get('1005542165721665717');
        let mlazm = message.guild.roles.cache.get('980494352495284326');
        let mlazmaol = message.guild.roles.cache.get('980494350624641155');
        let h8ed = message.guild.roles.cache.get('980494347491500034');
        let lwaaa = message.guild.roles.cache.get('980494345717305504');
        let fre8 = message.guild.roles.cache.get('980494341359411300');
        let fre8aol = message.guild.roles.cache.get('980494340516376606');
       //
        member.roles.remove(t7t);
        member.roles.remove(gnde);
        member.roles.remove(gndeaol);
        member.roles.remove(href);
        member.roles.remove(r8eb);
        member.roles.remove(r8ebaol);
        member.roles.remove(mlazm);
        member.roles.remove(mlazmaol);
        member.roles.remove(h8ed);
        member.roles.remove(lwaaa);
        member.roles.add(fre8);
        member.roles.remove(fre8aol);
        //
        let embed = new MessageEmbed()
        .setTitle("الترقيات الوزارية")
        .setDescription(` __** عزيزي العسكري : ${user} . \n يسرنا بأنه قم تم ترقيتك \n و لكن يرجى منك الإستمرار على هذا المجهود و ستصل إلى أعلى المراتب بإذن الله .\n و يرجى الحفاظ على القوانين و البورتوكولات و عدم الإغترار بنفسك و التصغير من زملائك . \n و قد تم ترقيتك من الإداري : ${message.author} . \n و مرةَ أخرى ; نتمنى لك التوفيق و المراتب العليا . **__ `)
        .setImage('https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png')
        .setThumbnail(user.user.avatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor("#11e2e2")
        i.channel.send({ embeds: [embed] });
          //
      i.channel.send({ content: " __** تم ترقية `العسكري` بـ نجاح **__ " });
      
      let embed2 = new Discord.MessageEmbed()
      .setColor(`#32496b`)
      .setDescription(` __** تم ترقية : ${user} \n إلى : فريق . \n من قبل الإداري : ${message.author} **__ `);
    
    logtf3el.send({ embeds: [embed2] });
    logtf3el.send({ files: ["https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png"] });
    m.delete();  
    message.delete();
    }
        //
              if(i.values[0] === 'fre8aol' || i.values[1] === 'fre8aol') {
        if (!i.member.permissions.has('ADMINISTRATOR'))
        if (!i.member.roles.cache.has('980494296320999424'))
          return i.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ' , ephemeral: true });
        //
        let ch = dbb.get(`logtf3el_${message.guild.id}`)
        let logtf3el = message.guild.channels.cache.find(c => c.id == ch)
        //
        let t7t = message.guild.roles.cache.get('980494360539987978');
        let gnde = message.guild.roles.cache.get('980494359508164628');
        let gndeaol = message.guild.roles.cache.get('1005542090270318592');
        let href = message.guild.roles.cache.get('1005543033363767336');
        let r8eb = message.guild.roles.cache.get('980494355846561872');
        let r8ebaol = message.guild.roles.cache.get('1005542165721665717');
        let mlazm = message.guild.roles.cache.get('980494352495284326');
        let mlazmaol = message.guild.roles.cache.get('980494350624641155');
        let h8ed = message.guild.roles.cache.get('980494347491500034');
        let lwaaa = message.guild.roles.cache.get('980494345717305504');
        let fre8 = message.guild.roles.cache.get('980494341359411300');
        let fre8aol = message.guild.roles.cache.get('980494340516376606');
       //
        member.roles.remove(t7t);
        member.roles.remove(gnde);
        member.roles.remove(gndeaol);
        member.roles.remove(href);
        member.roles.remove(r8eb);
        member.roles.remove(r8ebaol);
        member.roles.remove(mlazm);
        member.roles.remove(mlazmaol);
        member.roles.remove(h8ed);
        member.roles.remove(lwaaa);
        member.roles.remove(fre8);
        member.roles.add(fre8aol);
        //
        let embed = new MessageEmbed()
        .setTitle("الترقيات الوزارية")
        .setDescription(` __** عزيزي العسكري : ${user} . \n يسرنا بأنه قم تم ترقيتك \n و لكن يرجى منك الإستمرار على هذا المجهود و ستصل إلى أعلى المراتب بإذن الله .\n و يرجى الحفاظ على القوانين و البورتوكولات و عدم الإغترار بنفسك و التصغير من زملائك . \n و قد تم ترقيتك من الإداري : ${message.author} . \n و مرةَ أخرى ; نتمنى لك التوفيق و المراتب العليا . **__ `)
        .setImage('https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png')
        .setThumbnail(user.user.avatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor("#11e2e2")
        i.channel.send({ embeds: [embed] });
          //
      i.channel.send({ content: " __** تم ترقية `العسكري` بـ نجاح **__ " });
      
      let embed2 = new Discord.MessageEmbed()
      .setColor(`#32496b`)
      .setDescription(` __** تم ترقية : ${user} \n إلى : فريق أول . \n من قبل الإداري : ${message.author} **__ `);
    
    logtf3el.send({ embeds: [embed2] });
    logtf3el.send({ files: ["https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png"] });
    m.delete();  
    message.delete();
    }
    }
    })
}});

client.on("messageCreate", async message => {
  if(message.author.bot) return;
  if (message.content.startsWith(prefix+"فصل")) {
 let member = message.mentions.members.first();
     let user = message.mentions.members.first();
//
    if (!message.member.permissions.has('ADMINISTRATOR'))
        if (!message.member.roles.cache.has('980494296320999424'))
          return message.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ' });
    //
    if(!dbb.has(`logtf3el_${message.guild.id}`)) return message.reply({ content: ` __** يرجى تعيين لوق التفعيل قبل !
  \`${prefix}لوق-التفعيل\` **__ ` });
    //
      if (!member) return message.reply({ content: ' __** منشن العضو **__ ' });
     if(message.author.id == user.id) return message.reply({ content: ` __** لا يمكنك فصل نفسك ! **__ ` });
      if(user.bot) return message.reply({ content: " __** لا يمكن فصل البوتات :x: **__ " });
    //
   let reson = message.content.split(' ').slice(2).join(' ')
  if(!reson) return message.reply({ content: `__** يرجى كتابة سبب فصل العسكري **__ ` });
//
    let row = new Discord.MessageActionRow()
    .addComponents(
    new Discord.MessageSelectMenu()
    .setMinValues(0)
    .setMaxValues(1)
    .setPlaceholder('إضغط هنا لرؤية خريطة الفصل')
    .setCustomId('fcl')
    .addOptions([
      {
        label: 'فصل',
        description: 'لـ فصل عسكري',
        emoji: '👮🏻‍♂️',
        value: 'fsl'
        },
      {
        label: 'ازالة-الفصل',
        description: 'لـ إزالة فصل عسكري',
        emoji: '👮🏻‍♂️',
        value: 'azalt-alfsl'
        },
      {
        label: 'سبب-الفصل',
        description: 'لـ معرفة سبب فصل عسكري',
        emoji: '👮🏻‍♂️',
        value: 'sbb-alfsl'
        }
    ])
    )
    let embed = new Discord.MessageEmbed()
    .setColor('#32496b')
    .setDescription('__** قم بتحديد ما تريده بالضغط على الزر بالأسفل . **__')  
    let m = await message.reply({ embeds: [ embed ], components: [ row ] });
  
    let collector = m.createMessageComponentCollector({ filter: i => i.user.id === message.author.id, time: 3600000})
    
      collector.on('collect', async i => {
      if (i.customId == "fcl") {
      if(i.values[0] === 'fsl' || i.values[1] === 'fsl') {
        if (!i.member.permissions.has('ADMINISTRATOR'))
        if (!i.member.roles.cache.has('980494296320999424'))
          return i.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ' , ephemeral: true });
        //
        if(db.has(`mfsol_${user.id}`,`reason_${user.id}`)) return i.reply({ content: ` __** تم فصل العسكري مسبقاَ ! **__ ` , ephemeral: true });
        //
        let ch = dbb.get(`logtf3el_${message.guild.id}`)
        let logtf3el = message.guild.channels.cache.find(c => c.id == ch)
        //
        let t7t = message.guild.roles.cache.get('980494360539987978');
        let gnde = message.guild.roles.cache.get('980494359508164628');
        let gndeaol = message.guild.roles.cache.get('1005542090270318592');
        let href = message.guild.roles.cache.get('1005543033363767336');
        let r8eb = message.guild.roles.cache.get('980494355846561872');
        let r8ebaol = message.guild.roles.cache.get('1005542165721665717');
        let mlazm = message.guild.roles.cache.get('980494352495284326');
        let mlazmaol = message.guild.roles.cache.get('980494350624641155');
        let h8ed = message.guild.roles.cache.get('980494347491500034');
        let lwaaa = message.guild.roles.cache.get('980494345717305504');
        let fre8 = message.guild.roles.cache.get('980494341359411300');
        let fre8aol = message.guild.roles.cache.get('980494340516376606');
        let da7leh = message.guild.roles.cache.get('980494313295331328');
        let amn3am = message.guild.roles.cache.get('980494327371399218');
        let hrs7dod = message.guild.roles.cache.get('980494332949844058');
        let gwat5ash = message.guild.roles.cache.get('980494318580162590');
        let gwatmsl7h = message.guild.roles.cache.get('1045729509250449459');
        let mfsol = message.guild.roles.cache.get('980494370623094814');
       //
        member.roles.remove(t7t);
        member.roles.remove(gnde);
        member.roles.remove(gndeaol);
        member.roles.remove(href);
        member.roles.remove(r8eb);
        member.roles.remove(r8ebaol);
        member.roles.remove(mlazm);
        member.roles.remove(mlazmaol);
        member.roles.remove(h8ed);
        member.roles.remove(lwaaa);
        member.roles.remove(fre8);
        member.roles.remove(fre8aol);
        member.roles.remove(da7leh);
        member.roles.remove(amn3am);
//        member.roles.remove(hrs7dod);
        member.roles.remove(gwat5ash);
    //    member.roles.remove(gwatmsl7h);
        member.roles.add(mfsol);
        //
        let embed = new MessageEmbed()
        .setTitle("الفصل الوزاري")
        .setDescription(` __** عزيزي العسكري : ${user} . \n لا يسرنا بأنه قم تم فصلك \n و لكن يرجى منك إتباع البروتوكولات و القوانين في المرة القادمة و ستصل إلى أعلى المراتب بإذن الله . \n و قد تم فصلك من الإداري : ${message.author} . \n و مرةَ أخرى ; نتمنى لك التوفيق و المراتب العليا . **__ `)
        .setImage('https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png')
        .setThumbnail(user.user.avatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor("#11e2e2")
        i.channel.send({ embeds: [embed] });
          //
      user.setNickname(`مفصول ${reson}`);
      i.channel.send({ content: " __** تم فصل `العسكري` بـ نجاح **__ " });
      
      let embed2 = new Discord.MessageEmbed()
      .setColor(`#32496b`)
      .setDescription(` __** تم فصل : ${user} \n سبب الفصل : ${reson} . \n من قبل الإداري : ${message.author} **__ `);
    
    logtf3el.send({ embeds: [embed2] });
    logtf3el.send({ files: ["https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png"] });
    m.delete();  
    message.delete();
    dbf9l.set(`msfol`, user.id)
    dbf9l.set(`reason_${user.id}`, reson)
    }
        //
          if(i.values[0] === 'sbb-alfsl' || i.values[1] === 'sbb-alfsl') {
        if (!i.member.permissions.has('ADMINISTRATOR'))
        if (!i.member.roles.cache.has('980494296320999424'))
          return i.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ' , ephemeral: true });
        //
        if(!dbf9l.has(`mfsol_${user.id}`,`reason_${user.id}`)) return i.reply({ content: ` __** لم يتم فصل العسكري ! **__ ` , ephemeral: true });
//
        let resons = dbf9l.get(`reason_${user.id}`)
        let embed = new MessageEmbed()
        .setTitle("الفصل الوزاري")
        .setDescription(` __** عزيزي الإداري : ${message.author} . \n سبب فصل : ${user} . \n هو : ${resons} . **__ `)
        .setImage('https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png')
        .setThumbnail(user.user.avatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor("#11e2e2")
        i.channel.send({ embeds: [embed] });
          //
    m.delete();  
    message.delete();
    }
        //
              if(i.values[0] === 'azalt-alfsl' || i.values[1] === 'azalt-alfsl') {
        if (!i.member.permissions.has('ADMINISTRATOR'))
        if (!i.member.roles.cache.has('980494296320999424'))
          return i.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ' , ephemeral: true });
        //
        if(!dbf9l.has(`mfsol_${user.id}`,`reason_${user.id}`)) return i.reply({ content: ` __** لم يتم فصل العسكري ! **__ ` , ephemeral: true });
//
        let ch = dbb.get(`logtf3el_${message.guild.id}`)
        let logtf3el = message.guild.channels.cache.find(c => c.id == ch)
        //
        let mfsol = message.guild.roles.cache.get('980494370623094814');
        member.roles.remove(mfsol);
        //
        let resons = dbf9l.get(`reason_${user.id}`)
        let embed = new MessageEmbed() 
        .setTitle("الفصل الوزاري")
        .setDescription(` __** عزيزي الإداري : ${message.author} . \n تم إزالة الفصل عن : ${user} .\n مع العلم أن سبب فصله قد كان : ${resons} . **__ `)
        .setImage('https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png')
        .setThumbnail(user.user.avatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor("#11e2e2")
        i.channel.send({ embeds: [embed] });
          //
      user.setNickname(`${user.user.username}`);
      i.channel.send({ content: " __** تم إزالة الفصل عن `العسكري` بـ نجاح **__ " });
      
      let embed2 = new Discord.MessageEmbed()
      .setColor(`#32496b`)
      .setDescription(` __** تم إزالة فصل : ${user} \n و قد كان سبب فصله هو : ${resons} \n من قبل الإداري : ${message.author} **__ `);
    
    logtf3el.send({ embeds: [embed2] });
    logtf3el.send({ files: ["https://cdn.discordapp.com/attachments/979468751927926796/989654610543247430/1656022427615.png"] });
    m.delete();  
    message.delete();
    dbf9l.delete(`mfsol_${user.id}`)
    dbf9l.delete(`reason_${user.id}`)
    }
      }})
  }});

client.on("guildMemberAdd" , member => { 
if (member.guild.id == '980493720233316372') {
let mfsol = member.guild.roles.cache.get('980494370623094814');
//
if(dbf9l.has(`msfol_${member.id}`)) {
member.roles.add(mfsol)
}
};
});

client.on("messageCreate", async message => {
  if(message.author.bot) return;
  if (message.content.startsWith(prefix+"استقالة")) {
 let member = message.mentions.members.first();
     let user = message.mentions.members.first();
    //
        let hrs7dod = message.guild.channels.cache.get("1033297256465563738")  
        let ch = dbb.get(`logtf3el_${message.guild.id}`)
        let logtf3el = message.guild.channels.cache.find(c => c.id == ch)
        //
      if (!message.member.permissions.has('ADMINISTRATOR'))
        if (!message.member.roles.cache.has('980494296320999424'))
          return message.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ' });
    //
    if(!dbb.has(`logtf3el_${message.guild.id}`)) return message.reply({ content: ` __** يرجى تعيين لوق التفعيل قبل !
  \`${prefix}لوق-التفعيل\` **__ ` });
    //
      if (!member) return message.reply({ content: ' __** منشن العسكري **__ ' });
     if(message.author.id == user.id) return message.reply({ content: ` __** لا يمكنك إقالة نفسك ! **__ ` });
      if(user.bot) return message.reply({ content: " __** لا يمكن إقالة البوتات :x: **__ " });
//
        let t7t = message.guild.roles.cache.get('980494360539987978');
        let gnde = message.guild.roles.cache.get('980494359508164628');
        let gndeaol = message.guild.roles.cache.get('1005542090270318592');
        let href = message.guild.roles.cache.get('1005543033363767336');
        let r8eb = message.guild.roles.cache.get('980494355846561872');
        let r8ebaol = message.guild.roles.cache.get('1005542165721665717');
        let mlazm = message.guild.roles.cache.get('980494352495284326');
        let mlazmaol = message.guild.roles.cache.get('980494350624641155');
        let h8ed = message.guild.roles.cache.get('980494347491500034');
        let lwaaa = message.guild.roles.cache.get('980494345717305504');
        let fre8 = message.guild.roles.cache.get('980494341359411300');
        let fre8aol = message.guild.roles.cache.get('980494340516376606');
        let da7leh = message.guild.roles.cache.get('980494313295331328');// الداخلية
        let hrs = message.guild.roles.cache.get('980494332949844058');// القوات
        let ha9h = message.guild.roles.cache.get('980494318580162590');// القوات
        let amn = message.guild.roles.cache.get('980494327371399218');// القوات
       let mgaz = message.guild.roles.cache.get('980494363606016071');
let mtlob = message.guild.roles.cache.get('980494369536765982');
let anzaraol = message.guild.roles.cache.get('980494366470713374');
let anzartane = message.guild.roles.cache.get('980494367460569108');
let mrkzal3mluat = message.guild.roles.cache.get('1049010603097858128');
let gna9 = message.guild.roles.cache.get('1049384701346992200');
let mtfa3l = message.guild.roles.cache.get('1049384853617000528');
let medaleaol = message.guild.roles.cache.get('1049385030713090058');
let medaletane = message.guild.roles.cache.get('1049385162330361987');
//let medaletalt = message.guild.roles.cache.get('1001234400027099216');
let gaad = message.guild.roles.cache.get('1049385611913601065');
let mbd3 = message.guild.roles.cache.get('1049385685112598538');
let adare = message.guild.roles.cache.get('1049385764766629958');
let astfaf = message.guild.roles.cache.get('1049754868144939108');
       //
        member.roles.remove(mgaz);
        member.roles.remove(mtlob);
        member.roles.remove(anzaraol);
        member.roles.remove(anzartane);
        member.roles.remove(mrkzal3mluat);
        member.roles.remove(medaleaol);
        member.roles.remove(medaletane);
        member.roles.remove(gaad);
        member.roles.remove(mbd3);
        member.roles.remove(adare);
        member.roles.remove(astfaf);
        member.roles.remove(t7t);
        member.roles.remove(gnde);
        member.roles.remove(gndeaol);
        member.roles.remove(href);
        member.roles.remove(r8eb);
        member.roles.remove(r8ebaol);
        member.roles.remove(mlazm);
        member.roles.remove(mlazmaol);
        member.roles.remove(h8ed);
        member.roles.remove(lwaaa);
        member.roles.remove(fre8);
        member.roles.remove(fre8aol);
        member.roles.remove(da7leh);
        member.roles.remove(hrs);
        member.roles.remove(amn);
        member.roles.remove(ha9h);
               //
        user.setNickname(`${user.user.username}`);
        let embed = new MessageEmbed()
        .setTitle("الإستقالة الوزارية")
        .setDescription(` __** عزيزي العسكري : ${user} . \n وداعاَ و نتمنى لك التوفيق في حياتك . \n و قد تم قبول إستقالتك من قبل الإداري : ${message.author} . \n و مرةَ أخرى ; نتمنى لك التوفيق و المراتب العليا . **__ `)
.setImage('https://media.discordapp.net/attachments/982409404043374602/1088235782919164076/9596a469648c5614.jpg?width=1025&height=100')
        .setThumbnail(user.user.avatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor("#11e2e2")
        message.channel.send({ embeds: [embed] });
          //
      message.channel.send({ content: " __** تم إقالة `العسكري` بـ نجاح **__ " });
      
      let embed2 = new Discord.MessageEmbed()
      .setColor(`#32496b`)
      .setDescription(` __** تم قبول إستقالة : ${user} . \n من قبل الإداري : ${message.author} . **__ `);
    
    logtf3el.send({ embeds: [embed2] });
    logtf3el.send({ files: [line] });
  }});   
 
client.on('messageCreate', message => {
if (message.content === prefix+'نام') {
if (owner.includes(message.author.id)) return;
message.channel.send({ content: "__** سيو برب **__ " })
client.destroy()
}
}); 

client.on('messageCreate', message => {
  if (message.content.startsWith(prefix+'هير')) {
              if (message.author.bot) return
    setTimeout(() => message.delete(), 5000);
if (!message.member.permissions.has('ADMINISTRATOR'))
        return message.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ' })
    message.channel.send({ content: ' __** @here **__ ' })
  }
});

client.on('messageCreate', message => {
            if (message.author.bot) return
  if (message.content.startsWith(prefix+'افري')) {
    setTimeout(() => message.delete(), 5000);
if (!message.member.permissions.has('ADMINISTRATOR'))
        return message.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ' })
    message.channel.send({ content: ' __** @everyone **__ ' })
  //  message.delete();
  }
});
  
/* client.on("guildCreate", guild => {
  if (guild.memberCount < 100000000) {
    guild.leave()
  }
}); */

  client.on("messageCreate", (message) => {
    if(message.author.bot) return;
    if (message.content.startsWith(prefix+"info")) {
       if (!message.member.permissions.has('ADMINISTRATOR'))
          return message.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ' });
    //
      let args = message.content.split(" ");			
  let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[1]);
if(!role) role = message.guild.roles.cache.find(r => r.id == args[1]);
if(!role) { message.reply({ content: ` __** منشن الرتبة ! **__ ` });
return message.delete();
};
//
const visible = {
  false: "لا",
  true: "نعم"
};
//
const status = {
  false: "لا",
  true: "نعم"
};
const inforolesize = role.members.size;
//
let d = new Discord.MessageButton()
.setLabel(`عرض من يملك الرتبة`)
.setEmoji("🌚")
.setStyle("SECONDARY")
.setCustomId("inforole")
let o = new Discord.MessageButton()
.setLabel(`عرض صلاحيات الرتبة`)
.setEmoji("🌚")
.setStyle("PRIMARY")
.setCustomId("rolepermission")
let row = new MessageActionRow()
.addComponents([o,d])
// 
let embed = new Discord.MessageEmbed()
.setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
.setTitle(`معلومات عامة عن رتبت : "\`${role.name}\`"`)
.setDescription(`__** إسم الرتبة و الأيدي الخاص بها : ${role.name},${role.id} \n لون الرتبة : ${role.hexColor} \n عدد من يملكون الرتبة هو : ${inforolesize} \n رقم الرتبة : ${role.position} \n الرتبة مرئية ام لا : ${visible[role.hoist]} \n هل المنشن مفتوح للرتبة : ${status[role.mentionable]} \n تم إنشاء الرتبة في : \`${role.createdAt.toLocaleString()}\`**__`)
.setFooter(message.guild.name, message.guild.iconURL({ dynamic: true }))
.setTimestamp()
.setColor(`#32496b`)
let m = message.reply({ embeds: [embed],components:[row] });
//
let d2 = new Discord.MessageButton()
.setLabel(`عرض معلومات الرتبة`)
.setEmoji("🌚")
.setStyle("SECONDARY")
.setCustomId("m3lomatrole")
let o2 = new Discord.MessageButton()
.setLabel(`عرض صلاحيات الرتبة`)
.setEmoji("🌚")
.setStyle("PRIMARY")
.setCustomId("rolepermission")
let row2 = new MessageActionRow()
.addComponents([o2,d2])
//
let d3 = new Discord.MessageButton()
.setLabel(`عرض معلومات الرتبة`)
.setEmoji("🌚")
.setStyle("SECONDARY")
.setCustomId("m3lomatrole")
let o3 = new Discord.MessageButton()
.setLabel(`عرض من يملك الرتبة`)
.setEmoji("🌚")
.setStyle("SECONDARY")
.setCustomId("inforole")
let row3 = new MessageActionRow()
.addComponents([o3,d3])
//
let collector = message.channel.createMessageComponentCollector({ filter: i => i.user.id === message.author.id, time: 3600000})

    collector.on('collect', i => {
      if(i.customId === 'inforole') {
        let arr = new Array();
        role.members.forEach(user => { arr.push(`<@${user.id}>`)});
        const inroles = arr
        //
let num = 0;
//
            const generateEmbed = start => {
              const current = inroles.slice(start, start + 30)
              num = num + 1;
              const panteq = current.join(`\n`)
              const embed = new Discord.MessageEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
        .setTitle(`من يملك رتبة ; "\`${role.name}\`" هم :`)
        .setDescription(`__** ${panteq} **__`)
        .setFooter(message.guild.name, message.guild.iconURL({ dynamic: true }))
        .setTimestamp()
        .setColor(`#32496b`)
        return i.message.edit({ embeds: [embed],components:[row2] });
        }
        i.message.edit(generateEmbed(0))
              }
      if(i.customId === 'm3lomatrole') {
i.message.edit({ embeds: [embed],components:[row] });
    }
    if(i.customId === 'rolepermission') {
      const permissions = {
        "ADMINISTRATOR": "ادمن ستريتر",
        "VIEW_AUDIT_LOG": "رؤية لوق السيرفر",
        "VIEW_GUILD_INSIGHTS": "رؤية صلاحيات السلاش كوماند",
        "MANAGE_GUILD": "منج سيرفر",
        "MANAGE_ROLES": "منج رول",
        "MANAGE_CHANNELS": "منج شانيل",
        "KICK_MEMBERS": "طرد الأعضاء",
        "BAN_MEMBERS": "حظر الأعضاء",
        "CREATE_INSTANT_INVITE": "عمل دعوات",
        "CHANGE_NICKNAME": "التعديل على الإسم الخاص به",
        "MANAGE_NICKNAMES": "تعديل أسامي اعضاء السيرفر",
        "MANAGE_EMOJIS": "التعديل على الإيموجيات",
        "MANAGE_WEBHOOKS": "منج ويب هوك",
        "VIEW_CHANNEL": "رؤية الشاتات",
        "SEND_MESSAGES": "إرسال الرسائل",
        "SEND_TTS_MESSAGES": "إرسال رسائل كتابية و تحويلها لصوتية",
        "MANAGE_MESSAGES": "حذف الرسائل",
        "EMBED_LINKS": "إرسال الروابط",
        "ATTACH_FILES": "إرسال الصور",
        "READ_MESSAGE_HISTORY": "قرائة الرسائل",
        "MENTION_EVERYONE": "منشن جميع الرتب",
        "USE_EXTERNAL_EMOJIS": "إستعمال الإيموجيات الخارجية",
        "ADD_REACTIONS": "وضع رياكشنات على الرسائل",
        "CONNECT": "دخول الرومات الصوتية",
        "SPEAK": "التحدث بالرومات الصوتية",
        "STREAM": "فتح الكاميرا",
        "MUTE_MEMBERS": "إسكات الأعضاء صوتياَ",
        "DEAFEN_MEMBERS": "منع الأعضاء من سماع من في الروم",
        "MOVE_MEMBERS": "سحب الأعضاء",
        "PRIORITY_SPEAKER": "فتح المايك"
    }
    const rolePermissions = role.permissions.toArray();
    const finalPermissions = [];
    for (const permission in permissions) {
        if (rolePermissions.includes(permission)) finalPermissions.push(`✔️ : ${permissions[permission]}`);
        else finalPermissions.push(`❌ : ${permissions[permission]}`);
    }
      let embed2 = new Discord.MessageEmbed()
      .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
      .setTitle(`صلاحيات رتبت ; "\`${role.name}\`" هي :`)
      .setDescription(`__** \`\`\`diff\n${finalPermissions.join('\n')}\`\`\` **__`)
      .setFooter(message.guild.name, message.guild.iconURL({ dynamic: true }))
      .setTimestamp()
      .setColor(`#32496b`)
      i.message.edit({ embeds: [embed2],components:[row3] });
          }
  });

  collector.on('end', collected => {
    console.log(`Collected ${collected.size} items`);
  });
}});

client.on('messageCreate', message => {
if(message.author.bot) return;
if (message.guild.id == '980493720233316372') {
if (message.content === 'التحضيرالعسكري') {
let embed = new Discord.MessageEmbed()
.setTitle('التحضير العسكري')
.setColor(`#32496b`)
.setDescription(`__** طريقة التحضير الجديدة :

تروح : <#980494452453949470>

بعدها تضغط على الزر الموجود 

بعد ما تضغط عليه راح تجيك صفحة فيها أسئلة جاوب عليها بعدها ارسلها 

و بس بتنرسل بالشات و بدون اي اوامر او زيادة .

عشان تعرف تحاضيرك او تحاضير غيرك :

> ${prefix}تحضيراتي **__`)
.setImage('https://media.discordapp.net/attachments/982409404043374602/1088235782919164076/9596a469648c5614.jpg?width=1025&height=100')
message.delete();
message.channel.send({ embeds: [embed] })
}
}
});

const id = '1054088577203580928';
client.on("messageCreate", message => {
if (message.author.bot || !message.channel.guild || message.member.permissions.has('ADMINISTRATOR')) return;
if(id.includes(message.channel.id)){
let args = message.content.split(',')  
message.delete()
let row = new Discord.MessageActionRow()
.addComponents(
new Discord.MessageButton()
.setLabel('FBI ON TOP')
.setURL(`https://discord.gg/vDXfb6tTXP`)
.setStyle('LINK')
.setEmoji('981644715889938472')
);

const embed = new Discord.MessageEmbed()
.setAuthor(message.author.username, message.author.avatarURL())
.setColor("#11e2e2")
.setThumbnail(message.author.avatarURL({ dynamic: true }))
.setDescription(`__** > إقتراح جديد : ${args} \n من قبل : <@!${message.author.id}> **__ `)
.setFooter(`إقتراح جديد !!`)
.setTimestamp()
let attachm = message.attachments.first()
if (attachm) {
embed.setImage(attachm.proxyURL)
}
message.channel.send({ embeds: [embed], components: [row] }).then(c => {
c.react('981644790649217054').then(() =>
c.react('981644850350927973'))
message.channel.send({ files: [line] });
})
}}); 

client.on("messageCreate" , message => {
if (message.content.toLowerCase().startsWith(prefix+"say".toLowerCase())) {
setTimeout(() => message.delete(), 5000)
  //
 if (message.guild.id == '980493720233316372') {
   if (!message.member.permissions.has('ADMINISTRATOR'))
return message.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ' }).then(message => setTimeout(() => message.delete(), 5000));
let args = message.content.split(' ').slice(1).join(' ')
if (!args) return message.reply({ content: ' __** ❌ أرسل النص !! **__ ' }).then(message => setTimeout(() => message.delete(), 5000));
  //
let embed = new Discord.MessageEmbed()
.setColor("#32496B")
.setDescription(`${args}`)
.setImage('https://media.discordapp.net/attachments/982409404043374602/1088235782919164076/9596a469648c5614.jpg?width=1025&height=100')
//
message.channel.send({ embeds: [embed] });
message.delete();
}
}
});

client.on('messageCreate', message => {
if (message.content.toLowerCase().startsWith(prefix+"ping".toLowerCase())) {
let embed = new Discord.MessageEmbed()
.setColor("#32496B")
.setDescription(` __** Ping =  ${client.ws.ping} **__ `)
message.channel.send({ embeds: [embed] });
}
}); 

// رد

  client.on('messageCreate', message => {
    if(message.content.includes("شعار") || message.content.includes("وش الشعار")) {
      let member = message.mentions.members.first();
      let user = message.mentions.members.first();
      //
      if (message.guild.id == '980493720233316372') {
       if (!message.member.permissions.has('ADMINISTRATOR'))
         //
         if (!message.member.roles.cache.has('980494296320999424'))
           return message.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ' });
  //
       if (!member) return message.reply({ content: ' __** منشن العسكري **__ ' }).then(message => setTimeout(() => message.delete(), 5000));
          return message.reply({ content: `!! ✯ 𝗙𝗣・˹ ${member.nickname} ˼` });
}
}}); 

client.on('messageCreate', message => {
if(message.content.includes("السلام عليكم") || message.content.includes("سلام عليكم")) {
if (message.guild.id == '980493720233316372') {
  //
if (message.channel.id == '980494406836690997') return;
if (message.channel.id == '980494409693020210') return;
if (message.channel.id == '980494414763946004') return;
if (message.channel.id == '1031233706473553992') return;
if (message.channel.id == '1031241528758255646') return;
message.reply({ content: `__~~** وعـلـيـكـم الــســلام ورحـمـه الله وبـركـاتـه مـنـور/ه 👮‍♂️ **~~__` });
 }
}
});

client.on('messageCreate', message => {
if(message.author.bot) return;
if (message.guild.id == '980493720233316372') {
if(message.content.includes("كيف احضر") || message.content.includes("احضر")) {
let embed = new Discord.MessageEmbed()
.setTitle('التحضير العسكري')
.setColor("RED")
.setDescription(`__** طريقة التحضير الجديدة :

تروح : <#980494452453949470>

بعدها تضغط على الزر الموجود 

بعد ما تضغط عليه راح تجيك صفحة فيها أسئلة جاوب عليها بعدها ارسلها 

و بس بتنرسل بالشات و بدون اي اوامر او زيادة .

عشان تعرف تحاضيرك او تحاضير غيرك : 

> ${prefix}تحاضيري **__`)
.setImage('https://media.discordapp.net/attachments/982409404043374602/1088235782919164076/9596a469648c5614.jpg?width=1025&height=100')
message.reply({ embeds: [embed] });
}
}
});

client.on('messageCreate', message => {
if(message.author.bot) return;
if(message.content.includes("كيف اترقى") || message.content.includes("اترقى")) {
if (message.guild.id == '980493720233316372') {
let embed = new Discord.MessageEmbed()
.setTitle('كيف اترقى ؟')
.setColor("#11e2e2")
.setDescription(` __** كيف تترقى ؟

# - 1 : تفاعل
  
# - 2 : إسلوب 
  
# - 3 : الإلتزام بالبروتوكولات و البنود
  
# - 4 : تنظيمك و إحترامك **__ `)
.setImage('https://media.discordapp.net/attachments/982409404043374602/1088235782919164076/9596a469648c5614.jpg?width=1025&height=100')
message.reply({ embeds: [embed] });
}
}
});

client.on('messageCreate', message => {
  if (message.author.bot) return;
  if (message.guild.id !== '980493720233316372') return;
  if (message.channel.id !== '980494406836690997') return;
  if (message) {
    message.channel.send({ files: [line] });
  }
});// جديد السيرفر

client.on('messageCreate', message => {
  if (message.author.bot) return;
  if (message.guild.id !== '980493720233316372') return;
  if (message.channel.id !== '1031233706473553992') return;
  if (message) {
    message.channel.send({ files: [line] });
  }
});//التعاميم

client.on('messageCreate', message => {
  if (message.author.bot) return;
  if (message.guild.id !== '980493720233316372') return;
  if (message.channel.id !== '1031239658434203748') return;
  if (message) { message.channel.send({ files: [line] })};
});// طلب نقل

client.on('messageCreate', message => {
  if (message.author.bot) return;
  if (message.guild.id !== '980493720233316372') return;
  if (message.channel.id !== '1031239641036238928') return;
  if (message) {
    message.channel.send({ files: [line] });
  }
});// طلب اجازة

client.on('messageCreate', message => {
  if (message.author.bot) return;
  if (message.guild.id !== '980493720233316372') return;
  if (message.channel.id !== '1031241528758255646') return;
  if (message) {
    message.channel.send({ files: [line] });
  }
});// تعاميم المسؤولين

client.on('messageCreate', message => {
  if (message.author.bot) return;
  if (message.guild.id !== '980493720233316372') return;
  if (message.channel.id !== '1031300288931442758') return;
  if (message) {
    message.channel.send({ files: [line] });
  }
});// المخالفات

client.on('messageCreate', message => {
  if (message.author.bot) return;
  if (message.guild.id !== '980493720233316372') return;
  if (message.channel.id !== '1031300309970063453') return;
  if (message) {
    message.channel.send({ files: [line] });
  }
});// المطلوبين

client.on('messageCreate', message => {
  if (message.author.bot) return;
  if (message.guild.id !== '980493720233316372') return;
  if (message.channel.id !== '1031300271181140008') return;
  if (message) {
    message.channel.send({ files: [line] });
  }
});// الإنذارات

client.on('messageCreate', message => {
  if (message.author.bot) return;
  if (message.guild.id !== '980493720233316372') return;
  if (message.channel.id !== '1031301741305675846') return;
  if (message) {
    message.channel.send({ files: [line] });
  }
});// الترقيات

client.on('messageCreate', message => {
  if (message.author.bot) return;
  if (message.guild.id !== '980493720233316372') return;
  if (message.channel.id !== '1031301760884691064') return;
  if (message) {
    message.channel.send({ files: [line] });
  }
});// التخفيضات

client.on('messageCreate', message => {
  if (message.author.bot) return;
  if (message.guild.id !== '980493720233316372') return;
  if (message.channel.id !== '1031302781497266306') return;
  if (message) {
    message.channel.send({ files: [line] });
  }
});// التحضير

client.on('messageCreate', message => {
if (message.content === "خط"||message.content === "لاين"|| message.content === "line" ) {
//
if (message.guild.id == '980493720233316372') {
if (!message.member.permissions.has('ADMINISTRATOR'))
if (!message.member.roles.cache.has('980494295444361216'))
return message.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ' }).then(message => setTimeout(() => message.delete(), 5000));
message.delete();
message.channel.send({ files: [line] });
}
}
});

/*
ايموجي صح ...
*/

client.on('messageCreate', message => {
  if (message.author.bot) return;
  if (message.channel.id !== '1031233706473553992') return;
  if (message) {
    message.react("981644790649217054")
  }
});

client.on('messageCreate', message => {
  if (message.author.bot) return;
  if (message.channel.id !== '1031241528758255646') return;
  if (message) {
    message.react("981644790649217054")
  }
});

client.on('messageCreate', message => {
  if (message.author.bot) return;
  if (message.channel.id !== '1045964439960174662') return;
  if (message) {
    message.react("981644790649217054")
  }
});

/*
ايموجي غلط
*/

client.on('messageCreate', message => {
  if (message.author.bot) return;
  if (message.channel.id !== '1031233706473553992') return;
  if (message) {
    message.react("981644850350927973")
  }
});

client.on('messageCreate', message => {
  if (message.author.bot) return;
  if (message.channel.id !== '1031241528758255646') return;
  if (message) {
    message.react("981644850350927973")
  }
});

client.on('messageCreate', message => {
  if (message.author.bot) return;
  if (message.channel.id !== '1045964439960174662') return;
  if (message) {
    message.react("981644850350927973")
  }
});

client.on("messageCreate", async message => {
  let words = ["برتكان", "discord.gg/", "معاون", "@everyone", "@here"]
  for (let s = 0; s < words.length; s++) {
    if (message.content.includes(words[s])) {
      if (!message.member.permissions.has("ADMINISTRATOR")) {
        let member = message.member;
        let embed = new Discord.MessageEmbed()
          .setAuthor(message.author.username, message.author.displayAvatarURL())
          .setTitle("الحماية")
          .setDescription(`__** تم إعطائك تايم اوت في : \`${message.guild.name}\` لـ مدة ساعة واحدة \n لإرسالك رسائل مخالفة . \n رسالتك : \`${message.content}\` **__ `)
          .setThumbnail(message.guild.iconURL())
          .setFooter(message.guild.name, message.guild.iconURL())
        message.delete()
        await message.channel.send({ content: ` __** نراك بعد ساعة كاملة , ${message.member} **__ ` });
        await member.timeout(3600000, "497796195104718888")
        await message.member.send({ embeds: [embed] });
      }
    }
  }
});

client.on("ready" , () => {
  let guild = `980493720233316372`
  if(!dbp.has(`codes_${guild}`)) {
  let codes = [
    "ABC30",
    "ABC84",
    "ABC59",
    "ABC06",
    "ABC11",
    "ABC48",
    "ABC57",
    "ABC28",
    "ABC54",
    "ABC10",
    "ABC07",
    "ABC01",
    "ABC19",
    "ABC33",
    "ABC78",
    "ABC13",
    "ABC29",
    "ABC64",
    "ABC90",
    "ABC21",
    "ABC87",
    "ABC39",
    "ABC49",
    "ABC51",
    "ABC82",
    "ABC50",
    "ABC65",
    "ABC55",
    "ABC32",
    "ABC94",
    "ABC16",
    "ABC72",
    "ABC91",
    "ABC76",
    "ABC62",
    "ABC27",
    "ABC56",
    "ABC58",
    "ABC12",
    "ABC31",
    "ABC77",
    "ABC46",
    "ABC89",
    "ABC67",
    "ABC47",
    "ABC38",
    "ABC75",
    "ABC14",
    "ABC35",
    "ABC93",
    "ABC60",
    "ABC43",
    "ABC68",
    "ABC03",
    "ABC86",
    "ABC66",
    "ABC79",
    "ABC85",
    "ABC05",
    "ABC99",
    "ABC08",
    "ABC44",
    "ABC02",
    "ABC37",
    "ABC63",
    "ABC97",
    "ABC15",
    "ABC00",
    "ABC26",
    "ABC80",
    "ABC95",
    "ABC70",
    "ABC34",
    "ABC73",
    "ABC09",
    "ABC04",
    "ABC23",
    "ABC83",
    "ABC18",
    "ABC52",
    "ABC17",
    "ABC36",
    "ABC45",
    "ABC61",
    "ABC69",
    "ABC42",
    "ABC74",
    "ABC88",
    "ABC22",
    "ABC20",
    "ABC41",
    "ABC40",
    "ABC25",
    "ABC81",
    "ABC98",
    "ABC24",
    "ABC53",
    "ABC96",
    "ABC92",
    "ABC71",
  "EAG#24115",
  "Agshgja",
  "AUREAW1555211",
  "A*B*C12214",
  "GHUEG93353",
  "q9t937q",
  "AGRTVAD134",
  "OAIGEG5223",
  "PPPfafF1",
  "GIheg3561",
  "AVBSW215",
  "#SALEH#",
  "EDAGaga",
  "FGFAHF!$@$R",
  "GEHEG#$!@",
  "OEOEO#%@#!",
  "GHGHGHG^*325",
  "AGgegeAeht221",
  "PPRREE11122",
  "GNBMMMae22",
  "MMNNNRTBBT!@$15",
  "ZZZGD$$@!",
  "PITHGXA!#4",
  "GHAB^!!$",
  "KJOKG@&^"
  ]
  for(let i = 0;i < codes.length;i++) {
        dbp.push(`codes_${guild}` , codes[i])
  }
      }
});

client.on("messageCreate" , message => {
  if(message.author.bot) return;
  if(message.content.startsWith(prefix+"شات-التحضير")) {
if (message.guild.id == '980493720233316372') {
if (!message.member.permissions.has('ADMINISTRATOR'))
if (!message.member.roles.cache.has('980494295444361216'))
return message.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ' }).then(message => setTimeout(() => message.delete(), 5000));
message.delete();
  //
let channel = message.mentions.channels.first()
if(!channel) return message.reply({ content: ` __** منشن الشات ! **__ `} )
dbp.set(`channel1_${message.guild.id}` , channel.id)
message.reply({ content: ` > __** تم تعيين ${channel} كـ شات التحضير **__ ` })
}
}});

client.on("messageCreate" , message => {
  if(message.content == prefix+"انشاء-التحضير") {
    if (message.guild.id == '980493720233316372') {
if (!message.member.permissions.has('ADMINISTRATOR'))
if (!message.member.roles.cache.has('980494295444361216'))
return message.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ' }).then(message => setTimeout(() => message.delete(), 5000));
message.delete();
  //
   if(!dbp.has(`channel1_${message.guild.id}`)) return message.reply({ content: ` __** تواصل مع : ${owner} **__ ` });
    if(!dbp.has(`codes_${message.guild.id}`)) return message.reply({ content: ` __** تواصل مع : ${owner} **__ ` });
    let embed = new Discord.MessageEmbed()
    .setAuthor({name:`${message.guild.name}` , iconURL:`${message.guild.iconURL()}`})
    .setTitle(`التحضير العسكري`)
    .setDescription(` __** لـ التحضير العسكري يرجى الضغط على 👮🏻 . **__ `)
    .setColor("GREEN")
    let row = new Discord.MessageActionRow().addComponents(
      new Discord.MessageButton()
      .setEmoji('👮🏻')
      .setCustomId("setup")
      .setStyle("SUCCESS")
    )
    message.delete()
    message.channel.send({ embeds: [embed], components:[row] })
}
}});

client.on("interactionCreate" , async interaction => {
  if(interaction.isButton()) {
    if(interaction.customId == "setup") {
      if(cooldown.has(interaction.member.id)) {
        interaction.reply({ content: " __** يرجى الإنتظار ساعة كاملة قبل التحضير مجدداَ ! **__ " , ephemeral:true})
      } else {
		const modal = new ModalBuilder()
			.setCustomId('modal')
			.setTitle('التحضير العسكري :')
            .addComponents(
	        new ModalField()
			.setCustomId('name')
			.setLabel("اسمك ؟")
            .setRequired(true)
            .setPlaceholder("يرجى كتابة إسمك هنا ... ")
            .setMin(3)
            .setMax(32)
			.setStyle('SHORT'),
              
     new ModalField()
			.setCustomId('id')
			.setLabel("أيديك ؟")
            .setRequired(true)
            .setPlaceholder(" ... يرجى كتابة ايديك هنا ")
            .setMin(4)
            .setMax(100)
			.setStyle('SHORT'),
              
	        new ModalField()
			.setCustomId('sector')
			.setLabel("قطاعك العسكري ؟")
            .setRequired(true)
            .setPlaceholder(" ... يرجى كتابة قطاعك العسكري هنا ( اسم القطاع ) ")
            .setMin(5)
            .setMax(32)
            .setStyle('SHORT'),
    
            new ModalField()
			.setCustomId('time')
			.setLabel("وقت الرحلة ؟")
            .setRequired(true)
            .setPlaceholder("يرجى كتابة وقت الرحلة ...")
            .setMin(4)
            .setMax(32)
			.setStyle('SHORT'),
            )
		await client.modal.open(interaction , modal);
            }
    }
  }
});

client.on('modalSubmitInteraction', async interaction => {
    if(interaction.customId == "modal") {
     let codes = dbp.get(`codes_${interaction.guild.id}`)
     let ch = dbp.get(`channel1_${interaction.guild.id}`)
     let channel1 = interaction.guild.channels.cache.find(c => c.id == ch)
const name = interaction.fields.getTextInputValue("name")
const id = interaction.fields.getTextInputValue("id")
const sector = interaction.fields.getTextInputValue("sector")
const time = interaction.fields.getTextInputValue("time")
     let r = codes[Math.floor(Math.random() * codes.length)]
     let random = r
dbp.add(`Police_${interaction.member.id}`, 1)        
let points = dbp.fetch(`Police_${interaction.member.id}`)
//
let embed = new Discord.MessageEmbed()
.setAuthor({name:`${interaction.member.user.username}` , iconURL:`${interaction.member.user.displayAvatarURL()}`})
.setTitle('<:emoji_20:981170142744567808> يرجى دخول الراديو بالضغط هنا <:emoji_20:981170142744567808>')
.setURL('https://discord.gg/HCGUQrtapt')
.setDescription(`> __**  <:emoji_20:981170142744567808> تحضير جديد بواسطة : "${interaction.member}" <:emoji_20:981170142744567808>\n > إسم العسكري : ${name}\n > أيدي العسكري : \`${id}\` \n > قطاع العسكري : ${sector}\n > وقت الرحلة : ${time}\n > <:emoji_20:981170142744567808> عدد تحضيرات العسكري هيا : ${points || 0} <:emoji_20:981170142744567808> **__ `)
.setFooter({text:`${interaction.guild.name}` , iconURL:`${interaction.guild.iconURL()}`})
.setThumbnail(interaction.guild.iconURL())
.setColor("RANDOM")
.setTimestamp();
//
channel1.send({ content: ` __** <:emoji_20:981170142744567808> تحضير جديد بواسطة : ${interaction.member} <:emoji_20:981170142744567808> **__ `, embeds:[embed] });
channel1.send({ files: [line] });
interaction.reply({ content: ` __** <:emoji_20:981170142744567808> تم إرسال تحضيرك بـ نجاح : ${interaction.member} <:emoji_20:981170142744567808> **__ `, ephemeral:true }).then(m=> {
dbp.set(`member_${random}` , interaction.member.id)
dbp.set(`name_${random}` , `${name}`)
dbp.set(`id_${random}` , `${id}`)
dbp.set(`sector_${random}` , `${sector}`)
dbp.set(`time_${random}` , `${time}`)
dbp.set(`embed_${random}` , m.id)
let f = codes.filter(t => t !== random)
dbp.set(`codes_${interaction.guild.id}` , f)
})
   cooldown.add(interaction.member.id)
     setTimeout(() => {
       cooldown.delete(interaction.member.id)
     },3600000)
}});

client.on("messageCreate", async message => {
if(message.author.bot) return;
let user = message.mentions.users.first() || message.author;
//
if(message.content.startsWith(prefix+"تحضيراتي")) {
if (message.guild.id == '980493720233316372') {
if (!message.member.permissions.has('ADMINISTRATOR'))
if (!message.member.roles.cache.has('980494295444361216'))
return message.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ' }).then(message => setTimeout(() => message.delete(), 5000));
if(!user){

user = message.author;
}
//
if(!dbp.has(`Police_${user.id}`)) return message.reply({ content: ` __** لا توجد تحضيرات لـ <@${user.id}> ! :x: **__ ` })
let points = dbp.get(`Police_${user.id}`);
message.reply({ content: ` __** عدد تحضيرات العسكري <@${user.id}>

هيا : "${points || 0}" **__ ` })
}
//
if (message.guild.id == '996810757238968431') {
if (!message.member.permissions.has('ADMINISTRATOR'))
if (!message.member.roles.cache.has('996820405828464742')) 
return message.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ' }).then(message => setTimeout(() => message.delete(), 5000));
message.delete();
message.channel.send({ content: ` __** الأمر خاص بالعساكر ! **__ ` });
}
}});

client.on("messageCreate", async message => {
  if(message.author.bot) return;
  let user = message.mentions.users.first() || message.author;
  if(message.content.startsWith(prefix+"نقاطي")) {
    //
  if (!message.member.permissions.has('ADMINISTRATOR'))
  if (!message.member.roles.cache.has('980494295444361216'))
  return message.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ' }).then(message => setTimeout(() => message.delete(), 5000));
  if(!user) { user = message.author };
  //
  if(!dbb.has(`pointsstaff_${user.id}`)) return message.reply({ content: ` __** لا توجد نقاط لـ <@${user.id}> ! :x: **__ ` })
  let countstaff = dbb.get(`pointsstaff_${user.id}`);
  message.reply({ content: ` __** عدد نقاط الإداري <@${user.id}>
  
  هيا : "${countstaff || 0}" **__ ` })
  }});
  
  client.on("messageCreate", (message) => {
  if(message.author.bot) return;
  if (message.content.startsWith(prefix+"توب")) {
  if (message.guild.id == '980493720233316372') {
  //
let d = new Discord.MessageButton()
.setLabel(`االتوب الوازري`)
.setEmoji("💂🏻")
.setStyle("SECONDARY")
.setCustomId("toppolice")
let o = new Discord.MessageButton()
.setLabel(`التوب الإداري`)
.setEmoji("🌚")
.setStyle("SECONDARY")
.setCustomId("topstaff")
let row = new MessageActionRow()
.addComponents([o,d])
//
message.reply({ content: ` __** يرجى التحديد التوب الوزاري أم الإداري ؟ **__ `, components: [row] });
//
const collector = message.channel.createMessageComponentCollector({ componentType: "BUTTON" });

    collector.on('collect', i => {
      if(i.customId === 'toppolice') {
        const usersData = []
        message.guild.members.cache.forEach(user => { usersData.push(user) })
        var pointsContent = usersData.length;
        let usersContent = 0;
        let usersMaxContent = 16;
        let tempData = [];
        for (let i = 0; i < pointsContent; i++) {
        var database = dbp.fetch(`Police_${usersData[i].id}`)
        if (database == null) continue;
         
        tempData.push({
        name: usersData[i].user.id,
        data: database
        });
        }
        const leaderboardData = []
        tempData.sort((a, b) => b.data - a.data);
        for (let k = 0; k < tempData.length; k++) {
        usersContent++
        if (usersContent >= usersMaxContent) continue;
        leaderboardData.push(` __** المركز الـ "\`${k + 1}\`" يذهب لـ العسكري : "<@!${tempData[k].name}>" بتحاضير تقدر بـ : "${tempData[k].data}" . **__` )}
        var topValue = leaderboardData.join('\n')
        let embed = new Discord.MessageEmbed()
        .setTitle("التوب الوزاري")
        .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
        .setDescription(topValue)
        .setTimestamp()
        .setColor(`#32496b`)
        i.message.edit({ content: ` __** تفضل التوب الوزاري : **__ `, embeds: [embed] });
              }
  //
    if(i.customId === 'topstaff') {
        if (!i.member.permissions.has('ADMINISTRATOR'))
        if (!i.member.roles.cache.has('980494296320999424'))
          return i.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ' , ephemeral: true });
      const usersData = []
      message.guild.members.cache.forEach(user => { usersData.push(user) })
      var pointsContent = usersData.length;
      let usersContent = 0;
      let usersMaxContent = 52;
      let tempData = [];
      for (let i = 0; i < pointsContent; i++) {
      var database = dbb.fetch(`pointsstaff_${usersData[i].id}`)
      if (database == null) continue;
       
      tempData.push({
      name: usersData[i].user.id,
      data: database
      });
      }
      const leaderboardData = []
      tempData.sort((a, b) => b.data - a.data);
      for (let k = 0; k < tempData.length; k++) {
      usersContent++
      if (usersContent >= usersMaxContent) continue;
      leaderboardData.push(` __** المركز الـ "\`${k + 1}\`" يذهب لـ الإداري : "<@!${tempData[k].name}>" بـ نقاط تقدر بـ : "${tempData[k].data}" . **__` )}
      var topValue = leaderboardData.join('\n')
      let embed = new Discord.MessageEmbed()
      .setTitle("التوب الإداري")
      .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
      .setDescription(topValue)
      .setTimestamp()
      .setColor(`#32496b`)
      i.message.edit({ content: ` __** تفضل التوب الإداري : **__ ` ,embeds: [embed] });
          }
  });
  //
  collector.on('end', collected => {
    console.log(`Collected ${collected.size} items`);
  });
   }
  //
  }});

    client.on("messageCreate" , message => {
      if(message.author.bot) return;
      if(message.content.startsWith(prefix+"لوق-التكت")) {
        if(!message.member.permissions.has("ADMINISTRATOR")) return;
        let channel = message.mentions.channels.first()
        if(!channel) return message.reply({ content: ` __** منشن الشات ! **__ `} )
        dbt.set(`logtkt_${message.guild.id}` , channel.id)
        message.reply({ content: ` > __** تم تعيين ${channel} كـ لوق تفعيل **__ ` })
      }
    });

client.on('messageCreate', async message => {
  if(message.author.bot) return;
  if(message.content === prefix+'انشاء-التكت') {
    if(!message.member.permissions.has('ADMINSTRATOR')) return;
    let row = new Discord.MessageActionRow()
    .addComponents(
    new Discord.MessageSelectMenu()
    .setMinValues(0)
    .setMaxValues(1)
    .setPlaceholder('إضغط هنا لرؤية خريطة التكت')
    .setCustomId('ticket')
    .addOptions([
    {
    label: 'التفعيل العسكري',
    description: 'لـ التفعيل و إعتبارك عسكري رسمياَ يرجى الضغط هنا .',
    emoji: '📩',
    value: 'tf3el3skre'
    },
    {
      label: 'الدعم الفني',
      description: 'إن كنت تريد مساعدة فـ يرجى الضغط هنا .',
      emoji: '📩',
      value: 'd3mfne'
      }
    ])
    )
let embed = new Discord.MessageEmbed()
.setColor('#32496b')
.setTitle(`𝗙𝗕𝗜 ~ 𝗣𝗼𝗹𝗶𝗰𝗲 || التكت العسكري .`)
.setDescription(` __** إن كنت تريد التفعيل فقم بالضغط على خيار التفعيل . \n و إن كنت تريد المساعدة فـ يرجى الضغط على خيار الدعم الفني . **__ `)
//.setFooter({ name:`${message.guild.name}`, iconURL:`${message.guild.iconURL()}`})
await message.channel.send({ embeds: [ embed ], components: [ row ] });
message.delete();
}});
      
            client.on("interactionCreate" , interaction => {
              if (!interaction.isSelectMenu()) return;
              if (interaction.customId == "ticket") {
              if(interaction.values[0] == 'tf3el3skre') {
                //
      if (interaction.member.roles.cache.has('980494313295331328'))
      return interaction.reply({ content: ' __** عذراَ , قم تم تفعيلك مسبقاَ ! **__ ', ephemeral: true });
            let cy = interaction.guild.channels.cache.get("1057669404768354314")
            let ch = dbt.get(`logtkt_${interaction.guild.id}`)
            let log = interaction.guild.channels.cache.find(c => c.id == ch)          
           let staffrole = interaction.guild.roles.cache.get("980494296320999424")
            //
            let embed = new MessageEmbed()
      .setColor("RANDOM")
      .setDescription(` __** يُرجى فعل ما تم كتابته بالأعلى و الإنتظار دون منشن **__ `)
      .setFooter({text:`${interaction.guild.name}` , iconURL:`${interaction.guild.iconURL()}`})
      .setTimestamp();
      //
let row = new Discord.MessageActionRow()
.addComponents(
new Discord.MessageButton()
.setStyle("PRIMARY")
.setLabel("تفعيل")
.setEmoji("👮🏼‍♂️")
.setCustomId("cb")
)
//
let row2 = new Discord.MessageActionRow()
    .addComponents(
    new Discord.MessageSelectMenu()
    .setMinValues(0)
    .setMaxValues(1)
    .setPlaceholder('إضغط هنا لرؤية خريطة التكت')
    .setCustomId('tktcomand')
    .addOptions([
    {
    label: 'حذف التكت',
    description: 'لـ حذف أحد التكتات (delete) يرجى الضغط هنا',
    emoji: '🟥',
    value: 'deletee'
    },
    {
      label: 'قفل التكت',
      description: 'لـ قفل أحد التكتات (close) يرجى الضغط هنا',
      emoji: '🟥',
      value: 'close'
      },
      {
        label: 'تغيير إسم التكت',
        description: 'لـ تغيير إسم أحد التكتات يرجى الضغط هنا',
        emoji: '🟥',
        value: 'rename'
        } 
    ])
    )
      //
            dbt.add(`counts_${interaction.message.id}`, 1)
             let count = dbt.get(`counts_${interaction.message.id}`);
             //
              interaction.reply({ content: ` __** جاري إنشاء التكت الخاص بك , يرجى الإنتظار **__ ` , ephemeral: true });
             //
              interaction.guild.channels.create(`تفعيل-${count}`, {
              type: 'GUILD_TEXT',
              parent:cy,
                    permissionOverwrites:[
                      {
                   id: interaction.user.id,
                   allow: ["SEND_MESSAGES","VIEW_CHANNEL"],
                },
                {
                  id: client.user.id,
                  allow:["VIEW_CHANNEL","SEND_MESSAGES","MANAGE_CHANNELS","EMBED_LINKS","ATTACH_FILES","ADD_REACTIONS","MENTION_EVERYONE","MANAGE_MESSAGES","READ_MESSAGE_HISTORY"]
                },
                {
                  id:staffrole,
                  allow:["VIEW_CHANNEL","SEND_MESSAGES","READ_MESSAGE_HISTORY"]
                },
                {
                  id: interaction.guild.roles.everyone,
                  deny:["VIEW_CHANNEL"]
                }
                    ]
            }).then(async c => {
                    
                   
dbt.set(`ticket_${c.id}`, {ticketby : interaction.user.id,count:count,})
                    
await c.send({ embeds:[embed], content:` __** ${interaction.user} مرحباَ 
لـ التفعيل قم بكتابة أيديك و قِطاعك و إرفاق دليل على قُبولك

بعدها قم بالضغط على الزر الازرق المسمى بـ "تفعيل" . 
${staffrole} **__`, components:[row,row2] });
await interaction.editReply({ content: ` __** تم إنشاء تكتك , ${c} . **__ `, ephemeral: true }).then(message => setTimeout(() => message.delete(), 10000));
let e = new Discord.MessageEmbed()
.setColor("GREEN")
.setTitle("إنشاء تكت !")
.setAuthor({name: interaction.user.tag,iconURL: interaction.user.displayAvatarURL({dynamic:true})})
.setThumbnail(interaction.guild.iconURL({dynamic:true}))
.setFooter({text:`${interaction.guild.name}`,iconURL: interaction.guild.iconURL({dynamic:true})})
                    .addFields( 
                      {
                        name:`__**التكت :**__`,
                        value:`**"${c}","${c.id}"**`
                      },
                      {
                        name:`__**صاحب التكت :**__`,
                        value:`**"${interaction.user}"**`
                      },
                      {
                        name:`__**رقم التكت :**__`,
                        value:`**"${count}"**`
                      },
                    )
                    log.send({ embeds:[e] });
      })
    };
//
if(interaction.values[0] == 'd3mfne') {
  let op = dbt.get(`ticketby:${interaction.user.id}`)
      
if (op) return interaction.reply({content: `**\`⛔\` | You Have An Open Ticket Here ____**`, ephemeral: true})
  if (!interaction.member.roles.cache.has('980494313295331328'))
      return interaction.reply({ content: ' __** عذراَ , يجب أن تملك رتبة وزارة الداخلية لتقوم بفتح تكت دعم فني , حالياَ قم بـ فتح تكت تفعيل **__ ', ephemeral: true });
          let cy = interaction.guild.channels.cache.get("1057669363219562516")
            let ch = dbt.get(`logtkt_${interaction.guild.id}`)
            let log = interaction.guild.channels.cache.find(c => c.id == ch)          
           let staffrole = interaction.guild.roles.cache.get("980494296320999424")
            //
            let embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(` __** يُرجى فعل ما تم كتابته بالأعلى و الإنتظار دون منشن **__ `)
      .setFooter({text:`${interaction.guild.name}` , iconURL:`${interaction.guild.iconURL()}`})
      .setTimestamp();
//
let row2 = new Discord.MessageActionRow()
    .addComponents(
    new Discord.MessageSelectMenu()
    .setMinValues(0)
    .setMaxValues(1)
    .setPlaceholder('إضغط هنا لرؤية خريطة التكت')
    .setCustomId('tktcomand')
    .addOptions([
    {
    label: 'حذف التكت',
    description: 'لـ حذف أحد التكتات (delete) يرجى الضغط هنا',
    emoji: '🟥',
    value: 'deletee'
    },
    {
      label: 'قفل التكت',
      description: 'لـ قفل أحد التكتات (close) يرجى الضغط هنا',
      emoji: '🟥',
      value: 'close'
      },
      {
        label: 'تغيير إسم التكت',
        description: 'لـ تغيير إسم أحد التكتات يرجى الضغط هنا',
        emoji: '🟥',
        value: 'rename'
        } 
    ])
    )
      //
            dbt.add(`countsd3mfne_${interaction.message.id}`, 1)
             let count = dbt.get(`countsd3mfne_${interaction.message.id}`);
             //
              interaction.reply({ content: ` __** جاري إنشاء التكت الخاص بك , يرجى الإنتظار **__ ` , ephemeral: true });
             //
              interaction.guild.channels.create(`دعم-فني-${count}`, {
              type: 'GUILD_TEXT',
              parent:cy,
                    permissionOverwrites:[
                      {
                   id: interaction.user.id,
                   allow: ["SEND_MESSAGES","VIEW_CHANNEL"],
                },
                {
                  id: client.user.id,
                  allow:["VIEW_CHANNEL","SEND_MESSAGES","MANAGE_CHANNELS","EMBED_LINKS","ATTACH_FILES","ADD_REACTIONS","MENTION_EVERYONE","MANAGE_MESSAGES","READ_MESSAGE_HISTORY"]
                },
                {
                  id:staffrole,
                  allow:["VIEW_CHANNEL","SEND_MESSAGES","READ_MESSAGE_HISTORY"]
                },
                {
                  id: interaction.guild.roles.everyone,
                  deny:["VIEW_CHANNEL"]
                }
                    ]
            }).then(async c => {
                    
                   
dbt.set(`ticketd3mfne_${c.id}`, {ticketby : interaction.user.id,count:count,})
                    
await c.send({ embeds:[embed], content:` __** ${interaction.user} مرحباَ 
قُم بكتابة ما تريده و إنتظار الدعم من دون منشن .

${staffrole} **__`, components:[row2] });
await interaction.editReply({ content: ` __** تم إنشاء تكتك , ${c} . **__ `, ephemeral: true }).then(message => setTimeout(() => message.delete(), 10000));
let e = new Discord.MessageEmbed()
.setColor("GREEN")
.setTitle("إنشاء تكت دعم فني !")
.setAuthor({name: interaction.user.tag,iconURL: interaction.user.displayAvatarURL({dynamic:true})})
.setThumbnail(interaction.guild.iconURL({dynamic:true}))
.setFooter({text:`${interaction.guild.name}`,iconURL: interaction.guild.iconURL({dynamic:true})})
                    .addFields( 
                      {
                        name:`__**التكت :**__`,
                        value:`**"${c}","${c.id}"**`
                      },
                      {
                        name:`__**صاحب التكت :**__`,
                        value:`**"${interaction.user}"**`
                      },
                      {
                        name:`__**رقم التكت :**__`,
                        value:`**"${count}"**`
                      },
                    )
                    log.send({ embeds:[e] });
      })
}
  } // تكت
});


              client.on("interactionCreate" , interaction => {
                if (!interaction.isSelectMenu()) return;
                 if (interaction.customId == "tktcomand") {
                    if(interaction.values[0] == 'deletee') {
let embeddeletedre = new Discord.MessageEmbed()
.setColor("RED")
.setDescription("__** سيتم حذف التكت بعد خمس ثواني ! **__ ")
//
  let ticketby = dbt.get(`ticketby_${interaction.user.id}`)
let ticket = dbt.get(`ticket_${interaction.channel.id}`)
  let chh = dbt.get(`logtkt_${interaction.guild.id}`)
let log = interaction.guild.channels.cache.find(c => c.id == chh)
  let ch = interaction.channel;
  //
   interaction.reply({ embeds: [embeddeletedre] }).then(async() => 
    setTimeout(async() => {
     await interaction.channel.delete()
    let member = client.users.cache.get(ticket.ticketby)
    let deletedd = new Discord.MessageEmbed()
    .setColor("RED")
    .setTitle("حذف تكت !")
    .setAuthor({name: interaction.user.tag,iconURL: interaction.user.displayAvatarURL({dynamic:true})})
    .setThumbnail(interaction.guild.iconURL({dynamic:true}))
    .setFooter({text:`${interaction.guild.name}`,iconURL: interaction.guild.iconURL({dynamic:true})})
    .addFields(
      {
        name:"__**التكت :**__",
        value:`**"${ch},${ch.id},${ch.name}"**`
      },
      {
        name:`__** صاحب التكت :**__`,
        value:`**"${member}"**`
      },
      {
        name:`__** تم حذف التكت بواسطة :**__`,
        value:`**"${interaction.user.id}"**`
      }
    )
    if (log) {
     await log.send({ embeds: [deletedd] });
    }
     await dbt.delete(`ticket_${interaction.ch.id}`)
    },4000)
)
}
                    if(interaction.values[0] == 'close') {
                      let yes = new Discord.MessageButton()
                      .setStyle("DANGER")
                      .setLabel("نعم")
                      .setCustomId("yes")
                
                      let no = new Discord.MessageButton()
                      .setStyle("SECONDARY")
                      .setLabel("لا")
                      .setCustomId("no")
                
                      let row3 = new MessageActionRow()
                      .addComponents([yes,no])
                      let embed3 = new Discord.MessageEmbed()
.setColor('RED')
.setTitle(`𝗙𝗕𝗜 ~ 𝗣𝗼𝗹𝗶𝗰𝗲 || التفعيل العسكري .`)
.setDescription(` __** هل أنت متأكد من إغلاق التكت ؟ , إذا كنت تريد إغلاقه قم بالضغط على "نعم"
و إن كنت تريد الإلغاء قم بالضغط على "لا" **__ `)
interaction.channel.send({ embeds:[embed3], components:[row3] });
                    }
                    if(interaction.values[0] == 'rename') {
                      const modal4 = new ModalBuilder()
                      .setCustomId('modal4')
                      .setTitle('تغيير إسم تكت :')
                            .addComponents(
                          new ModalField()
                      .setCustomId('name')
                      .setLabel("الإسم الجديد ؟")
                            .setRequired(true)
                            .setPlaceholder("يرجى كتابة الإسم الجديد هنا ... ")
                            .setMin(3)
                            .setMax(1000)
                      .setStyle('PARAGRAPH'),
                            )
                            client.modal.open(interaction , modal4);
            }
                }
              });

                client.on('modalSubmitInteraction', async interaction => {
                  if(interaction.customId == "modal4") {
                    let ch = interaction.channel
                    let ticketby = dbt.get(`ticketby_${interaction.user.id}`)
                    let ticket = dbt.get(`ticket_${interaction.channel.id}`)
                    let chh = dbt.get(`logtkt_${interaction.guild.id}`)
                    let log = interaction.guild.channels.cache.find(c => c.id == chh)          
                    let staffrole = interaction.guild.roles.cache.get("947815583959875614")
                    //
                    const name = interaction.fields.getTextInputValue("name")
                ch.setName(name)
                let embed7 = new Discord.MessageEmbed()
                .setColor('RED')
                .setDescription(` __** تم تغيير إسم التكت : ${ch} إلى : ${name} . **__ `)
                interaction.channel.send({ embeds: [embed7] });
                let member = client.users.cache.get(ticket.ticketby)
let em = new Discord.MessageEmbed()
.setColor("YELLOW")
.setTitle("تغيير إسم تكت !")
.setAuthor({name: interaction.user.tag,iconURL: interaction.user.displayAvatarURL({dynamic:true})})
.setThumbnail(interaction.guild.iconURL({dynamic:true}))
.setFooter({text:`${interaction.guild.name}`,iconURL: interaction.guild.iconURL({dynamic:true})})
.addFields(
  {
    name:"__**التكت :**__",
    value:`**"${ch},${ch.id},${ch.name}"**`
  },
  {
    name:`__** صاحب التكت :**__`,
    value:`**"${member}"**`
  },
  {
    name:`__** إسم التكت الجديد :**__`,
    value:`**"${name}"**`
  },
  {
    name:`__** تم تغيير إسم التكت بواسطة :**__`,
    value:`**"${interaction.user}"**`
  }
)
if (log) {
  log.send({ embeds:[em] });
}
}
                  });

client.on("interactionCreate" , interaction => {
if (!interaction.isButton()) return;
if (interaction.customId === "no") {
interaction.reply({ content: ` __** حسناَ , تم إلغاء عملية إغلاق التكت ! **__ ` });
interaction.message.delete()
}
//
if (interaction.customId === "yes") {
let ch = interaction.channel
let ticketby = dbt.get(`ticketby_${interaction.user.id}`) || dbt.get(`ticketby_${interaction.user.id}`)
let ticket = dbt.get(`ticket_${interaction.channel.id}`) || dbt.get(`ticketd3mfne_${interaction.channel.id}`)
let chh = dbt.get(`logtkt_${interaction.guild.id}`)
let log = interaction.guild.channels.cache.find(c => c.id == chh)          
let staffrole = interaction.guild.roles.cache.get("947815583959875614")
//
let d = new Discord.MessageButton()
.setLabel(`حذف التكت`)
.setEmoji("⛔")
.setStyle("DANGER")
.setCustomId("delete")
let o = new Discord.MessageButton()
.setLabel(`فتح التكت`)
.setEmoji("🔓")
.setStyle("PRIMARY")
.setCustomId("reopen")
let row4 = new MessageActionRow()
.addComponents([o,d])
let embed4 = new Discord.MessageEmbed()
.setColor('RED')
.setTitle(`𝗙𝗕𝗜 ~ 𝗣𝗼𝗹𝗶𝗰𝗲 || التفعيل العسكري .`)
.setDescription(` __** ضوابط فريق الدعم : **__ `)
//
let e = new Discord.MessageEmbed()
.setColor("RED")
.setTitle(`𝗙𝗕𝗜 ~ 𝗣𝗼𝗹𝗶𝗰𝗲 || التفعيل العسكري .`)
.setDescription(` __** تم إغلاق التكت بواسطة : ${interaction.user} **__ `)
interaction.message.delete()

let msg = interaction.channel.send({ embeds:[e] })

ch.permissionOverwrites.edit(ticket.ticketby,{ VIEW_CHANNEL:false,SEND_MESSAGES:false, });
ch.setName(`closed-${ticket.count}`)
//
ch.send({ embeds:[embed4], components:[row4] });
let member = client.users.cache.get(ticket.ticketby)
let em = new Discord.MessageEmbed()
.setColor("YELLOW")
.setTitle("إغلاق تكت !")
.setAuthor({name: interaction.user.tag,iconURL: interaction.user.displayAvatarURL({dynamic:true})})
.setThumbnail(interaction.guild.iconURL({dynamic:true}))
.setFooter({text:`${interaction.guild.name}`,iconURL: interaction.guild.iconURL({dynamic:true})})
.addFields(
  {
    name:"__**التكت :**__",
    value:`**"${ch}"**`
  },
  {
    name:`__** صاحب التكت :**__`,
    value:`**"${member}"**`
  },
  {
    name:`__** تم إغلاق التكت بواسطة :**__`,
    value:`**"${interaction.user}"**`
  }
)
if (log) {
  log.send({ embeds:[em] });
}
}
//
let embed5 = new Discord.MessageEmbed()
.setColor("RED")
.setDescription("__** سيتم حذف التكت بعد خمس ثواني ! **__ ")
if (interaction.customId === "delete") {
  let ticketby = dbt.get(`ticketby_${interaction.user.id}`)
let ticket = dbt.get(`ticket_${interaction.channel.id}`)
  let chh = dbt.get(`logtkt_${interaction.guild.id}`)
let log = interaction.guild.channels.cache.find(c => c.id == chh)
  let c = interaction.channel;
  //
   interaction.reply({ embeds: [embed5] }).then(async() => 
    setTimeout(async() => {
     await interaction.channel.delete()
    let member = client.users.cache.get(ticket.ticketby)
    let emdefds = new Discord.MessageEmbed()
    .setColor("RED")
    .setTitle("حذف تكت !")
    .setAuthor({name: interaction.user.tag,iconURL: interaction.user.displayAvatarURL({dynamic:true})})
    .setThumbnail(interaction.guild.iconURL({dynamic:true}))
    .setFooter({text:`${interaction.guild.name}`,iconURL: interaction.guild.iconURL({dynamic:true})})
    .addFields(
      {
        name:"__**التكت :**__",
        value:`**"${c},${c.id},${c.name}"**`
      },
      {
        name:`__** صاحب التكت :**__`,
        value:`**"${member}"**`
      },
      {
        name:`__** تم حذف التكت بواسطة :**__`,
        value:`**"${interaction.user}"**`
      }
    )
    if (log) {
     await log.send({ embeds: [emdefds] });
    }
     await dbt.delete(`ticket_${interaction.c.id}`)
    },4000))
}
//
let embed6 = new Discord.MessageEmbed()
.setColor("BLACK")
.setDescription(` __** تم إعادة فتح التكت بواسطة : ${interaction.user} **__ `)
if (interaction.customId === "reopen") {
let ticketby = dbt.get(`ticketby_${interaction.user.id}`) || dbt.get(`ticketby_${interaction.user.id}`)
let ticket = dbt.get(`ticket_${interaction.channel.id}`) || dbt.get(`ticketd3mfne_${interaction.channel.id}`)
  let chh = dbt.get(`logtkt_${interaction.guild.id}`)
let log = interaction.guild.channels.cache.find(c => c.id == chh)
  let c = interaction.channel;
  //
   interaction.message.delete()
c.permissionOverwrites.edit(ticket.ticketby,{VIEW_CHANNEL:true,SEND_MESSAGES:true})

c.setName(`ticket-${ticket.count}`)
     c.send({ embeds: [embed6] });
     let member = client.users.cache.get(ticket.ticketby)
     let emdr = new Discord.MessageEmbed()
    .setColor("RED")
    .setTitle("إعادة فتح تكت !")
    .setAuthor({name: interaction.user.tag,iconURL: interaction.user.displayAvatarURL({dynamic:true})})
    .setThumbnail(interaction.guild.iconURL({dynamic:true}))
    .setFooter({text:`${interaction.guild.name}`,iconURL: interaction.guild.iconURL({dynamic:true})})
    .addFields(
      {
        name:"__**التكت :**__",
        value:`**"${c},${c.id},${c.name}"**`
      },
      {
        name:`__** صاحب التكت :**__`,
        value:`**"${member}"**`
      },
      {
        name:`__** تم إعادة فتح التكت بواسطة :**__`,
        value:`**"${interaction.user}"**`
      }
    )
    if (log) {
      log.send({ embeds: [emdr] });
    }
}
  });

  client.on("messageCreate", async message => {
    if(message.author.bot) return;
if (message.content.toLowerCase().startsWith(prefix+"remove".toLowerCase()) || message.content.toLowerCase().startsWith("remove".toLowerCase()) || message.content.toLowerCase().startsWith("$remove".toLowerCase()) 
|| message.content.toLowerCase().startsWith(prefix+"طرد".toLowerCase()) ||  message.content.toLowerCase().startsWith("طرد".toLowerCase())) {
      if (!message.member.permissions.has('ADMINISTRATOR'))
      if (!message.member.roles.cache.has('980494296320999424'))
        return message.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ' });
  //
let ticket = dbt.get(`ticket_${message.channel.id}`) || dbt.get(`ticketd3mfne_${message.channel.id}`)
  if (!ticket) return message.reply({ content: ' __** الأوامر تعمل بالتكت فقط ! **__ ' });
  //
// let log = message.guild.channels.cache.get('1006354092563644497')
            let chh = dbt.get(`logtkt_${message.guild.id}`)
            let log = message.guild.channels.cache.find(c => c.id == chh)  
            let ch = message.channel;
  //
   let member = message.mentions.members.first();
       let user = message.mentions.members.first();
       if (!member) return message.reply({ content: ' __** منشن العسكري **__ ' });
       if(message.author.id == user.id) return message.reply({ content: ` __** لا يمكنك إزالة نفسك ! **__ ` });
        if(user.bot) return message.reply({ content: " __** لا يمكن إزالة البوتات :x: **__ " });
        //
      if(!dbt.has(`logtkt_${message.guild.id}`)) return message.reply({ content: ` __** يرجى تعيين لوق التكت قبل !
    \`${prefix}لوق-التكت\` **__ ` });
    // 
  let embed = new Discord.MessageEmbed()
.setColor("RED")
.setDescription(` __** تم إزالة : ${user} من : ${ch} من قبل الإداري : ${message.author} **__ `)
//
await ch.permissionOverwrites.edit(user.user.id,{VIEW_CHANNEL:false,SEND_MESSAGES:false,READ_MESSAGE_HISTORY:false,})
await message.reply({ embeds: [embed] });
//
let embed2 = new Discord.MessageEmbed()
.setColor("RED")
.setTitle("إزالة عضو من التكت !")
.setAuthor({name: message.author.tag,iconURL: message.author.displayAvatarURL({dynamic:true})})
.setThumbnail(message.guild.iconURL({dynamic:true}))
.setFooter({text:`${message.guild.name}`,iconURL: message.guild.iconURL({dynamic:true})})
.addFields(
  {
    name:"__**التكت :**__",
    value:`**"${ch},${ch.id},${ch.name}"**`
  },
  {
    name:`__** العضو اللي تم إزالته من التكت :**__`,
    value:`**"${user}"**`
  },
  {
    name:`__** تم إزالة العضو بواسطة :**__`,
    value:`**"${message.author}"**`
  }
)
  log.send({ embeds: [embed2] });
}
    });

    client.on("messageCreate", async message => {
      if(message.author.bot) return;
if (message.content.toLowerCase().startsWith(prefix+"add".toLowerCase()) || message.content.toLowerCase().startsWith("add".toLowerCase()) || message.content.toLowerCase().startsWith("add".toLowerCase()) 
|| message.content.toLowerCase().startsWith(prefix+"اضافة".toLowerCase()) ||  message.content.toLowerCase().startsWith("اضافة".toLowerCase())) {
if (!message.member.permissions.has('ADMINISTRATOR'))
        if (!message.member.roles.cache.has('980494296320999424'))
          return message.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ' });
    //
let ticket = dbt.get(`ticket_${message.channel.id}`) || dbt.get(`ticketd3mfne_${message.channel.id}`)
  if (!ticket) return message.reply({ content: ' __** الأوامر تعمل بالتكت فقط ! **__ ' });
  //
  // let log = message.guild.channels.cache.get('1006354092563644497')
            let chh = dbt.get(`logtkt_${message.guild.id}`)
            let log = message.guild.channels.cache.find(c => c.id == chh)
    let ch = message.channel;
    //
     let member = message.mentions.members.first();
         let user = message.mentions.members.first();
         if (!member) return message.reply({ content: ' __** منشن العسكري **__ ' });
         if(message.author.id == user.id) return message.reply({ content: ` __** لا يمكنك إدخال نفسك ! **__ ` });
          if(user.bot) return message.reply({ content: " __** لا يمكن إدخال البوتات :x: **__ " });
          //
        if(!dbt.has(`logtkt_${message.guild.id}`)) return message.reply({ content: ` __** يرجى تعيين لوق التكت قبل !
      \`${prefix}لوق-التكت\` **__ ` });
      // 
    let embed = new Discord.MessageEmbed()
  .setColor("RED")
  .setDescription(` __** تم إدخال : ${user} في : ${ch} من قبل الإداري : ${message.author} **__ `)
  //
  await ch.permissionOverwrites.edit(user.user.id,{VIEW_CHANNEL:true,SEND_MESSAGES:true,READ_MESSAGE_HISTORY:true,})
  await message.reply({ embeds: [embed] });
  //
  let embed2 = new Discord.MessageEmbed()
  .setColor("RED")
  .setTitle("إدخال عضو إلى التكت !")
  .setAuthor({name: message.author.tag,iconURL: message.author.displayAvatarURL({dynamic:true})})
  .setThumbnail(message.guild.iconURL({dynamic:true}))
  .setFooter({text:`${message.guild.name}`,iconURL: message.guild.iconURL({dynamic:true})})
  .addFields(
    {
      name:"__**التكت :**__",
      value:`**"${ch},${ch.id},${ch.name}"**`
    },
    {
      name:`__** العضو الذي تم إدخاله من التكت :**__`,
      value:`**"${user}"**`
    },
    {
      name:`__** تم إدخال العضو بواسطة :**__`,
      value:`**"${message.author}"**`
    }
  )
    log.send({ embeds: [embed2] });
  }
      });

      client.on("messageCreate", async message => {
        if(message.author.bot) return;
if (message.content.toLowerCase().startsWith(prefix+"close".toLowerCase()) || message.content.toLowerCase().startsWith("close".toLowerCase()) || message.content.toLowerCase().startsWith("close".toLowerCase()) 
|| message.content.toLowerCase().startsWith(prefix+"اقفال".toLowerCase()) ||  message.content.toLowerCase().startsWith("اقفال".toLowerCase())) {
        if (!message.member.permissions.has('ADMINISTRATOR'))
          if (!message.member.roles.cache.has('980494296320999424'))
            return message.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ' });
       //
let ticket = dbt.get(`ticket_${message.channel.id}`) || dbt.get(`ticketd3mfne_${message.channel.id}`)
  if (!ticket) return message.reply({ content: ' __** الأوامر تعمل بالتكت فقط ! **__ ' });
  //
      let log = message.guild.channels.cache.get('1006354092563644497')
      let ch = message.channel;
      //
          if(!dbt.has(`logtkt_${message.guild.id}`)) return message.reply({ content: ` __** يرجى تعيين لوق التكت قبل !
        \`${prefix}لوق-التكت\` **__ ` });
        // 
        let yes = new Discord.MessageButton()
        .setStyle("DANGER")
        .setLabel("نعم")
        .setCustomId("yes")
  
        let no = new Discord.MessageButton()
        .setStyle("SECONDARY")
        .setLabel("لا")
        .setCustomId("no")
  
        let row3 = new MessageActionRow()
        .addComponents([yes,no])
        let embed3 = new Discord.MessageEmbed()
.setColor('RED')
.setTitle(`𝗙𝗕𝗜 ~ 𝗣𝗼𝗹𝗶𝗰𝗲 || التفعيل العسكري .`)
.setDescription(` __** هل أنت متأكد من إغلاق التكت ؟ , إذا كنت تريد إغلاقه قم بالضغط على "نعم"
و إن كنت تريد الإلغاء قم بالضغط على "لا" **__ `)
message.channel.send({ embeds:[embed3], components:[row3] });
          }
        });

client.on("messageCreate", interaction => {
if(interaction.author.bot) return;
if (interaction.content.toLowerCase().startsWith(prefix+"delete".toLowerCase()) || interaction.content.toLowerCase().startsWith("delete".toLowerCase()) || interaction.content.toLowerCase().startsWith("$delete".toLowerCase()) 
|| interaction.content.toLowerCase().startsWith(prefix+"حذف".toLowerCase()) || interaction.content.toLowerCase().startsWith("حذف".toLowerCase())) {
  if (!interaction.member.permissions.has('ADMINISTRATOR'))
if (!interaction.member.roles.cache.has('980494296320999424'))
return interaction.reply({ content: ' __** أنت لاتملك صلاحيات كافية **__ ' });
       //
let ticket = dbt.get(`ticket_${interaction.channel.id}`) || dbt.get(`ticketd3mfne_${interaction.channel.id}`)
if (!ticket) return interaction.reply({ content: ' __** الأوامر تعمل بالتكت فقط ! **__ ' });
  //
let embeddeletedre = new Discord.MessageEmbed()
.setColor("RED")
.setDescription("__** سيتم حذف التكت بعد خمس ثواني ! **__ ")
//
  let ticketby = dbt.get(`ticketby_${interaction.member.id}`)
  let chh = dbt.get(`logtkt_${interaction.guild.id}`)
let log = interaction.guild.channels.cache.find(c => c.id == chh)
  let ch = interaction.channel;
  //
   interaction.reply({ embeds: [embeddeletedre] }).then(async() => 
    setTimeout(async() => {
     await interaction.channel.delete()
    let member = client.users.cache.get(ticket.ticketby)
    let deletedd = new Discord.MessageEmbed()
    .setColor("RED")
    .setTitle("حذف تكت !")
//    .setAuthor({name: interaction.user.tag,iconURL: interaction.user.displayAvatarURL({dynamic:true})})
    .setThumbnail(interaction.guild.iconURL({dynamic:true}))
    .setFooter({text:`${interaction.guild.name}`,iconURL: interaction.guild.iconURL({dynamic:true})})
    .addFields(
      {
        name:"__**التكت :**__",
        value:`**"${ch},${ch.id},${ch.name}"**`
      },
      {
        name:`__** صاحب التكت :**__`,
        value:`**"${member}"**`
      },
      {
        name:`__** تم حذف التكت بواسطة :**__`,
        value:`**"${interaction.member.id}"**`
      }
    )
    if (log) {
     await log.send({ embeds: [deletedd] });
    }
//     await dbt.delete(`ticket_${interaction.ch.id}`)
    },4000)
                                  )
}});

client.on("messageCreate", message => {
if(message.author.bot) return;
if(message.content.includes(`<@${client.user.id}>`) || message.content.includes("برفكس") || message.content.includes(`البرفكس`)) {
          //
let ticket = dbt.get(`ticket_${message.channel.id}`) || dbt.get(`ticketd3mfne_${message.channel.id}`)
  let row2 = new Discord.MessageActionRow()
    .addComponents(
    new Discord.MessageSelectMenu()
    .setMinValues(0)
    .setMaxValues(1)
    .setPlaceholder('إضغط هنا لرؤية خريطة التكت')
    .setCustomId('tktcomand')
  .addOptions([
    {
    label: 'حذف التكت',
    description: 'لـ حذف أحد التكتات (delete) يرجى الضغط هنا',
    emoji: '🟥',
    value: 'deletee'
    },
    {
      label: 'قفل التكت',
      description: 'لـ قفل أحد التكتات (close) يرجى الضغط هنا',
      emoji: '🟥',
      value: 'close'
      },
      {
        label: 'تغيير إسم التكت',
        description: 'لـ تغيير إسم أحد التكتات يرجى الضغط هنا',
        emoji: '🟥',
        value: 'rename'
        } 
    ])
    )
  if (ticket) return message.reply({ components:[row2] });
  //
          const duration = moment
          .duration(client.uptime)
          .format(" D [أيام], H [ساعات], m [دقائق], s [ثانية]");
          //
          let embed = new Discord.MessageEmbed()
          .setTitle("المساعد الوزاري")
          .addFields(
            { name: '__**سيرفراتي :**__', value: `__**${client.guilds.cache.size}**__`},
           // { name: '__** عدد اعضاء سيرفراتي :**__', value: `__**${server.memberCount}**__`},
            { name: '__**بنقي :**__ ', value: `__**${client.ws.ping}**__`},
            { name: '__**متصل من :**__ ', value: `__**${duration}**__`},
            { name: '__**المطور الخاص بي :**__ ', value: `__**<@${owner}>**__`},
            { name: '__**إذا حاب تعرف أكثر عني :**__ ', value: `__**${prefix}توضيح**__`},
          )
          .setColor("#32496b")
          message.reply({ embeds: [embed] });
          }
});

client.on("interactionCreate" , interaction => {
if (interaction.member.bot || !interaction.channel.guild || interaction.member.roles.cache.has('980494295444361216') || !interaction.isButton()) return;
         let sglaltf3el = interaction.guild.channels.cache.get('1016292689941106758')
               let w8wanen1 = interaction.guild.channels.cache.get('1073254895056068649')
               let w8wanen2 = interaction.guild.channels.cache.get('1073253082986709123')
               let w8wanen3 = interaction.guild.channels.cache.get('1073253152750571591')
               //
                       if(interaction.customId == "cb") {
                         if(cooldown.has(interaction.member.id)) {
                           interaction.reply({ content: " __** يرجى الإنتظار ساعة كاملة قبل التفعيل مجدداَ ! **__ " , ephemeral:true})
                         } else {
           let filter = m => m.member.id === interaction.member.id
                         //
                         var msg1;
                         let embed = new Discord.MessageEmbed()
                         .setAuthor({name:`${interaction.member.user.username}` , iconURL:`${interaction.member.user.displayAvatarURL()}`})
                         .setTitle('<:emoji_20:981170142744567808>  FBI ON TOP . <:emoji_20:981170142744567808> ')
                         .setDescription(` > __** إسمك ؟ **__ `)
                         .setFooter({text:`${interaction.guild.name}` , iconURL:`${interaction.guild.iconURL()}`})
                         .setThumbnail(interaction.guild.iconURL())
                         .setColor("RANDOM")
                         .setTimestamp();
                         interaction.channel.send({ content: ` __** السؤال الأول , <@${interaction.member.id}> : **__ `, embeds: [embed] })
                         .then(message => {
                         message.channel.awaitMessages({ filter, max: 1, time: 90000, errors: ['time'] })
                         .then(collected => {
                         dbb.set(`guild=${interaction.guild.id}_user=${interaction.member.id}_name`, collected.first().content)
                         collected.first().delete();
                         msg1 = collected.first().content;
                         //
                         var msg2;
                                 let embed2 = new Discord.MessageEmbed()
                         .setAuthor({name:`${interaction.member.user.username}` , iconURL:`${interaction.member.user.displayAvatarURL()}`})
                         .setTitle('<:emoji_20:981170142744567808>  FBI ON TOP . <:emoji_20:981170142744567808> ')
                         .setDescription(` > __** عمرك ؟ **__ `)
                         .setFooter({text:`${interaction.guild.name}` , iconURL:`${interaction.guild.iconURL()}`})
                         .setThumbnail(interaction.guild.iconURL())
                         .setColor("RANDOM")
                         .setTimestamp();
                         message.edit({ content: ` __** السؤال الثاني , <@${interaction.member.id}> : **__ `, embeds: [embed2] })
                         .then(message => {
                         message.channel.awaitMessages({ filter, max: 1, time: 90000, errors: ['time'] })
                         .then(collected => {
                         dbb.set(`guild=${interaction.guild.id}_user=${interaction.member.id}_aeg`, collected.first().content)
                         collected.first().delete();
                         msg2 = collected.first().content;
                         //
                         var msg3;
                         let embed3 = new Discord.MessageEmbed()
                 .setAuthor({name:`${interaction.member.user.username}` , iconURL:`${interaction.member.user.displayAvatarURL()}`})
                         .setTitle('<:emoji_20:981170142744567808>  FBI ON TOP . <:emoji_20:981170142744567808> ')
                 .setDescription(` > __** ايديك ؟ **__ `)
                 .setFooter({text:`${interaction.guild.name}` , iconURL:`${interaction.guild.iconURL()}`})
                 .setThumbnail(interaction.guild.iconURL())
                 .setColor("RANDOM")
                 .setTimestamp();
                 message.edit({ content: ` __** السؤال الثالث , <@${interaction.member.id}> : **__ `, embeds: [embed3] })
                 .then(message => {
                 message.channel.awaitMessages({ filter, max: 1, time: 90000, errors: ['time'] })
                 .then(collected => {
                 dbb.set(`guild=${interaction.guild.id}_user=${interaction.member.id}_id`, collected.first().content)
                 collected.first().delete();
                 msg3 = collected.first().content;
                 //
                 var msg4;
                 let embed4 = new Discord.MessageEmbed()
         .setAuthor({name:`${interaction.member.user.username}` , iconURL:`${interaction.member.user.displayAvatarURL()}`})
                         .setTitle('<:emoji_20:981170142744567808>  FBI ON TOP . <:emoji_20:981170142744567808> ')
         .setDescription(` > __** قطاعك العسكري ؟ **__ `)
         .setFooter({text:`${interaction.guild.name}` , iconURL:`${interaction.guild.iconURL()}`})
         .setThumbnail(interaction.guild.iconURL())
         .setColor("RANDOM")
         .setTimestamp();
         message.edit({ content: ` __** السؤال الرابع , <@${interaction.member.id}> : **__ `, embeds: [embed4] })
         .then(message => {
         message.channel.awaitMessages({ filter, max: 1, time: 90000, errors: ['time'] })
         .then(collected => {
         dbb.set(`guild=${interaction.guild.id}_user=${interaction.member.id}_sector`, collected.first().content)
         collected.first().delete();
         msg4 = collected.first().content;
                         //
         var name = dbb.fetch(`guild=${interaction.guild.id}_user=${interaction.member.id}_name`)
         var aeg = dbb.fetch(`guild=${interaction.guild.id}_user=${interaction.member.id}_aeg`)
         var id = dbb.fetch(`guild=${interaction.guild.id}_user=${interaction.member.id}_id`)
         var sector = dbb.fetch(`guild=${interaction.guild.id}_user=${interaction.member.id}_sector`)
         const t788 = new Discord.MessageActionRow().addComponents(new Discord.MessageButton().setLabel(`نعم`).setEmoji("✅").setStyle("SUCCESS").setCustomId("yest788"), new Discord.MessageButton().setLabel(`لا`).setEmoji("❌").setStyle("DANGER").setCustomId("not788"));
         //
         message.edit({ content: ` __** FBI Police || التحقق العسكري . \n هوية العسكري : <@${interaction.member.id}> . \n إسم العسكري : ${name} . \n عمر العسكري : ${aeg} . \n ايدي العسكري : \`${id}\` . \n قطاع العسكري : ${sector} . \n هل هذه المعلومات صحيحة ؟ . **__ `,embeds:[],components:[t788] });
                       })}
                       )})
                     })}
                     )})
                   })}
                   )
                 }
                 }
                 //
                 if(interaction.customId == "yest788") {
         const bdaaltf3el = new Discord.MessageActionRow().addComponents(new Discord.MessageButton().setLabel(`بدء التفعيل`).setEmoji("✅").setStyle("SUCCESS").setCustomId("bdaaltf3el"));
interaction.message.edit({ content: ` __** حسناَ بعدما قمت بتأكيد معلوماتك ,
قم بالضغط على الزر الازرق و المسمى بـ " بدء التفعيل" .
يرجى الإنتباه كل سؤال لديك 5 دقائق للإجابة عنه و الأختبار مكون من 15 سؤال , 
إي وقتك الإجمالي هو "75 دقيقة" 
ملاحطة ; سيتم إخفاء شاتات المأخوذ منها الإسئلة ^ **__ `, components:[bdaaltf3el] });
                 }
                 //
         if(interaction.customId == "not788") {
         const m3lomat3l6 = new Discord.MessageActionRow().addComponents(new Discord.MessageButton().setLabel(`الإسم`).setEmoji("😔").setStyle("PRIMARY").setCustomId("name3'l6"), 
         new Discord.MessageButton().setLabel(`العمر`).setEmoji("😔").setStyle("SECONDARY").setCustomId("aeg3'l6"), 
         new Discord.MessageButton().setLabel(`الأيدي`).setEmoji("😔").setStyle("SUCCESS").setCustomId("id3'l6"), 
         new Discord.MessageButton().setLabel(`القطاع العسكري`).setEmoji("😔").setStyle("DANGER").setCustomId("sector3'l6"));
         interaction.message.edit({ content: ` __** يرجى تحديد ما هو غير صحيح ! **__ `, components:[m3lomat3l6] });
         }
         //
                 if(interaction.customId == "name3'l6") {
                   let filter = m => m.member.id === interaction.member.id
                   var t3del1;
                   let embed = new Discord.MessageEmbed()
                   .setAuthor({name:`${interaction.member.user.username}` , iconURL:`${interaction.member.user.displayAvatarURL()}`})
                         .setTitle('<:emoji_20:981170142744567808>  FBI ON TOP . <:emoji_20:981170142744567808> ')
                   .setDescription(` > __** إسمك ؟ **__ `)
                   .setFooter({text:`${interaction.guild.name}` , iconURL:`${interaction.guild.iconURL()}`})
                   .setThumbnail(interaction.guild.iconURL())
                   .setColor("RANDOM")
                   .setTimestamp();
                  interaction.message.edit({ content: ` __** يرجى كتابة اسمك بشكل صحيح ! , <@${interaction.member.id}> : **__ `, embeds: [embed],components:[] })
                   .then(message => {
                   message.channel.awaitMessages({ filter, max: 1, time: 90000, errors: ['time'] })
                   .then(collected => {
                   dbb.set(`guild=${interaction.guild.id}_user=${interaction.member.id}_name`, collected.first().content)
                   collected.first().delete();
                   t3del1 = collected.first().content;
                                             //
         var name = dbb.fetch(`guild=${interaction.guild.id}_user=${interaction.member.id}_name`)
         var aeg = dbb.fetch(`guild=${interaction.guild.id}_user=${interaction.member.id}_aeg`)
         var id = dbb.fetch(`guild=${interaction.guild.id}_user=${interaction.member.id}_id`)
         var sector = dbb.fetch(`guild=${interaction.guild.id}_user=${interaction.member.id}_sector`)
         const t788 = new Discord.MessageActionRow().addComponents(new Discord.MessageButton().setLabel(`نعم`).setEmoji("✅").setStyle("SUCCESS").setCustomId("yest788"), new Discord.MessageButton().setLabel(`لا`).setEmoji("❌").setStyle("DANGER").setCustomId("not788"));
         //
         message.edit({ content: ` __** FBI Police || التحقق العسكري . \n هوية العسكري : <@${interaction.member.id}> . \n إسم العسكري : ${name} . \n عمر العسكري : ${aeg} . \n ايدي العسكري : \`${id}\` . \n قطاع العسكري : ${sector} . \n هل هذه المعلومات صحيحة ؟ . **__ `,embeds:[],components:[t788] });
         })})
                 }
                   //
                 if(interaction.customId == "aeg3'l6") {
                   let filter = m => m.member.id === interaction.member.id
                   var t3del2;
                   let embed = new Discord.MessageEmbed()
                   .setAuthor({name:`${interaction.member.user.username}` , iconURL:`${interaction.member.user.displayAvatarURL()}`})
                         .setTitle('<:emoji_20:981170142744567808>  FBI ON TOP . <:emoji_20:981170142744567808> ')
                   .setDescription(` > __** عمرك ؟ **__ `)
                   .setFooter({text:`${interaction.guild.name}` , iconURL:`${interaction.guild.iconURL()}`})
                   .setThumbnail(interaction.guild.iconURL())
                   .setColor("RANDOM")
                   .setTimestamp();
                  interaction.message.edit({ content: ` __** يرجى كتابة عمرك بشكل صحيح ! , <@${interaction.member.id}> : **__ `, embeds: [embed],components:[] })
                   .then(message => {
                   message.channel.awaitMessages({ filter, max: 1, time: 90000, errors: ['time'] })
                   .then(collected => {
                   dbb.set(`guild=${interaction.guild.id}_user=${interaction.member.id}_aeg`, collected.first().content)
                   collected.first().delete();
                   t3del2 = collected.first().content;
                                             //
         var name = dbb.fetch(`guild=${interaction.guild.id}_user=${interaction.member.id}_name`)
         var aeg = dbb.fetch(`guild=${interaction.guild.id}_user=${interaction.member.id}_aeg`)
         var id = dbb.fetch(`guild=${interaction.guild.id}_user=${interaction.member.id}_id`)
         var sector = dbb.fetch(`guild=${interaction.guild.id}_user=${interaction.member.id}_sector`)
         const t788 = new Discord.MessageActionRow().addComponents(new Discord.MessageButton().setLabel(`نعم`).setEmoji("✅").setStyle("SUCCESS").setCustomId("yest788"), new Discord.MessageButton().setLabel(`لا`).setEmoji("❌").setStyle("DANGER").setCustomId("not788"));
         //
         message.edit({ content: ` __** FBI Police || التحقق العسكري . \n هوية العسكري : <@${interaction.member.id}> . \n إسم العسكري : ${name} . \n عمر العسكري : ${aeg} . \n ايدي العسكري : \`${id}\` . \n قطاع العسكري : ${sector} . \n هل هذه المعلومات صحيحة ؟ . **__ `,embeds:[],components:[t788] });
         })})
                 }
                   //
                   if(interaction.customId == "id3'l6") {
                     let filter = m => m.member.id === interaction.member.id
                     var t3del2;
                     let embed = new Discord.MessageEmbed()
                     .setAuthor({name:`${interaction.member.user.username}` , iconURL:`${interaction.member.user.displayAvatarURL()}`})
                         .setTitle('<:emoji_20:981170142744567808>  FBI ON TOP . <:emoji_20:981170142744567808> ')
                     .setDescription(` > __** ايديك ؟ **__ `)
                     .setFooter({text:`${interaction.guild.name}` , iconURL:`${interaction.guild.iconURL()}`})
                     .setThumbnail(interaction.guild.iconURL())
                     .setColor("RANDOM")
                     .setTimestamp();
                    interaction.message.edit({ content: ` __** يرجى كتابة ايديك بشكل صحيح ! , <@${interaction.member.id}> : **__ `, embeds: [embed],components:[] })
                     .then(message => {
                     message.channel.awaitMessages({ filter, max: 1, time: 90000, errors: ['time'] })
                     .then(collected => {
                     dbb.set(`guild=${interaction.guild.id}_user=${interaction.member.id}_id`, collected.first().content)
                     collected.first().delete();
                     t3del2 = collected.first().content;
                                               //
           var name = dbb.fetch(`guild=${interaction.guild.id}_user=${interaction.member.id}_name`)
           var aeg = dbb.fetch(`guild=${interaction.guild.id}_user=${interaction.member.id}_aeg`)
           var id = dbb.fetch(`guild=${interaction.guild.id}_user=${interaction.member.id}_id`)
           var sector = dbb.fetch(`guild=${interaction.guild.id}_user=${interaction.member.id}_sector`)
           const t788 = new Discord.MessageActionRow().addComponents(new Discord.MessageButton().setLabel(`نعم`).setEmoji("✅").setStyle("SUCCESS").setCustomId("yest788"), new Discord.MessageButton().setLabel(`لا`).setEmoji("❌").setStyle("DANGER").setCustomId("not788"));
           //
           message.edit({ content: ` __** FBI Police || التحقق العسكري . \n هوية العسكري : <@${interaction.member.id}> . \n إسم العسكري : ${name} . \n عمر العسكري : ${aeg} . \n ايدي العسكري : \`${id}\` . \n قطاع العسكري : ${sector} . \n هل هذه المعلومات صحيحة ؟ . **__ `,embeds:[],components:[t788] });
           })})
                   }
                     //
                     if(interaction.customId == "sector3'l6") {
                       let filter = m => m.member.id === interaction.member.id
                       var t3del2;
                       let embed = new Discord.MessageEmbed()
                       .setAuthor({name:`${interaction.member.user.username}` , iconURL:`${interaction.member.user.displayAvatarURL()}`})
                         .setTitle('<:emoji_20:981170142744567808>  FBI ON TOP . <:emoji_20:981170142744567808> ')
                       .setDescription(` > __** قطاعك العسكري ؟ **__ `)
                       .setFooter({text:`${interaction.guild.name}` , iconURL:`${interaction.guild.iconURL()}`})
                       .setThumbnail(interaction.guild.iconURL())
                       .setColor("RANDOM")
                       .setTimestamp();
                      interaction.message.edit({ content: ` __** يرجى كتابة قطاعك العسكري بشكل صحيح ! , <@${interaction.member.id}> : **__ `, embeds: [embed],components:[] })
                       .then(message => {
                       message.channel.awaitMessages({ filter, max: 1, time: 90000, errors: ['time'] })
                       .then(collected => {
                       dbb.set(`guild=${interaction.guild.id}_user=${interaction.member.id}_sector`, collected.first().content)
                       collected.first().delete();
                       t3del2 = collected.first().content;
                                                 //
             var name = dbb.fetch(`guild=${interaction.guild.id}_user=${interaction.member.id}_name`)
             var aeg = dbb.fetch(`guild=${interaction.guild.id}_user=${interaction.member.id}_aeg`)
             var id = dbb.fetch(`guild=${interaction.guild.id}_user=${interaction.member.id}_id`)
             var sector = dbb.fetch(`guild=${interaction.guild.id}_user=${interaction.member.id}_sector`)
             const t788 = new Discord.MessageActionRow().addComponents(new Discord.MessageButton().setLabel(`نعم`).setEmoji("✅").setStyle("SUCCESS").setCustomId("yest788"), new Discord.MessageButton().setLabel(`لا`).setEmoji("❌").setStyle("DANGER").setCustomId("not788"));
             //
             message.edit({ content: ` __** FBI Police || التحقق العسكري . \n هوية العسكري : <@${interaction.member.id}> . \n إسم العسكري : ${name} . \n عمر العسكري : ${aeg} . \n ايدي العسكري : \`${id}\` . \n قطاع العسكري : ${sector} . \n هل هذه المعلومات صحيحة ؟ . **__ `,embeds:[],components:[t788] });
             })})
                     }
                       // 
                       if(interaction.customId == "bdaaltf3el") {
        w8wanen1.permissionOverwrites.edit(interaction.member.id, { VIEW_CHANNEL: false });
         w8wanen2.permissionOverwrites.edit(interaction.member.id, { VIEW_CHANNEL: false });
         w8wanen3.permissionOverwrites.edit(interaction.member.id, { VIEW_CHANNEL: false }); 
         interaction.member.send({ content: ` __** خيار
         طماطم
         طماطم
          بقدونس
          كسبره
         دم
         تفاح اخضر
          فجل
         خس
          رمان
         فراولة
          بروكلي
          بطيخ
           كوسة
          بصل اخضر
          سبانخ 
          مكونات سلطة طعمه جداً . **__ ` });
const row1 = new Discord.MessageActionRow().addComponents(new Discord.MessageButton().setLabel(`نعم الجملة صحيحة`).setEmoji("✅").setStyle("SUCCESS").setCustomId("yes1"), new Discord.MessageButton().setLabel(`لا جملة خاطئة`).setEmoji("❌").setStyle("DANGER").setCustomId("no1"))
interaction.message.edit({ content: ` __**  يُمنع رفع السلاح بالمنطقة الآمنة و ذالك مخالف للميثاق العسكري .
هل الجملة صحيحة أم خاطئة ؟ **__ `, components: [row1] });
                       }
                       const row2 = new Discord.MessageActionRow().addComponents(new Discord.MessageButton().setLabel(`نعم الجملة صحيحة`).setEmoji("✅").setStyle("SUCCESS").setCustomId("yes2"), new Discord.MessageButton().setLabel(`لا جملة خاطئة`).setEmoji("❌").setStyle("DANGER").setCustomId("no2"))
                       const row3 = new Discord.MessageActionRow().addComponents(new Discord.MessageButton().setLabel(`نعم الجملة صحيحة`).setEmoji("✅").setStyle("SUCCESS").setCustomId("yes3"), new Discord.MessageButton().setLabel(`لا جملة خاطئة`).setEmoji("❌").setStyle("DANGER").setCustomId("no3"))
                       const row4 = new Discord.MessageActionRow().addComponents(new Discord.MessageButton().setLabel(`نعم الجملة صحيحة`).setEmoji("✅").setStyle("SUCCESS").setCustomId("yes4"), new Discord.MessageButton().setLabel(`لا جملة خاطئة`).setEmoji("❌").setStyle("DANGER").setCustomId("no4"))
                       const row5 = new Discord.MessageActionRow().addComponents(new Discord.MessageButton().setLabel(`نعم الجملة صحيحة`).setEmoji("✅").setStyle("SUCCESS").setCustomId("yes5"), new Discord.MessageButton().setLabel(`لا جملة خاطئة`).setEmoji("❌").setStyle("DANGER").setCustomId("no5"))
                       const row6 = new Discord.MessageActionRow().addComponents(new Discord.MessageButton().setLabel(`نعم الجملة صحيحة`).setEmoji("✅").setStyle("SUCCESS").setCustomId("yes6"), new Discord.MessageButton().setLabel(`لا جملة خاطئة`).setEmoji("❌").setStyle("DANGER").setCustomId("no6"))
                       const row7 = new Discord.MessageActionRow().addComponents(new Discord.MessageButton().setLabel(`نعم الجملة صحيحة`).setEmoji("✅").setStyle("SUCCESS").setCustomId("yes7"), new Discord.MessageButton().setLabel(`لا جملة خاطئة`).setEmoji("❌").setStyle("DANGER").setCustomId("no7"))
                       const row8 = new Discord.MessageActionRow().addComponents(new Discord.MessageButton().setLabel(`نعم الجملة صحيحة`).setEmoji("✅").setStyle("SUCCESS").setCustomId("yes8"), new Discord.MessageButton().setLabel(`لا جملة خاطئة`).setEmoji("❌").setStyle("DANGER").setCustomId("no8"))
                       const row9 = new Discord.MessageActionRow().addComponents(new Discord.MessageButton().setLabel(`نعم الجملة صحيحة`).setEmoji("✅").setStyle("SUCCESS").setCustomId("yes9"), new Discord.MessageButton().setLabel(`لا جملة خاطئة`).setEmoji("❌").setStyle("DANGER").setCustomId("no9"))
                       const row10 = new Discord.MessageActionRow().addComponents(new Discord.MessageButton().setLabel(`نعم الجملة صحيحة`).setEmoji("✅").setStyle("SUCCESS").setCustomId("yes10"), new Discord.MessageButton().setLabel(`لا جملة خاطئة`).setEmoji("❌").setStyle("DANGER").setCustomId("no10"))
                       const row11 = new Discord.MessageActionRow().addComponents(new Discord.MessageButton().setLabel(`نعم الجملة صحيحة`).setEmoji("✅").setStyle("SUCCESS").setCustomId("yes11"), new Discord.MessageButton().setLabel(`لا جملة خاطئة`).setEmoji("❌").setStyle("DANGER").setCustomId("no11"))
                       const row12 = new Discord.MessageActionRow().addComponents(new Discord.MessageButton().setLabel(`نعم الجملة صحيحة`).setEmoji("✅").setStyle("SUCCESS").setCustomId("yes12"), new Discord.MessageButton().setLabel(`لا جملة خاطئة`).setEmoji("❌").setStyle("DANGER").setCustomId("no12"))
                       const row13 = new Discord.MessageActionRow().addComponents(new Discord.MessageButton().setLabel(`نعم الجملة صحيحة`).setEmoji("✅").setStyle("SUCCESS").setCustomId("yes13"), new Discord.MessageButton().setLabel(`لا جملة خاطئة`).setEmoji("❌").setStyle("DANGER").setCustomId("no13"))
                       const row14 = new Discord.MessageActionRow().addComponents(new Discord.MessageButton().setLabel(`نعم الجملة صحيحة`).setEmoji("✅").setStyle("SUCCESS").setCustomId("yes14"), new Discord.MessageButton().setLabel(`لا جملة خاطئة`).setEmoji("❌").setStyle("DANGER").setCustomId("no14"))
                       const row15 = new Discord.MessageActionRow().addComponents(new Discord.MessageButton().setLabel(`نعم الجملة صحيحة`).setEmoji("✅").setStyle("SUCCESS").setCustomId("yes15"), new Discord.MessageButton().setLabel(`لا جملة خاطئة`).setEmoji("❌").setStyle("DANGER").setCustomId("no15"))
                       const row16 = new Discord.MessageActionRow().addComponents(new Discord.MessageButton().setLabel(`نعم الجملة صحيحة`).setEmoji("✅").setStyle("SUCCESS").setCustomId("yes16"), new Discord.MessageButton().setLabel(`لا جملة خاطئة`).setEmoji("❌").setStyle("DANGER").setCustomId("no16"))
                       if(interaction.customId === "yes1") {
                                         dbb.add(`true_${interaction.member.id}`, 1)
interaction.message.edit({ content:` __** عقوبة مخالفة الميثاق العسكري هيا : إرجاع إلى رتبة تحت التدريب ؟ 
هل الجملة صحيحة أم خاطئة ؟ **__ `, components: [row2] })
                       }
                       //
                       if(interaction.customId === "no1") {
                         dbb.add(`false_${interaction.member.id}`, 1)
interaction.message.edit({ content:` __** عقوبة مخالفة الميثاق العسكري هيا : إرجاع إلى رتبة تحت التدريب ؟ 
هل الجملة صحيحة أم خاطئة ؟ **__ `, components: [row2] })
                       }
                       //
                       if(interaction.customId === "yes2") { 
                         dbb.add(`false_${interaction.member.id}`, 1)
         interaction.message.edit({ content:` __** يسمح بأن تحضر الرحلة و لكن لا تحضر الراديو ؟ 
         هل الجملة صحيحة أم خاطئة ؟ **__ `, components: [row3] })
                       }
                       if(interaction.customId === "no2") {
                         dbb.add(`true_${interaction.member.id}`, 1)
         interaction.message.edit({ content:` __** يسمح بأن تحضر الرحلة و لكن لا تحضر الراديو ؟ 
         هل الجملة صحيحة أم خاطئة ؟ **__ `, components: [row3] })
                       }
                       //
                       if(interaction.customId === "yes3") {
                                         dbb.add(`false_${interaction.member.id}`, 1)
         interaction.message.edit({ content:` __** الجدية بالعمل من أساسيات العسكري ؟
         هل الجملة صحيحة أم خاطئة ؟ **__ `, components: [row4] })
                       }
                       if(interaction.customId === "no3") {
                                         dbb.add(`true_${interaction.member.id}`, 1)
         interaction.message.edit({ content:` __** الجدية بالعمل من أساسيات العسكري ؟
         هل الجملة صحيحة أم خاطئة ؟ **__ `, components: [row4] })
                       }
                       //
                       if(interaction.customId === "yes4") {
                         dbb.add(`true_${interaction.member.id}`, 1)
         interaction.message.edit({ content:` __** اعلى رتبة هو من يقوم بالتنظيم العسكري ؟
         هل الجملة صحيحة أم خاطئة ؟ **__ `, components: [row5] })
                       }
                       if(interaction.customId === "no4") {
                         dbb.add(`false_${interaction.member.id}`, 1)
         interaction.message.edit({ content:` __** اعلى رتبة هو من يقوم بالتنظيم العسكري ؟
         هل الجملة صحيحة أم خاطئة ؟ **__ `, components: [row5] })
                       }
                       //
                       if(interaction.customId === "yes5") {
                                         dbb.add(`true_${interaction.member.id}`, 1)
         interaction.message.edit({ content:` __** المطاردات تكون فردية ؟
         هل الجملة صحيحة أم خاطئة ؟ **__ `, components: [row6] })
                       }
                       if(interaction.customId === "no5") {
                         dbb.add(`false_${interaction.member.id}`, 1)
         interaction.message.edit({ content:` __** المطاردات تكون فردية ؟
         هل الجملة صحيحة أم خاطئة ؟ **__ `, components: [row6] })
                       }
                       //
                       if(interaction.customId === "yes6") {
                         dbb.add(`false_${interaction.member.id}`, 1)
         interaction.message.edit({ content:` __** إنزال التحية من دون إذن يعد إهانة للضباط ؟
         هل الجملة صحيحة أم خاطئة ؟ **__ `, components: [row7] })
                       }
                       if(interaction.customId === "no6") {
                         dbb.add(`true_${interaction.member.id}`, 1)
         interaction.message.edit({ content:` __** إنزال التحية من دون إذن يعد إهانة للضباط ؟
         هل الجملة صحيحة أم خاطئة ؟ **__ `, components: [row7] })
                       }
                       //
                       if(interaction.customId === "yes7") {
                         dbb.add(`true_${interaction.member.id}`, 1)
         interaction.message.edit({ content:` __** يسمح بـ السرعة في الملكية و التصديم و العبث بالممتلكات ؟
         هل الجملة صحيحة أم خاطئة ؟ **__ `, components: [row8] })
                       }
                       if(interaction.customId === "no7") {
                        dbb.add(`false_${interaction.member.id}`, 1)
                        interaction.message.edit({ content:` __** يسمح بـ السرعة في الملكية و التصديم و العبث بالممتلكات ؟
         هل الجملة صحيحة أم خاطئة ؟ **__ `, components: [row8] })
                       }
                       //
                       if(interaction.customId === "yes8") {
                                         dbb.add(`false_${interaction.member.id}`, 1)
         interaction.message.edit({ content:` __** يسمح بـ تشغيل السفاتي للحالات الخاصة فقط مثل وجود مطاردة ؟
         هل الجملة صحيحة أم خاطئة ؟ **__ `, components: [row9] })
                       }
                       if(interaction.customId === "no8") {
                         dbb.add(`true_${interaction.member.id}`, 1)
         interaction.message.edit({ content:` __** يسمح بـ تشغيل السفاتي للحالات الخاصة فقط مثل وجود مطاردة ؟
         هل الجملة صحيحة أم خاطئة ؟ **__ `, components: [row9] })
                       }
                       //  
                       if(interaction.customId === "yes9") {
                                         dbb.add(`true_${interaction.member.id}`, 1)
         interaction.message.edit({ content:` __** البند الثالث عشر هو : عدم التشكيك بقرارات الرُتب العُليا ؟
         هل الجملة صحيحة أم خاطئة ؟ **__ `, components: [row10] })
                       }
                       if(interaction.customId === "no9") {
                         dbb.add(`false_${interaction.member.id}`, 1)
         interaction.message.edit({ content:` __** البند الثالث عشر هو : عدم التشكيك بقرارات الرُتب العُليا ؟
         هل الجملة صحيحة أم خاطئة ؟ **__ `, components: [row10] })
                       }
                       //
                       if(interaction.customId === "yes10") {
                         dbb.add(`false_${interaction.member.id}`, 1)
         interaction.message.edit({ content:` __** البند الثلاثون هو : إحترام المسؤولين . ؟
         هل الجملة صحيحة أم خاطئة ؟ **__ `, components: [row11] })
                       }
                       if(interaction.customId === "no10") {
                         dbb.add(`true_${interaction.member.id}`, 1)
         interaction.message.edit({ content:` __** البند الثلاثون هو : إحترام المسؤولين . ؟
         هل الجملة صحيحة أم خاطئة ؟ **__ `, components: [row11] })
                       }
                       //
                     if(interaction.customId === "yes11") {
                                     dbb.add(`false_${interaction.member.id}`, 1)
         interaction.message.edit({ content:` __** يسمح بـ إفشال تفاوض لـ إستهزاء الطرف الآخر بالعساكر ؟
         هل الجملة صحيحة أم خاطئة ؟ **__ `, components: [row12] })
                     }
                     if(interaction.customId === "no11") {
                       dbb.add(`true_${interaction.member.id}`, 1)
         interaction.message.edit({ content:` __** يسمح بـ إفشال تفاوض لـ إستهزاء الطرف الآخر بالعساكر ؟
         هل الجملة صحيحة أم خاطئة ؟ **__ `, components: [row12] })
                     }
                     //
                     if(interaction.customId === "yes12") {
                                     dbb.add(`true_${interaction.member.id}`, 1)
         interaction.message.edit({ content:` __** يسمح بـ إعدام عضو عصابة و هو ليس مطلوب أو لديه سجل إجرامي ؟
         هل الجملة صحيحة أم خاطئة ؟ **__ `, components: [row13] })
                     }
                     if(interaction.customId === "no12") {
                       dbb.add(`false_${interaction.member.id}`, 1)
         interaction.message.edit({ content:` __** يسمح بـ إعدام عضو عصابة و هو ليس مطلوب أو لديه سجل إجرامي ؟
         هل الجملة صحيحة أم خاطئة ؟ **__ `, components: [row13] })
                     }
                     //
                     if(interaction.customId === "yes13") {
                                     dbb.add(`false_${interaction.member.id}`, 1)
         interaction.message.edit({ content:` __** عدد البنود العسكرية 25 ؟ 
         هل الجملة صحيحة أم خاطئة ؟ **__ `, components: [row14] })
                     }
                     if(interaction.customId === "no13") {
                                                   dbb.add(`true_${interaction.member.id}`, 1)
         interaction.message.edit({ content:` __** عدد البنود العسكرية 25 ؟ 
         هل الجملة صحيحة أم خاطئة ؟ **__ `, components: [row14] })
                     }
                     //
                     if(interaction.customId === "yes14") {
                                     dbb.add(`true_${interaction.member.id}`, 1)
         interaction.message.edit({ content:` __** التجمهر غرامته 100 ﷼ ؟
         هل الجملة صحيحة أم خاطئة ؟ **__ `, components: [row15] })
                     }
                     if(interaction.customId === "no14") {
                       dbb.add(`false_${interaction.member.id}`, 1)
         interaction.message.edit({ content:` __** التجمهر غرامته 100 ﷼ ؟
         هل الجملة صحيحة أم خاطئة ؟ **__ `, components: [row15] })
                     }
                     //
                     if(interaction.customId === "yes15") {
                       dbb.add(`true_${interaction.member.id}`, 1)
         interaction.message.edit({ content:` __** يسمح بإستخدام التيزر في ثلاث حالات هيا : 
         
         الحالة الأولى : ان رفض المواطن الإستسلام و إستمر بالهرب .
         
         الحالة الثانية : رفع المواطن السلاح عليك .
         
         الحالة الثالثة : في حال وجود مطلوب بالمركز .
         
         هل الجملة صحيحة أم خاطئة ؟ **__ `, components: [row16] })
                     }
                     if(interaction.customId === "no15") {
                       dbb.add(`false_${interaction.member.id}`, 1)
         interaction.message.edit({ content:` __** يسمح بإستخدام التيزر في ثلاث حالات هيا : 
         
         الحالة الأولى : ان رفض المواطن الإستسلام و إستمر بالهرب .
         
         الحالة الثانية : رفع المواطن السلاح عليك .
         
         الحالة الثالثة : في حال وجود مطلوب بالمركز .
         
         هل الجملة صحيحة أم خاطئة ؟ **__ `, components: [row16] })
                     }
                       //
                       if(interaction.customId === "yes16") {
                                       dbb.add(`true_${interaction.member.id}`, 1)
         //
         let truee = dbb.fetch(`true_${interaction.member.id}`)
         let falsee = dbb.fetch(`false_${interaction.member.id}`)
         var done
         if (!falsee) falsee = 0
         if (!truee) truee = 0
         if (falsee > 5) {
         done = "مرفوض"
         } else if (falsee <= 5) {
         done = "مقبول"
         }
         //
         var name = dbb.fetch(`guild=${interaction.guild.id}_user=${interaction.member.id}_name`)
         var aeg = dbb.fetch(`guild=${interaction.guild.id}_user=${interaction.member.id}_aeg`)
         var sector = dbb.fetch(`guild=${interaction.guild.id}_user=${interaction.member.id}_sector`)
         var id = dbb.fetch(`guild=${interaction.guild.id}_user=${interaction.member.id}_id`)
         //
         interaction.message.edit({ content: ` __** FBI Police || التفعيل العسكري . \n  هوية العسكري : ${interaction.member} .
          إسم العسكري : ${name} .
          عمر العسكري : ${aeg} .
          قطاع العسكري : ${sector} . 
          أيدي العسكري : \`${id}\` .
          عدد الأجوبة الصحيحة : ${truee} .
          عدد الأجوبة الخاطئة : ${falsee} .
          الحالة : ${done} \n وطن لا نحميه لا نستحق العيش فيه | وطن لا نفديه حياتنا لا نستحق العيش فيه . **__ `, files:[line],components:[] });
         //
          sglaltf3el.send({ content: ` __** FBI Police || التفعيل العسكري . \n  هوية العسكري : ${interaction.member} .
          إسم العسكري : ${name} .
          عمر العسكري : ${aeg} .
          قطاع العسكري : ${sector} .
          أيدي العسكري : \`${id}\` .
          عدد الأجوبة الصحيحة : ${truee} .
          عدد الأجوبة الخاطئة : ${falsee} .
          الحالة : ${done} \n وطن لا نحميه لا نستحق العيش فيه | وطن لا نفديه حياتنا لا نستحق العيش فيه . **__ `, files:[line],components:[] });
         //
         w8wanen1.permissionOverwrites.edit(interaction.member.id, { VIEW_CHANNEL: null });
         w8wanen2.permissionOverwrites.edit(interaction.member.id, { VIEW_CHANNEL: null });
         w8wanen3.permissionOverwrites.edit(interaction.member.id, { VIEW_CHANNEL: null }); 
         //
          dbb.delete(`guild=${interaction.guild.id}_user=${interaction.member.id}_name`)
          dbb.delete(`guild=${interaction.guild.id}_user=${interaction.member.id}_aeg`)
          dbb.delete(`guild=${interaction.guild.id}_user=${interaction.member.id}_sector`)
          dbb.delete(`guild=${interaction.guild.id}_user=${interaction.member.id}_id`)
         //
          dbb.delete(`true_${interaction.member.id}`)
          dbb.delete(`false_${interaction.member.id}`)
         //
          cooldown.add(interaction.member.id)
         setTimeout(() => {
          cooldown.delete(interaction.member.id)
         }, 90000)
         }
         //
                       if(interaction.customId === "no16") {
                         dbb.add(`false_${interaction.member.id}`, 1)
         //
         let truee = dbb.fetch(`true_${interaction.member.id}`)
         let falsee = dbb.fetch(`false_${interaction.member.id}`)
         var done
         if (!falsee) falsee = 0
         if (!truee) truee = 0
         if (falsee > 5) {
         done = "مرفوض"
         } else if (falsee <= 5) {
         done = "مقبول"
         }
         //
         var name = dbb.fetch(`guild=${interaction.guild.id}_user=${interaction.member.id}_name`)
         var aeg = dbb.fetch(`guild=${interaction.guild.id}_user=${interaction.member.id}_aeg`)
         var sector = dbb.fetch(`guild=${interaction.guild.id}_user=${interaction.member.id}_sector`)
         var id = dbb.fetch(`guild=${interaction.guild.id}_user=${interaction.member.id}_id`)
         //
         interaction.message.edit({ content: ` __** FBI Police || التفعيل العسكري . \n  هوية العسكري : <@${interaction.member.id}> .
         . إسم العسكري : ${name} 
         . عمر العسكري : ${aeg} 
         . قطاع العسكري : ${sector} 
         . أيدي العسكري : \`${id}\` .
         . عدد الأجوبة الصحيحة : ${truee} 
         . عدد الأجوبة الخاطئة : ${falsee} 
         . الحالة : ${done} \n وطن لا نحميه لا نستحق العيش فيه | وطن لا نفديه حياتنا لا نستحق العيش فيه . **__ `, files:[line],components:[] });
         //
          sglaltf3el.send({ content: ` __** FBI Police || التفعيل العسكري . \n  هوية العسكري : <@${interaction.member.id}> .
         . إسم العسكري : ${name} 
         . عمر العسكري : ${aeg} 
         . قطاع العسكري : ${sector} 
         . أيدي العسكري : \`${id}\` .
         . عدد الأجوبة الصحيحة : ${truee} 
         . عدد الأجوبة الخاطئة : ${falsee} 
         . الحالة : ${done} \n وطن لا نحميه لا نستحق العيش فيه | وطن لا نفديه حياتنا لا نستحق العيش فيه . **__ `, files:[line],components:[] });
         //
         w8wanen1.permissionOverwrites.edit(interaction.member.id, { VIEW_CHANNEL: null });
         w8wanen2.permissionOverwrites.edit(interaction.member.id, { VIEW_CHANNEL: null });
         w8wanen3.permissionOverwrites.edit(interaction.member.id, { VIEW_CHANNEL: null }); 
         //
          dbb.delete(`guild=${interaction.guild.id}_user=${interaction.member.id}_name`)
          dbb.delete(`guild=${interaction.guild.id}_user=${interaction.member.id}_age`)
          dbb.delete(`guild=${interaction.guild.id}_user=${interaction.member.id}_sector`)
          dbb.delete(`guild=${interaction.guild.id}_user=${interaction.member.id}_id`)
         //
          dbb.delete(`true_${interaction.member.id}`)
          dbb.delete(`false_${interaction.member.id}`)
         //
          cooldown.add(interaction.member.id)
         setTimeout(() => {
          cooldown.delete(interaction.member.id)
         }, 90000)
         }
                     });

client.login(process..token).catch(() => console.log(`[ERROR]: Invalid Token!`));