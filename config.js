const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923096761027";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_48_06_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgODEsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDM2LFxuICAgICAgICAzNyxcbiAgICAgICAgOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTUxLFxuICAgICAgICA2MSxcbiAgICAgICAgOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA3MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTksXG4gICAgICAgIDEzNixcbiAgICAgICAgNzYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDUzLFxuICAgICAgICA0NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzLFxuICAgICAgICAyOSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ1LFxuICAgICAgICAzMixcbiAgICAgICAgMTA0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMixcbiAgICAgICAgMjUwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDcwLFxuICAgICAgICA1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTIwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgODUsXG4gICAgICAgIDEzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDU1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTgzLFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA3NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAzNixcbiAgICAgICAgMTExLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMixcbiAgICAgICAgOTMsXG4gICAgICAgIDMxLFxuICAgICAgICA5OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTI1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTMsXG4gICAgICAgIDMwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzksXG4gICAgICAgIDgwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDk3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjMwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMSxcbiAgICAgICAgNTksXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTksXG4gICAgICAgIDUwLFxuICAgICAgICAxNTksXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDYzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDgxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTkxLFxuICAgICAgICA2NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDY4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjA5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDUzLFxuICAgICAgICA1NixcbiAgICAgICAgMjQxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDczLFxuICAgICAgICAzNCxcbiAgICAgICAgNjksXG4gICAgICAgIDIxMixcbiAgICAgICAgNzQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyMixcbiAgICAgICAgMTAsXG4gICAgICAgIDksXG4gICAgICAgIDEzMixcbiAgICAgICAgNTIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgODYsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzksXG4gICAgICAgIDE3MSxcbiAgICAgICAgODUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDk4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgODIsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgODksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMTFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDU0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTEwLFxuICAgICAgICA5NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxODcsXG4gICAgICAgIDExNCxcbiAgICAgICAgODUsXG4gICAgICAgIDIxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDkyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjksXG4gICAgICAgIDc5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAzNyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDM1LFxuICAgICAgICA2OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDY3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDc3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDUyLFxuICAgICAgICA5NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE1MixcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTA2LFxuICBcImFkdlNlY3JldEtleVwiOiBcInAwWGJGNVd6cWhzWTJIVThGWXZwZFl6STltWWxnbjlLNzhFbVUxdlJydU09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDk2NzYxMDI3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQUFGMzJFNjQzRTM4REVGMUU2MFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTg4ODQxMjdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwOTY3NjEwMjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBOTc3MkU3ODhENEVFOTU4MEYzXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxODg4NDEzMVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJUYXpCSWE2U1JFQ3l2VkVjRlI1UWJRXCIsXG4gIFwicGhvbmVJZFwiOiBcImZlNzFiMmM3LWY0NTYtNDRlMi05YTFhLTI4Mzk0ZGYwZmY2MlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjQsXG4gICAgICAyMzcsXG4gICAgICA3NyxcbiAgICAgIDE4OCxcbiAgICAgIDIzMyxcbiAgICAgIDk5LFxuICAgICAgMTk4LFxuICAgICAgMjAyLFxuICAgICAgMTI4LFxuICAgICAgMjQ3LFxuICAgICAgMTYsXG4gICAgICA5MSxcbiAgICAgIDI1MixcbiAgICAgIDEwNyxcbiAgICAgIDI0NixcbiAgICAgIDgsXG4gICAgICAxMzAsXG4gICAgICAyNDgsXG4gICAgICAyMTUsXG4gICAgICAxMDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwMCxcbiAgICAgIDExMCxcbiAgICAgIDUyLFxuICAgICAgMjIzLFxuICAgICAgMjA4LFxuICAgICAgMjMxLFxuICAgICAgMTM1LFxuICAgICAgMjQxLFxuICAgICAgMTIwLFxuICAgICAgODEsXG4gICAgICAxMDUsXG4gICAgICAzNCxcbiAgICAgIDEzLFxuICAgICAgMTUxLFxuICAgICAgOTQsXG4gICAgICAxODQsXG4gICAgICA0MSxcbiAgICAgIDU5LFxuICAgICAgMjMxLFxuICAgICAgMTcyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT3FDNlBJTkVKbXUwTE1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJldi9ndEhLRHRjMVNZVEZTMjBnanhHWlAvdUJoTExpQ09DeVVmK0lxYkVzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkNSaFVsL2YzR3VzZjlrZ24vTFpQalVDSHBHZXkveGNWYzdza0xWdWp5NlVmZDJHbHRjS0lNajJKQTdGd3RYbEJ1elhTOG96RDEwU3dseUsvek40OWlnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlI2bkRtdW5jZEJmUEdwNmt0VVl4RUpRKzI2c1E5SGdkc252ZWZvT3FYam9WaXErUVhmVXN0aVVwYmhHdlpkVis1UDA3di9KQ0o3QThLTmlsSzl4M0JRPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDk2NzYxMDI3OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJGaW5kIE1lXCIsXG4gICAgXCJsaWRcIjogXCIxNDU3ODg4NTY0NzU4NDA6MkBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzA5Njc2MTAyNzoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDc1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJpXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTg4ODQxMjQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJMVVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUkxVS5qc29uIjogIntcImtleURhdGFcIjpcInVJV3NBMmlwZXlBQ0ZQck12OTY2SmkvVXY5NjFiMjRtT0lXbDFzOWttUlE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzczMDQ0MDU1NCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzEsMF19LFwidGltZXN0YW1wXCI6XCIxNzE4ODg0MTI1Mzg0XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



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
