const {Telegraf} = require ('telegraf');
const ytdl = require('ytdl-core');

const token= '7161099413:AAEfsoi1406BZBSHOJLhfR77cDbOqNHLHQM'
const bot = new Telegraf(token);

bot.start((ctx)=>{
    ctx.reply('Youtube Downloder')
})

bot.command('downloadMovie', async(ctx)=>{
    const messageText= ctx.message.text;

    const youtubeLink = messageText.replace('/downloadMovie','').trim()
    console.log(youtubeLink)

    if (ytdl.validateURL(youtubeLink)){
        ctx.reply('Downloading the video...')
        const videoStream= ytdl(youtubeLink,{filter: 'audioonly'})
        ctx.replyWithVideo({source: videoStream})
    }
    else{
        ctx.reply('invalid url')
    }
})

bot.launch()
