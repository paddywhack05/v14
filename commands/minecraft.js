
const {MessageCollector, MessageComponentInteraction, EmbedBuilder, Embed, ActionRow, ActionRowBuilder, ButtonBuilder, ButtonStyle, }=require('discord.js')
const Discord = require('discord.js');
const redditFetch = require('reddit-fetch/src/redditFetch');
module.exports = {
name: "minecraft",
description:"minecraft command",
async execute(message,client){
    fetch();
    function fetch(){
     redditFetch({
    subreddit:'minecraft',
    sort: 'top',
    allowNSFW: false,
   allowCrossPost: true,
    allowVideo: true,
    allowModPost: false,
   }).then(async post => {    
        const embed = new Discord.EmbedBuilder()
        embed.setColor(0xff0000)
        embed.setAuthor({name:`${message.author.username}`, iconURL:message.author.displayAvatarURL({ dynamic: true })})
        embed.setTitle(`${post.title}`)
        embed.setURL(`https://redd.it/${post.id}`)
        
        embed.setThumbnail(`${post.url}`)
        //.addField('field test','field description test')
        embed.setImage(`${post.url}`)
        embed.setFooter({text:`💬 ${post.num_comments}  👍 ${post.ups}`})
        const row = new Discord.ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
            .setCustomId(`next`)
            .setLabel(`Next`)
            .setStyle(ButtonStyle.Success),
        )
        .addComponents(
         new ButtonBuilder()
         .setCustomId(`dis`)
         .setLabel(`End`)
         .setStyle(ButtonStyle.Secondary),
     )
           .addComponents(
            new ButtonBuilder()
            .setLabel(`r/Minecraft`)
            .setURL(`https://www.reddit.com/r/Minecraft/`)
            .setStyle(ButtonStyle.Link),
        )
        const msg = await message.channel.send({ embeds: [embed],components: [row] });
        const collector = message.channel.createMessageComponentCollector()
        collector.on("collect", async (btn) => {
            	//message one by paddycrack
                if(btn.user.id === message.author.id){
                    console.log(btn);
                    await btn.deferUpdate()
                    if(btn.customId === 'next'){
                    redditFetch({
                     subreddit:'minecraft',
                     sort: 'top',
                     allowNSFW: false,
                    allowCrossPost: true,
                     allowVideo: true,
                     allowModPost: false,
                    }).then(async pos => {
                    let embed = new Discord.EmbedBuilder()
                    embed.setColor(0xff0000)
                    embed.setAuthor({name:`${btn.user.username}`, iconURL:btn.user.displayAvatarURL({ dynamic: true })})
                    embed.setTitle(`${pos.title}`)
                    embed.setURL(`https://redd.it/${pos.id}`)
                    embed.setThumbnail(`${pos.url}`)
                    //.addField('field test','field description test')
                    embed.setImage(`${pos.url}`)
                    embed.setFooter({text:`💬 ${pos.num_comments}  👍 ${pos.ups}`})
                     msg.edit({embeds:[embed]})
                     console.log('e')
                 })
                }else if(btn.customId ==='dis'){
                    row.components.forEach(bt => {
                    bt.setDisabled(true);
                   });
          
                    msg.edit({components:[row]})
                    collector.stop() 
                }
                }else{
                         await btn.deferReply({ephemeral: true});
                        btn.editReply('This is not your command get your own by typing !minecraft or /minecraft')
                    }
            
        }) 
     
   });

}}}