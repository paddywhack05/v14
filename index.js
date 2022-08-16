//const fetch = require('node-fetch');
//ee
require('dotenv').config();
const{MessageActionRow,MessageButton} = require('discord.js');
const Discord = require('discord.js');
const { Client, IntentsBitField, Partials, PermissionsBitField,GatewayIntentBits, ApplicationCommandType, ApplicationCommandOptionType, ChannelType, ChannelFlags, ActivityType } = require('discord.js');
const redditFetch = require('reddit-fetch/src/redditFetch');
const fs = require('fs');
const console = require('console');

/*process.on('uncaughtException', function (err) {
    console.log('Caught exception: ', err,err.stack);
  });*/
//const meme = require('./commands/meme');
const myIntents = new IntentsBitField();
myIntents.add(GatewayIntentBits.GuildPresences, GatewayIntentBits.GuildMembers,GatewayIntentBits.GuildMessages,GatewayIntentBits.GuildMembers,GatewayIntentBits.DirectMessages,GatewayIntentBits.Guilds,GatewayIntentBits.MessageContent);
const client = new Discord.Client({ partials: [Partials.Message, Partials.Channel, Partials.Reaction], intents: myIntents }); 
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}
client.on('ready', async() =>{
    console.log('its ready');
    const bot_guilds = client.guilds.cache.map(guild=> guild.name)
    console.log(client.guilds.cache.map(guild=> guild.name));
    console.log(bot_guilds);
    console.log(client.guilds.cache.size)
    
    const dice ={
        name:'dice',
        description:'rolls dice',
       }
       const help ={
        name:'help',
        description:'help command',
       }
       const hack ={
           name:'hack',
           description:'hacking but way better than dank memer hacking with an actual script',
       }
        const ukrainenews ={
            name:'ukrainenews',
            description:'news about ukraine',
        }
        const rap ={
            name:'rap',
            description:'gives you a fat rap',
        }
        const minecraft ={
            name:'minecraft',
            description: 'gives you stuff about minecraft',
        }
        const dog ={
            name:'dog',
            description:'gives you a dog picture',
        }
        const ring ={
            name:'ring',
            description:'plays ring sound affect',
        }
        const ukraine={
            name:'ukraine',
            description:'ukraine stuff',
        }
        const cat ={
            name:'cat',
            description: 'gives you a cat picture',
        }
        const infuriating ={
            name: 'infuriating',
            description: 'gives you somthing infuriating',
        }
        const dankmeme ={
            name: 'dankmeme',
            description:'gives you a dankmeme',
        }
      const meme ={
            name: 'meme',
            description:'gives you a meme',
      }
      const technicaly ={
        name: 'technically',
        description:'like technically',
    }
    const ping ={
        name: 'ping',
        description:'checks latency',
    }
    const userinfo={
        name: 'userinfo',
        description:'gives you info about you',
        options:[{
            name:'member',
            type: ApplicationCommandOptionType.User,
            description:'User to get info on',
            required:'false',
        },
        ],
    }
    const info={
        name: 'info',
        description:'gives you info about paddycrack',
    }
    const invite={
        name: 'invite',
        description:'gives you an invite link',
    }
    const vote={
        name: 'vote',
        description:'links you to my top.gg and dbl please vote for me to spread my bot',
    }
    const dadjoke={
        name: 'dadjoke',
        description:'gives you a dad joke',
    }
    const covid={
        name: 'covid-info',
        description:'gives you covid stats worldwide',
    }
        const data = {
            name: 'echo',
            description: 'echo thing',
            options:[{
                name:'yourtext',
                type: ApplicationCommandOptionType.String,
                description:'echo',
                required:'true',
            }],
        };
        const ball = {
            name: '8ball',
            description: '8ball of truth',
            options:[{
                name:'question',
                type: ApplicationCommandOptionType.String,
                description:'what will you ask the great one',
                required:'true',
            },
        ],
        };
        const reddit = {
            name: 'reddit',
            description: 'Any subreddit',
            options:[{
                name:'subreddit',
                type: ApplicationCommandOptionType.String,
                description:'decides subreddit',
                required:'true',
            },
            ],
        };
        const ub = {
            name: 'urban',
            description: 'urban dictionary defintions',
            options:[{
                name:'search',
                type: ApplicationCommandOptionType.String,
                description:'search term on urban dictionary',
                required:'true',
            },
            ],
        };
        const pokemon = {
            name: 'pokemon',
            description: 'pokemon stats',
            options:[{
                name:'pokemon',
                type: ApplicationCommandOptionType.String,
                description:'search pokemon stats with pokeapi',
                required:'true',
            },
            ],
        };
        const github = {
            name: 'github',
            description: 'github user info',
            options:[{
                name:'user',
                type: ApplicationCommandOptionType.String,
                description:'search for user info on github',
                required:'true',
            },
            ],
        };
        const command = await client.application?.commands.create(data);
        const memeslash = await client.application?.commands.create(meme);
        const dankmemeslash = await client.application?.commands.create(dankmeme);
        const infuriatingslash = await client.application?.commands.create(infuriating);
        const catslash = await client.application?.commands.create(cat);
        const ukraineslash = await client.application?.commands.create(ukraine);
        const ringslash = await client.application?.commands.create(ring);
        const dogslash = await client.application?.commands.create(dog);
        const minecraftslash = await client.application?.commands.create(minecraft);
        const rapslash = await client.application?.commands.create(rap)
        const ukrainenewsslash = await client.application?.commands.create(ukrainenews)
        const diceslash = await client.application?.commands.create(dice)
        const hackslash = await client.application?.commands.create(hack)
        const helpslash = await client.application?.commands.create(help)
        const ballslash = await client.application?.commands.create(ball)
        const redditslash = await client.application?.commands.create(reddit)
        const technicalyslash = await client.application?.commands.create(technicaly)
        const pingslash = await client.application?.commands.create(ping)
        const userinfoslash = await client.application?.commands.create(userinfo)
        const infoslash = await client.application?.commands.create(info)
        const voteslash = await client.application?.commands.create(vote)
        const inviteslash = await client.application?.commands.create(invite)
        const dadjokeslash = await client.application?.commands.create(dadjoke)
        const ubslash = await client.application?.commands.create(ub)
        const pokemonslash = await client.application?.commands.create(pokemon)
        const githubslash = await client.application?.commands.create(github)
        const covidslash = await client.application?.commands.create(covid)
        client.user.setStatus('online');
        setInterval(function () {
            client.user.setPresence({
                activities: [{ name: `${client.guilds.cache.size} servers !vote`, type: ActivityType.Watching }],
              });
        }, 1000);
});
client.on("interactionCreate", async (interaction) => {
    try{
         if (interaction.isCommand()){
            await interaction.deferReply();
            if(interaction.commandName==='userinfo'){
                const text = interaction.options.getUser('member');
                client.commands.get('userinfoslash').execute(interaction,client,text);
            }
            if(interaction.commandName==='covid-info'){
                client.commands.get('covidslash').execute(interaction,client);
            }
            if(interaction.commandName==='urban'){
                const text = interaction.options.getString('search');
                client.commands.get('ubslash').execute(interaction,client,text);
            }
    
            if(interaction.commandName==='pokemon'){
                const text = interaction.options.getString('pokemon').toLowerCase();
                client.commands.get('pokemonslash').execute(interaction,client,text);
            }
            if(interaction.commandName==='github'){
                const text = interaction.options.getString('user').toLowerCase();
                client.commands.get('githubslash').execute(interaction,client,text);
            }
             
            if(interaction.commandName==='invite'){
                client.commands.get('inviteslash').execute(interaction,client);
            }
            if (interaction.commandName ==='8ball'){
                const text = interaction.options.getString('question');
                if(text.length>250){
                    interaction.editReply({content:`8ball cant do questions over 250 characters`})
                    return;
                }else{
                client.commands.get('8ballslash').execute(interaction,client,text);
                }
            }
            if(interaction.commandName==='info'){
                client.commands.get('infoslash').execute(interaction,client);
            }
            if(interaction.commandName==='dadjoke'){
                client.commands.get('dadjokeslash').execute(interaction,client);
            }
            if(interaction.commandName==='help'){
                client.commands.get('helpslash').execute(interaction,client);
            }
            if(interaction.commandName==='ping'){
                interaction.reply(`right back at you latency is ${Date.now() - interaction.createdTimestamp}ms API Latency is ${Math.round(client.ws.ping)}ms`);
            }
            if(interaction.commandName==='hack'){
                client.commands.get('hackslash').execute(interaction,client);
            }
            if(interaction.commandName==='ukrainenews'){
                client.commands.get('ukrainenewsslash').execute(interaction,client);
            }
            if(interaction.commandName==='dice'){
                client.commands.get('diceslash').execute(interaction,client);
            }
            if(interaction.commandName==='rap'){
                client.commands.get('rapslash').execute(interaction,client);
            }
            if(interaction.commandName==='minecraft'){
                client.commands.get('minecraftslash').execute(interaction,client);
            }
            if(interaction.commandName==='dog'){
                client.commands.get('dogslash').execute(interaction,client);
            }
            if(interaction.commandName==='ring'){
                client.commands.get('ringslash').execute(interaction,client);
            }
            if(interaction.commandName === 'ukraine'){
                client.commands.get('ukraineslash').execute(interaction,client);
            }
            if(interaction.commandName === 'cat'){
               // interaction.reply({content: 'loading cat...', ephemeral: false}).then(interaction.deleteReply())
                client.commands.get('catslash').execute(interaction,client);
            }
            if(interaction.commandName === 'infuriating'){
                client.commands.get('infuriatingslash').execute(interaction,client);
            }
            if(interaction.commandName === 'dankmeme'){
                client.commands.get('dankmemeslash').execute(interaction,client);
            }
            if (interaction.commandName === 'meme'){
                 client.commands.get('memeslash').execute(interaction,client);
            }
            if (interaction.commandName ==='echo'){
                const text = interaction.options.getString('yourtext');
                 if(text.length>1500){
                    await interaction.editReply({content:'I cant echo a message over 1500 letters'});
                    return;
                }else{
                    await interaction.editReply({content: `${interaction.user.tag} says `+text + '.', ephemeral: false});
                }
            }
            if (interaction.commandName ==='reddit'){
                const text = interaction.options.getString('subreddit');
                client.commands.get('redditslash').execute(interaction,client,text);
            }
            if (interaction.commandName ==='technically'){
                client.commands.get('technicallyslash').execute(interaction,client);
            }
            if (interaction.commandName ==='vote'){
                client.commands.get('voteslash').execute(interaction,client);
            }
        }
    }
    catch(err){
    console.log("err ",err);
    interaction.editReply({content:'your text input exceeded the discord character limit'})
    }
    })
    
client.on('guildCreate', async guild => {
    try{
    console.log(guild.name);
    const channel = guild.channels.cache.find(channel => channel.type === ChannelType.GuildText && channel.permissionsFor(guild.members.me).has(PermissionsBitField.Flags.SendMessages, PermissionsBitField.Flags.ViewChannel))
    const owner = await guild.fetchOwner();
    client.commands.get('join').execute(guild,client,owner,channel);
    }
    catch(err){
        console.log('error ',err)
    }
})
client.on('messageCreate', async message =>{
    try{
    if(message.channelId ==='944633349274763277'){
        var e = message.content;
        var r = e.replace('<@','').replace('>','');
        var er = message.mentions.users.first();
        if(!er){return;}
        else{
            console.log(er);
    try{ 
    er.send("Thank you for voting "+message.author.username);
    }catch (err) {
    console.error(err);
    message.channel.send("He voted but he is not here"); return;
  
}
}
    }

    //if(!message.guild||message.channel.permissionsFor(message.guild.me).has(Permissions.FLAGS.SEND_MESSAGES, Permissions.FLAGS.VIEW_CHANNEL)){
    if (message.content.toLowerCase() ==="!meme"){
        console.log('meme')
        client.commands.get('meme').execute(message,client);
  
    }
    if (message.content.toLowerCase().startsWith("!github")){
        client.commands.get('github').execute(message,client);
    }
    if (message.content.toLowerCase().startsWith("!reddit")){
        client.commands.get('reddit').execute(message,client);
    }
    if (message.content.toLowerCase().startsWith("!8ball")){
        const text = message.content.split(' ')[1]
        if(!text||message.content.length>256){
            if(!text){message.reply("you have to ask a question like !8ball <question>");}
            if(message.content.length >256){message.reply("8ball does not accept questions over 250 characters");}
        }else{
        client.commands.get('8ball').execute(message,client,text);
    }
    }
    if (message.content.toLowerCase().startsWith("!pokemon")){
        const text = message.content.split(' ')[1]
        client.commands.get('pokemon').execute(message,client,text)
    }
    if (message.content.toLowerCase().startsWith("!urban")){
        client.commands.get('ub').execute(message,client);
    }
    if(message.content.toLowerCase()==='!dadjoke'){
        client.commands.get('dadjoke').execute(message,client);
    }
    if(message.content.toLowerCase()==='!test'){
        client.commands.get('collector').execute(message,client);
    }
    if(message.content.toLowerCase()==='!covid'||message.content.toLowerCase()==='!covid-info'){
        client.commands.get('covid').execute(message,client);
    }
    if (message.content.toLowerCase().startsWith("!userinfo")){
        client.commands.get('userinfo').execute(message,client);
    }
    if (message.content.toLowerCase() ==="!invite"){
        client.commands.get('invite').execute(message,client);
    }
    if (message.content.toLowerCase() ==="!info"){
        client.commands.get('info').execute(message,client);
    }
    if (message.content.toLowerCase() ==="!rickroll"){
        client.commands.get('rickroll').execute(message,client);
    }
    if (message.content.toLowerCase().startsWith("!rickroll")){
        client.commands.get('rickroll').execute(message,client);
    }
    
    if (message.content.toLowerCase() ==="!button"){
        const row = new Discord.MessageActionRow().addComponents(
            new Discord.MessageButton()
            .setStyle("LINK")
            .setURL("https://www.reddit.com/r/memes/")
            .setLabel("r/memes")
        );
        message.channel.send({content: "meme of the day", components:[row]});
    }
    
    if (message.content.toLowerCase() === "!ring"){ 
       client.commands.get('ring').execute(message,client);
    }
    if (message.content.toLowerCase() === "!vote"){ 
        client.commands.get('vote').execute(message,client);
     }
     if (message.content.toLowerCase() === "!8ball"){ 
        client.commands.get('8ball').execute(message,client);
     }
    
    if (message.content.toLowerCase() === "!hack"){
        client.commands.get('hack').execute(message,client);
    }
    if (message.content.toLowerCase() === "cat exspectedpasses.txt"){
        message.channel.send("d3ad16e86a2bf2c2ad74cc177ae69025: I cant belive you looked it up")
    }
    if (message.content === '!ping') {  
        message.channel.send(`right back at you latency is ${Date.now() - message.createdTimestamp}ms API Latency is ${Math.round(client.ws.ping)}ms`);
      }
    if (message.content.toLowerCase() === "!dice"){ 
        client.commands.get('dice').execute(message,client);
    }
    if (message.content.toLowerCase() === "do a barrel roll"){ 
        client.commands.get('roll').execute(message,client);
     }

    if (message.content.toLowerCase() === "!infuriating"){ 
        client.commands.get('infuriating').execute(message,client);
 }
 if (message.content.toLowerCase() === "!cat"){ 
    cat();
    function cat(){
    client.commands.get('cat').execute(message,client);
     }
}

if (message.content.toLowerCase() === "!dog"){ 
client.commands.get('dog').execute(message,client);
}

if (message.content.toLowerCase() === "!minecraft"){ 
client.commands.get('minecraft').execute(message,client);
}
if (message.content.toLowerCase() === "!dankmeme"){ 
client.commands.get('dankmeme').execute(message,client);
}

if (message.content.toLowerCase() === "!rap"){ 
client.commands.get('rap').execute(message,client);
}
if (message.content.toLowerCase() === "!ukraine news"||message.content.toLowerCase() ==="!ukrainenews"){ 
client.commands.get('ukrainenews').execute(message,client);
}

if (message.content.toLowerCase() === "!ukraine"){ 
    client.commands.get('ukraine').execute(message,client);
}
if (message.content.toLowerCase() === "!technically"||message.content.toLowerCase() === "!technicallythetruth"){ 
    client.commands.get('technically').execute(message,client);
}
if (message.content.toLowerCase() === '!commands'||message.content.toLowerCase()==='!help') {
client.commands.get('command').execute(message,client);
}

    if (message.content.toLowerCase() === 'up, up, down, down, left, right, left, right, b, a'|| message.content.toLowerCase === "up up down down left right left right b a") {
    client.commands.get('konamicode').execute(message,client);
    }
    if (message.content.toLowerCase() === 'hi bot') {
    client.commands.get('hibot').execute(message,client);
    }

    if (message.channel.type == 'DM') {
        if(message.author.id === client.user.id){return;}
        console.log('Dm recieved!')
     }
    //}
}catch(err){
    console.log("error msg ",err)
}
});




client.login(process.env.TOKEN);