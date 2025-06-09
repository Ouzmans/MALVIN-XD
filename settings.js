
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0RCQ3U3ai9qRkl1MXNyWlcxYmJGNVdGaDFoVmNmbE50VE0rVjdZdDdIQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0dGcW5BeThLOWFnU2ZIQUtuNVFUSk9MQ0hET1JkakRzWHUvV0dMNzh5cz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhRW9YQ0xYaTVsQ1poRGxDKzJXSFJsYnhIbTZ1eTQ2WlVmemRESFoxcTBFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrdjZDeVFKRzlqZ3lxMGxmRW5LbDdYOW4xM1UxTEljc1p2SmoxQzVaWVhvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVIenAzLzNhdUJkQ0wyTUhVcE1UV01FSUdMOS9RUDJhdDNMbHdYL1g0RVU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZzTGhBSDM5SkswN0ZlN05hSE8vL1JjdmNqNHdPRXRTQnhvbHpFbUh2eEE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYU1ScE9RdVJXaGNUZEE1VlN1bUNYcFcxcjMyY2dMdEc3WFltNWZ4cW8xdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUoxN0ZtazZEdElMTHA5ak10ejBrbW5ZZjhGTlZMVG9zNlpNZkhSOFhuTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkplaU81VHJUSmVnNE56eU1JNkpUSDUwUDVSdHhVZXcvbFVFN3JoMzYxUWVLSHBQeUd6S0J6dEI1TERqTC9kdk1YbndrNW44Z2ttaWJORFhhUjQrSEF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzMsImFkdlNlY3JldEtleSI6IitFOU54VlJYMzk4eFVCVDZzM25MNkZzYk5NaG5qVjl4Zk5QSVprOU85YTg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjIxNzY5MzE3ODk5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6Ijg5OEVEQjI5MjUxNUZCQzgyMDhCQjVGNzQzMjQxQjc1In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDkzOTI4MTB9LHsia2V5Ijp7InJlbW90ZUppZCI6IjIyMTc2OTMxNzg5OUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI1MDVGMkQyNEREMkY4RTFGRTZENEFDMTAyM0Q3RDIwQiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQ5MzkyODEyfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiIxUzlaOTVTSyIsIm1lIjp7ImlkIjoiMjIxNzY5MzE3ODk5OjJAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxNzA1MTQ5OTk5NTU2ODI6MkBsaWQiLCJuYW1lIjoiREFHT0FURsOcSFJFUvCfp5nwn4+/4oCN4pmC77iP8J+QkPCfpKMifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xERmdjOEdFSk83bHNJR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImEwSnFjNjN2QXcxaFRvbUdGcDZqUHo1czZRWVplR0p3aE9nb1pEeDZuSFU9IiwiYWNjb3VudFNpZ25hdHVyZSI6IktTQXIxcjA2ZVZheUg5Wml2NTVxNmJySnBNRzNGbGhueEJYcjVPRy9NZ0FrVjJDeWdSV0oyYUxZMm0wQXE4ZzMwUVpMQXBIUXVyVkNVRXNTZFBuRENBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJZZ2RxMHpxcFVkSUhrQnhra0VqOWsrTVhtb1RzQk9IcU1JOHpCanZPQWY0TjFGTVR0ZTlvUGNOYXA2RGJlK0RxSHhkZjJMSjBiOFlnbnA5OU95aWlEUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIyMTc2OTMxNzg5OToyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQld0Q2FuT3Q3d01OWVU2SmhoYWVvejgrYk9rR0dYaGljSVRvS0dROGVweDEifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBSUlFZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0OTM5MjgwMCwibGFzdFByb3BIYXNoIjoiMkc0QW11IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFDaHEifQ==",
// add your Session Id make sure it starts with malvin~
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "ᴍᴀʟᴠɪɴ-xᴅ",
// add bot name here for menu
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 

LINK_WHITELIST: "youtube.com,github.com",

    LINK_WARN_LIMIT: 3, // Number of warnings before action

    LINK_ACTION: "kick", // "kick", "mute", or "none"

        AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen

        AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 

        AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 

        AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY MALVIN XD 😆*",
// set the auto reply massage on status reply  


       WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups 
   
       ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group

      ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 

      MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 

     MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/qumhu4.jpg",
// add custom menu and mention reply image url

       ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/xshsmk",
// add img for alive msg

        LIVE_MSG: process.env.LIVE_MSG || "> ʙᴏᴛ ɪs sᴘᴀʀᴋɪɴɢ ᴀᴄᴛɪᴠᴇ ᴀɴᴅ ᴀʟɪᴠᴇ\n\n\nᴋᴇᴇᴘ ᴜsɪɴɢ ✦ᴍᴀʟᴠɪɴ xᴅ✦ ғʀᴏᴍ ᴍᴀʟᴠɪɴ ᴛᴇᴄʜ ɪɴᴄ⚡\n\n\n*© ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ - ᴍᴅ\n\n> ɢɪᴛʜᴜʙ :* github.com/XdKing2/MALVIN-XD",
// add alive msg here 


        STICKER_NAME: process.env.STICKER_NAME || "ᴍᴀʟᴠɪɴ-xᴅ",
// type sticker pack name 

        CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react  
  
      CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 

          DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 

          OWNER_NUMBER: process.env.OWNER_NUMBER || "769317899",
// add your bot owner number

OWNER_NAME: process.env.OWNER_NAME || "ᴍᴀʟᴠɪɴ ᴛᴇᴄʜ",
// add bot owner name

              DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍᴀʟᴠɪɴ ᴋɪɴɢ*",
// add bot owner name    

        READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs

                 AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
                ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  

            ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 

            AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices

        AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 

              AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 

        ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 

         PUBLIC_MODE: process.env.PUBLIC_MODE || "false",
// make false if want private mod

        AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing 
  
   READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 

     DEV: process.env.DEV || "263780166288",
//replace with your whatsapp number    
    
    ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 

      ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'inbox/ same if you want to resend deleted message in same chat 

      AUTO_RECORDING: process.env.AUTO_RECORDING || "false",
// make it true for auto recoding 

version: process.env.version || "0.0.5",

    
START_MSG: process.env.START_MSG || `*Hᴇʟʟᴏ ᴛʜᴇʀᴇ ᴍᴀʟᴠɪɴ xᴅ ᴄᴏɴɴᴇᴄᴛᴇᴅ! 👋🏻* 

    *ᴋᴇᴇᴘ ᴏɴ ᴜsɪɴɢ ᴍᴀʟᴠɪɴ ᴍᴏᴅs🚩* 

> sᴜʙsᴄʀɪʙᴇ ʏᴛ ᴄʜᴀɴɴᴇʟ ғᴏʀ ᴛᴜᴛᴏʀɪᴀʟs
    https://youtube.com/@malvintech2

    - *ʏᴏᴜʀ ʙᴏᴛ ᴘʀᴇғɪx: ➡️[ . ]*
> - ʏᴏᴜ ᴄᴀɴ ᴄʜᴀɴɢᴇ ᴜʀ ᴘʀᴇғɪx ᴜsɪɴɢ ᴛʜᴇ .ᴘʀᴇғɪx ᴄᴏᴍᴍᴀɴᴅ

> ᴅᴏɴᴛ ғᴏʀɢᴇᴛ ᴛᴏ sʜᴀʀᴇ, sᴛᴀʀ &ғᴏʀᴋ ᴛʜᴇ ʀᴇᴘᴏ ⬇️ 
    https://github.com/XdKing2/MALVIN-XD

> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍᴀʟᴠɪɴ ᴋɪɴɢ 🇿🇼`
};


