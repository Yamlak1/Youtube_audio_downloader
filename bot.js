const {Telegraf} = require ('telegraf');
const ytdl = require('ytdl-core');
require('dotenv').config();

const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new Telegraf(token);

bot.start((ctx)=>{
    ctx.reply('Youtube Music Downloder')
})

bot.command('downloadAudio', async(ctx)=>{
    const messageText= ctx.message.text;

    const youtubeLink = messageText.replace('/downloadAudio','').trim()
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
