const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="tahahere1213@gmail.com" // Changed

// global.location="Lahore,Pakistan."; // Removed

global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3"; // Kept default as no specific instruction to change
// global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07"; // Removed
// global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; // Removed
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || "✨ Mahiru-Bot | Powered by 🗣️ Ͳ Ꭺ Ꮋ Ꭺ 🔥 ✨"; // Changed and polished


global.devs = "923004204338" // Developer Contacts - Changed
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923004204338"; // Changed


//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_05_46_05_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDUxLFxuICAgICAgICAzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDg5LFxuICAgICAgICAyNSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDU3LFxuICAgICAgICAxODUsXG4gICAgICAgIDU0LFxuICAgICAgICA4NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTYxLFxuICAgICAgICA4NixcbiAgICAgICAgMTYwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDk3LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMzIsXG4gICAgICAgIDE5MixcbiAgICAgICAgNjcsXG4gICAgICAgIDQwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDkxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDc4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDYsXG4gICAgICAgIDY1LFxuICAgICAgICAzMixcbiAgICAgICAgMTQzLFxuICAgICAgICAyNSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxODgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDQyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxODQsXG4gICAgICAgIDAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMixcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjMzLFxuICAgICAgICA2OCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxODMsXG4gICAgICAgIDMzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDY0LFxuICAgICAgICAxNixcbiAgICAgICAgMTEyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDQsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTM5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDkzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDYsXG4gICAgICAgIDM2LFxuICAgICAgICA2OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjksXG4gICAgICAgIDU4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMjA5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDk1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDMyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDg2LFxuICAgICAgICA4MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDc3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDExOCxcbiAgICAgICAgOCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTUsXG4gICAgICAgIDIzLFxuICAgICAgICA4NSxcbiAgICAgICAgMjM2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDExNyxcbiAgICAgICAgNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDM0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTIwLFxuICAgICAgICA3MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDg3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDc3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDYzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTE2LFxuICAgICAgICA2MCxcbiAgICAgICAgNyxcbiAgICAgICAgMCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTMwLFxuICAgICAgICA2MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxODksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA5NCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDk5LFxuICAgICAgICA1MixcbiAgICAgICAgMTA4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDI4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTk2LFxuICAgICAgICA5MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTc4LFxuICBcImFkdlNlY3JldEtleVwiOiBcImJrRmhSZGMycUlDUGtRMHZVZ05tT1gwSGxiRk9LeTJKbjE3R1dzSW5RQ009XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMzU0MzAxMzQzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQjI5RUFCRTEwODNENUREQUM2ODM5RkRFMzBCNzMwRFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NDg0MTExNzNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMzNTQzMDEzNDNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjQzNEI1MTJDMjJGNjVEQTQ3NDE4NzNFN0IyQjI0OTE4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc0ODQxMTE3NFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzM1NDMwMTM0M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMUVDM0YwMUU4NkE5OTRENDYxNDE3ODkxOUIzNDAyMTVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzQ4NDExMTc3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjZRTlk1OVRvVENtTDhvNVNsM2ppb3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiODM2ZTEwMzAtNGUxNi00MzRjLTk2ZjctYTk3ZDUwMmFkZjdkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxNyxcbiAgICAgIDIwOCxcbiAgICAgIDIzNixcbiAgICAgIDE3MCxcbiAgICAgIDE1NyxcbiAgICAgIDI3LFxuICAgICAgNjQsXG4gICAgICAxMzQsXG4gICAgICAxMTgsXG4gICAgICAxLFxuICAgICAgMjMxLFxuICAgICAgMjcsXG4gICAgICAyMTYsXG4gICAgICA3NixcbiAgICAgIDEyNCxcbiAgICAgIDQ1LFxuICAgICAgMTY0LFxuICAgICAgMTUzLFxuICAgICAgMCxcbiAgICAgIDI1MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjExLFxuICAgICAgNTYsXG4gICAgICAxMCxcbiAgICAgIDE5OSxcbiAgICAgIDEzNyxcbiAgICAgIDE3OCxcbiAgICAgIDM2LFxuICAgICAgMjM1LFxuICAgICAgNyxcbiAgICAgIDE3NixcbiAgICAgIDQxLFxuICAgICAgMTI1LFxuICAgICAgNTIsXG4gICAgICAxOTgsXG4gICAgICAxNSxcbiAgICAgIDIwNCxcbiAgICAgIDY3LFxuICAgICAgMTYyLFxuICAgICAgMjgsXG4gICAgICAxOTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJYjVnd2NRbjhiYXdRWVlCaUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlhneFNPMXJyRks4QS9ES1MwY0R2a2ZVbU5yUkh1QjJjWXRtTjBjeSsrU2c9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiem1NeFNxdXZtUnZoSitSWUdMRGYxdzQ0TWIxaEpXdktvdWd5eHZTbElqbzV0TlllQjZ2cWtkSVl1enpJVXJ0dmZ0MXVEaERTMVhXSW9SbEtjTXo2Qnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSlhBZ0RES0w5QXJnc0c3VXdYL09jWUFaeEk3ZE5qUlhhSkx1MGpFMno3NXlIWFJNS2g2Y3F0M0M4eGVUTHJHN1NiRUM4STVwYUVQbEVIdmJVVHlwZ2c9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMzNTQzMDEzNDM6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJTIEggQSBEIE8gV1wiLFxuICAgIFwibGlkXCI6IFwiMTQxMzEzNjAxMjI4OTA1OjE1QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMzU0MzAxMzQzOjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA0MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ4NDExMTcyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQU8yXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBTzAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJSMUJobURzb2NycjdvM2d0cU1MeW1HRUlhL2ZiRWpxRFNCUEl5KzQ0S1FrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0NzQ0NzEwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDc3MTIyNjc2MjZcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBTzEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJZS0EyMUd2VjJRL2FZTzVZbldjeUxDU0w2SWNuVjUrQVdQUnFiSjNpeUs4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0NzQ0NzEwLFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBTzIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIzcHJXdUNQZEcxcmE5cktVZ1BuNUtXRGpEeHFpalk4TXA3OFVTRy9JdmdrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0NzQ0NzEwLFwiY3VycmVudEluZGV4XCI6NSxcImRldmljZUluZGV4ZXNcIjpbMCwxLDVdfSxcInRpbWVzdGFtcFwiOlwiMTc0ODM1NDcyNTgyMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /** Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "✨ Mahiru-Bot | Powered by 🗣️ Ͳ Ꭺ Ꮋ Ꭺ 🔥 ✨" , // Changed and polished
 
  author : process.env.PACK_AUTHER|| "🗣️ Ͳ Ꭺ Ꮋ Ꭺ 🔥", // Changed
  packname: process.env.PACK_NAME || "Mahiru-Bot Sticker Pack", // Added a default packname
  botname : process.env.BOT_NAME  || "Mahiru-Bot", // Changed
  ownername:process.env.OWNER_NAME|| "🗣️ Ͳ Ꭺ Ꮋ Ꭺ 🔥", // Changed


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(), // Kept SUHAIL as default theme, can be changed if needed


};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

  
