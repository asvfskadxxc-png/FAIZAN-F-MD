const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUZ0ZDI0NS8wV0padWhGWGg1ekU0UkFGUWJQWWpON0xkcUxLbnBoR0dFQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNmlBdk5pUk1DYStKSGY0bGdzeWhXNTVXWFZPbTFzd1A2aFhyc1RqNFpHTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrUHE0TVhraXR0RG05cERIL003OXlsMGNWMk9kUjNLeURRaWVQMUN1Y0hnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNS2xqOUJpZDM3WHFaL3pGQys0anh5dXdmTThvaWhaRGkwWHB3eGIvdEFZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBJMTZSNGE1SXMwbGdib3BUMi9VZ2dycUcrWE9HcDE0UGthMkRaZFJnMUU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRKVjZkNjduNnhCamFVMmxFS21seUR3YUthd28vOElZbEN0SnlMbkRJaWc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUJ2a1VVVmpaTUdrU1pGTUZCZWRCODZoa09keUpLVWZVMWhCemFiV0VXWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY29UemZqVTVpR0hOMVNnR0xjbTR1aWNIbHUvWGp1VXNDUVRvRWJXSEJFRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5TM01iREhkMi9nWGFlS2VvbDIvcXVJTzdyVC82bFBUc3lDKzRmR1dhVHM3K3hrY0lJOU8vMGpCVWQ1dUFHemZhdk9TaHJ4QldSSW9jZXdEVi9XZkJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc3LCJhZHZTZWNyZXRLZXkiOiJIZWloQW9Ham9Sc09jakg3VFRybU5wUWpLb1BzZ1lqbG5FMjJnWStGNWVnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJhYWFLMkRmeVRKR1hXTVZEWVhOU2R3IiwicGhvbmVJZCI6Ijk0ZGRkZWI3LWI0N2ItNDQxYy04OGViLTlkMGU5NTRhMzBkMyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBQmhlYUo4cHo0Vlh1WmJZNnZPZzBoSEViQk09In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiakhOeTlTbWdOS3hDc1BsYXFVQ04vaGI4V240PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IldEMVIzVjRQIiwibWUiOnsiaWQiOiI5MjM0Nzk5ODgyODc6ODBAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoia2FzaG1pcmkiLCJsaWQiOiIyNzMzMDY2MDMyNDU4MDE6ODBAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPYmowK1VFRUxuYzRNa0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJuY1NEdm5uVnpJaHdDSHBiK2FQOFd0K0tKZDhsdEYrcm4wV1VHdXYvMlVrPSIsImFjY291bnRTaWduYXR1cmUiOiJtYzNPcnFyRjhtMDJZS1J4U0M0V283ajJWVC9lL3pnUHJHTXMvWTNsWFVER3N3NUlVblE2WjRQWUdjVlNkWXU0SDIrQngybG8yZ202TXFpTWtsL21BZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiMUkzR2NQdUw4QXdBdDVJYXRXSytuSDYraFdBZnU3UHJLU3B3VTFHSG9ZTld1L0U5bjRvY2xkLzYrcHA4bG5iMjBZM3ovL3hrcHdlMk43ODlLN0U4Qnc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjM0Nzk5ODgyODc6ODBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWjNFZzc1NTFjeUljQWg2Vy9tai9GcmZpaVhmSmJSZnE1OUZsQnJyLzlsSiJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSUNBZ1MifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzY1Mjg5NTQzLCJsYXN0UHJvcEhhc2giOiIzUjlaMzkifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY FAIZAN-F-MD🇵🇰*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://image2url.com/images/1765179852563-98dac8d0-99cd-4f42-b768-69f20b25ed3d.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "FAIZAN-F-MD",
// add bot namw here for menu
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// true to get auto status react
STICKER_NAME: process.env.STICKER_NAME || "FAIZAN-F-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "true",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923222818553",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "FAIZAN-F-MD Official",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*©𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 FAIZAN-F-MD*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://image2url.com/images/1765179852563-98dac8d0-99cd-4f42-b768-69f20b25ed3d.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> I'm alive *FAIZAN-F-MD*🇵🇰",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "true",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "true",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923222818553",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
