const config = require('../config');
const { cmd } = require('../command');
const { runtime } = require('../lib/functions');
const os = require("os");
const path = require('path');
const axios = require('axios');
const fs = require('fs');

cmd({
    pattern: "menu3",
    desc: "menu the bot",
    category: "menu3",
    react: "⚡",
    filename: __filename
},
async (conn, mek, m, { from, sender, pushname, reply }) => {
    try {
        const dec = `╭━━━〔 *${config.BOT_NAME} Main Menu* 〕━━━╮
┃ ✨ *Owner:* ${config.OWNER_NAME}
┃ ⚙️ *Mode:* ${config.MODE}
┃ 📡 *Platform:* Heroku
┃ 🧠 *Type:* NodeJs (Multi Device)
┃ ⌨️ *Prefix:* ${config.PREFIX}
┃ 🧾 *Version:* 3.0.0 Beta
╰━━━━━━━━━━━━━━━━━━━━━━━━╯

╭━━〔 🧩 *Command Categories* 〕━━╮
┃ 📖 Quranmenu
┃ 🕋 Prayertime
┃ 🤖 Aimenu
┃ 🎭 Anmiemenu
┃ 😹 Reactions
┃ 🔁 Convertmenu
┃ 🎉 Funmenu
┃ ⬇️ Dlmenu
┃ ⚒️ Listcmd
┃ 🏠 Mainmenu
┃ 👥 Groupmenu
┃ 📜 Allmenu
┃ 👑 Ownermenu
┃ 🧩 Othermenu
┃ 🖌️ Logo
┃ 📦 Repo
╰━━━━━━━━━━━━━━━━━━━━━━━━━━╯
> ${config.DESCRIPTION}
`;

        await conn.sendMessage(
            from,
            {
                image: { url: config.MENU_IMAGE_URL },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363422488713927@newsletter',
                        newsletterName: 'FAIZAN-F-MD',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        // Send local audio from assets/menu.m4a

const audioPath = path.join(__dirname, '../assets/menu.m4a');
await conn.sendMessage(from, {
    audio: fs.readFileSync(audioPath),
    mimetype: 'audio/mp4',
    ptt: true,
}, { quoted: mek });

    } catch (e) {
        console.error(e);
        reply(`❌ Error:\n${e}`);
    }
});

cmd({
    pattern: "logo",
    alias: ["logomenu"],
    desc: "menu the bot",
    category: "menu",
    react: "🧃",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭━━〔 *Logo List* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• neonlight
... (rest of list preserved) ...
╰──────────────┈⊷`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://image2url.com/images/1765179852563-98dac8d0-99cd-4f42-b768-69f20b25ed3d.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363422488713927@newsletter',
                        newsletterName: "FAIZAN-F-MD",
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

... (other menu handlers unchanged) ...

// In dlmenu handler: fixed the invalid imagekit usage
cmd({
    pattern: "dlmenu",
    desc: "menu the bot",
    category: "menu",
    react: "⤵️",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭━━〔 *Download Menu* 〕━━┈⊷
... (menu content) ...
╰──────────────┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                // fixed: use valid string or template literal for url
                image: { url: `https://image2url.com/images/1765179852563-98dac8d0-99cd-4f42-b768-69f20b25ed3d.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363422488713927@newsletter',
                        newsletterName: 'FAIZAN-F-MD',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

... (rest of file preserved) ...
