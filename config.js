const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/TqtqWTB/Ephoto360-com-166de104a10faf.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923xxx Your Number";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/82336d4b04ac81b77e18e.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.junn4.my.id" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_48_10_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDUwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDkzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgODYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDM3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNixcbiAgICAgICAgODAsXG4gICAgICAgIDM5LFxuICAgICAgICAyNCxcbiAgICAgICAgMjU0LFxuICAgICAgICA5MixcbiAgICAgICAgNzEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDYwLFxuICAgICAgICAxODIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTA0LFxuICAgICAgICA3MCxcbiAgICAgICAgMTM0LFxuICAgICAgICA5MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDgsXG4gICAgICAgIDI2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgNixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMzIsXG4gICAgICAgIDYwLFxuICAgICAgICA4MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDUzLFxuICAgICAgICA4NCxcbiAgICAgICAgMjI2LFxuICAgICAgICA0NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDQ3LFxuICAgICAgICAzLFxuICAgICAgICAzOCxcbiAgICAgICAgMjUxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTIzLFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OSxcbiAgICAgICAgMjUxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDY2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTcwLFxuICAgICAgICA3NyxcbiAgICAgICAgMjI5LFxuICAgICAgICA2NixcbiAgICAgICAgMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDM1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTQyLFxuICAgICAgICA1NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDgsXG4gICAgICAgIDYxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDU4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDQyLFxuICAgICAgICA2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTc0LFxuICAgICAgICA2MyxcbiAgICAgICAgNixcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgODEsXG4gICAgICAgIDMyLFxuICAgICAgICAxLFxuICAgICAgICA1LFxuICAgICAgICAxODIsXG4gICAgICAgIDQ1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzLFxuICAgICAgICAyNDksXG4gICAgICAgIDcyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNixcbiAgICAgICAgMjIyLFxuICAgICAgICAzNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjI5LFxuICAgICAgICAxMTksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjI4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDgwLFxuICAgICAgICAxODAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDY2LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA5N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTAyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDYyLFxuICAgICAgICA0MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxODksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDkyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDExNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTU2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTUyLFxuICAgICAgICA5NixcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDUzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDc1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDczLFxuICAgICAgICAyLFxuICAgICAgICA5MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDUxLFxuICAgICAgICA1MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjMzLFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiYmxIdHhHeE5Tb1hHRWlkcFY0NVk0STJTSmZ4R1pqdXhsTVcwZGsweWc0TT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUmVQdGQ2LUpSeUtYdmVtWWt0cWRzd1wiLFxuICBcInBob25lSWRcIjogXCIyN2Y5ZmMwNC0zMGY0LTRiN2QtOWM5NS1iNDk4ZTE5OGE1ZjBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMCxcbiAgICAgIDcxLFxuICAgICAgMjI5LFxuICAgICAgMjQsXG4gICAgICAxMzksXG4gICAgICAxNzMsXG4gICAgICAyMDIsXG4gICAgICAxNDEsXG4gICAgICAxNTAsXG4gICAgICAxMjcsXG4gICAgICA1NSxcbiAgICAgIDIwOCxcbiAgICAgIDIwNixcbiAgICAgIDI1MCxcbiAgICAgIDIzMSxcbiAgICAgIDExNCxcbiAgICAgIDI1MixcbiAgICAgIDE1NyxcbiAgICAgIDE1MSxcbiAgICAgIDIzOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzEsXG4gICAgICA2MSxcbiAgICAgIDIyNixcbiAgICAgIDExNSxcbiAgICAgIDEyNyxcbiAgICAgIDIzMixcbiAgICAgIDQ3LFxuICAgICAgMjE4LFxuICAgICAgMTUyLFxuICAgICAgMTEwLFxuICAgICAgMTg0LFxuICAgICAgMjQ5LFxuICAgICAgMjIzLFxuICAgICAgNDEsXG4gICAgICAxNzYsXG4gICAgICA2MCxcbiAgICAgIDEzMSxcbiAgICAgIDEsXG4gICAgICAyNTQsXG4gICAgICA0N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI5QlNTMzU2U1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAxNDg5OTA0Nzo5NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkpvcHBhXCIsXG4gICAgXCJsaWRcIjogXCI4Mjc5MDMwOTcwNzk1Nzo5NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLYTEwMmtReVBiZXVBWVlKaUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlNJaTRrSzJydkNWSVZ5TitHRXFvZjB2WjgxL01yRk9LWTEwQkR3bU84Z0E9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibUFRc1JyNUdPQURJRDBFL2tQSnRVSWErc2NwcW8xaDVEM0hORStYeTQwMm5MeS9DYTNIMmV1QTdtbEJvT0lwTldFTlV6SnBZOG5qWFhNcE15ZEVWQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMEFkYS85WXV1aTA2NUJEb2hCb0RlbWErdUl3ZFg1N0VkdStwVTVzdUMvdzJ6bVhFNDFlQnpjQkVJUEV6bmhoY3puTjY5cU5JWG1HTThjVnE0bHNnRFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAxNDg5OTA0Nzo5NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI5NjA4NTI1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBT05iXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPTmIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ5YUN6ZmY0TkZMdFV0MTZGOS8xTEhNc21xWDVmWkE4cDc3enc4WTVkWnVrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIyMTU2NzY1NCxcImN1cnJlbnRJbmRleFwiOjI4LFwiZGV2aWNlSW5kZXhlc1wiOlswLDI1LDI4XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
