
const {MessageCollector, MessageComponentInteraction, EmbedBuilder, Embed, ActionRow, ActionRowBuilder, ButtonBuilder, ButtonStyle, }=require('discord.js')
const Discord = require('discord.js');
const redditFetch = require('reddit-fetch/src/redditFetch');
module.exports= {
name: "infuriating",
description:"infuriating command",
async execute(message){

    redditFetch({
        subreddit:'mildyinfuriating',
        sort: 'top',
        allowNSFW: false,
       allowCrossPost: true,
        allowVideo: true,
        allowModPost: true,
       }).then(async post => {
        const embed = new Discord.EmbedBuilder()
        embed.setColor(0xff0000)
        embed.setAuthor({name:`${message.author.username}`, iconURL:message.author.displayAvatarURL({ dynamic: true })})
        if(post.title.length<256){
            embed.setTitle(`${post.title}`)
            }else{
             embed.setTitle(`why`)
            }
        if(post.selftext&&post.selftext.length<256){
            embed.setDescription(post.selftext)
        }
        embed.setURL(`https://redd.it/${post.id}`)
        embed.setThumbnail(`${post.url}`)
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
            .setLabel(`r/mildyinfuriating`)
            .setURL(`https://www.reddit.com/r/mildyinfuriating/`)
            .setStyle(ButtonStyle.Link),
        )
        const msg = await message.channel.send({ embeds: [embed],components: [row] });
        //const collector = message.channel.createMessageComponentCollector()
        const collector = msg.createMessageComponentCollector()
        collector.on("collect", async (btn) => {
            	//message one by paddycrack
                if(btn.user.id === message.author.id){
                    console.log(btn);
                    await btn.deferUpdate()
                    if(btn.customId === 'next'){
                    redditFetch({
                     subreddit:'mildyinfuriating',
                     sort: 'top',
                     allowNSFW: false,
                    allowCrossPost: true,
                     allowVideo: true,
                     allowModPost: true,
                    }).then(async pos => {
                    let embed = new Discord.EmbedBuilder()
                    embed.setColor(0xff0000)
                    embed.setAuthor({name:`${btn.user.username}`, iconURL:btn.user.displayAvatarURL({ dynamic: true })})
                    if(pos.title.length<256){
                     embed.setTitle(`${pos.title}`)
                     }else{
                      embed.setTitle(`WHY`)
                     }
                    if(pos.selftext&&pos.selftext.length<256){
                     embed.setDescription(pos.selftext)
                 }
                    embed.setURL(`https://redd.it/${pos.id}`)
                    embed.setThumbnail(`${pos.url}`)
                    embed.setImage(`${pos.url}`)
                    embed.setFooter({text:`💬 ${pos.num_comments}  👍 ${pos.ups}`})
                     msg.edit({embeds:[embed]})
                     console.log('e')
                 })}else if(btn.customId ==='dis'){
                    row.components.forEach(bt => {
                    bt.setDisabled(true);
                   });
          
                    msg.edit({components:[row]})
                    collector.stop() 
                }
                }else{
                         await btn.deferReply({ephemeral: true});
                        btn.editReply('This is not your command get your own by typing !infuriating or /infuriating')
                    }
    })      
});
}}

