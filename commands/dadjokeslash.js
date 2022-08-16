const{EmbedBuilder,Embed} = require('discord.js');
const fetch = require('node-fetch');
const Discord = require('discord.js');
module.exports= {
    name: "dadjokeslash",
    description:"dadjokeslash command",
    execute(interaction,client){
       
            e();
            async function e(){
                var headers = {
                    Accept: 'application/json'
                  }
                const url = `https://icanhazdadjoke.com/`;
                const res = await fetch(`${url}`,{method: 'GET', headers: headers});
                const dat = await res.json();
                console.log(dat);
                const img = `https://icanhazdadjoke.com/j/${dat.id}.png`;
                const joke = dat.joke;
                console.log(joke);
                console.log(img);
            const embed = new Discord.EmbedBuilder()
                .setColor(0xff0000)
                .setAuthor({name:`${interaction.user.username}`,
                 iconURL:interaction.user.displayAvatarURL({ dynamic: true })
                })
                .setTitle(`Dad joke`)
                .setURL(img)
                .setDescription(`${joke}`)
                .setFooter({text:`paddycrack.com`})
              interaction.editReply({ embeds: [embed]});
        
        }
    }
}