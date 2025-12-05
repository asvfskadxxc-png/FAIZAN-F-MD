const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "LOSER_MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0RZMkFTeHRZSXljYUxsb3dxY1hqQk5vcW85U3BMOFJVM0RyeHh2N2lrcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0lXSVAxYU1id1dxSVhMb1R3V0hDUVRQM0k3YTduM2JuaGc3cGJUWjJSST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFSTVHcUNOKys2RWpNT3pXcUNldWhiMXdmWllxR3RaWnlwVFRsWG1nK2tRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5dFhzZGIraXF0Nm50RzdGUjlSbnZlN1hkZmhzeDQ2Q0lmTnJTbk5adW1jPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNQemRJVDJmSE1sdXFZZWRadnZqelFzMFFYQ09tUStyd1RmN2s2aVVyMjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1qVjR5cUZiWjlYaG0vOXdQNEJIZ1JkUmVLZnUwVlYya3VHVnY3UUd6V2c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOFBaNCtjV3o0T0ZRT0lNVHNNTktWVnY3WE9CTnl6ejRZNVlnV1Y1R1FHND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRk1PaVU2OXBTN3FtMERYeDUzb3JSdG84dlpQanBEOXdvT3JCZkxzYmdCUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFtb2J2cThYNy8yYXRiSEdxR1ZPTE1wL2JoWE5PeUgrVEIrYnNDL3N6RVhMTVdBTGtZYjV5SytYVWtuamp2cERnb2lPeUdLZmpGeVJBNUxZamFXNmhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ5LCJhZHZTZWNyZXRLZXkiOiJhM2J1L3QvN3dsWVdhK2toMzM5bkx0TmJoTjljOFJmMWlBSmxjOUhXci9RPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ1aTZ2ckVaY1QzZW5Ha3FVcHQxVm9BIiwicGhvbmVJZCI6IjM1M2YwZGExLTMwMDAtNGVkMy1hZjE2LTg2NGE5NzA4NDRhMSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpd3QwYkl4dnptYjI4RFpUWTcrRFlmbHhxQ2s9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTHFGMVpTMi9BOHVycmNBcDlPTnFaSkw5QVZrPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkMyVjdTUjVKIiwibWUiOnsiaWQiOiI5MjMxNDI4NTQyMDc6MjJAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxODg2OTA5ODI3NzcwMTI6MjJAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQK013TDRHRUt1Ry9jZ0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJLN0RYNks5SWFIWHNtTjdIK1lhajhSQ05zd080Y3pab0k5R1hmU3MxeGw4PSIsImFjY291bnRTaWduYXR1cmUiOiJranFhcEVRdEhjNTI5R1B3b0VGRjU5eUN3WE1ZWDJvUUY1b1E5OUMzYW91N3cybEhQT2hoTVF4eG1zeXVhZzZyTy9jVG1uU1dwN3Q4QlZ6YmU5VWJDdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiVkdSUERSWjFRMitvZ0FGNElPdXgwcUdabEdvRGJ3aUw2c055UnVKR3lCU1RYalJqbkZWTFlPR29lWFlFTFFDcGpCbC9CYnF4ZUlidlQzbStlTkNsalE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMxNDI4NTQyMDc6MjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU3V3MStpdlNHaDE3SmpleC9tR28vRVFqYk1EdUhNMmFDUFJsMzByTmNaZiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUNBZ0MifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzYzNjU2NTA0LCJsYXN0UHJvcEhhc2giOiIxSzRoSDQiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUVzNCJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY FAIZAN-F-MD 🇵🇰*",
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
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://image2url.com/images/1764942601032-3a96a0f0-a825-4dfb-863c-89b48b968b84.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "LOSER-MD",
// add bot namw here for menu
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// true to get auto status react
STICKER_NAME: process.env.STICKER_NAME || "LOSER-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923222818553",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "FAIZAN-F-MD Official",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*©𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 FAIZAN-F-MD*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://image2url.com/images/1764942601032-3a96a0f0-a825-4dfb-863c-89b48b968b84.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> I'm alive*FAIZAN-F-MD*🇵🇰",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "true",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "true",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
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
DEV: process.env.DEV || "923487398245",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
