/*CMD
  command: Ask
  help: 
  need_reply: true
  auto_retry_time: 
  folder: SUPPORT
  answer: Isulat ang Inyong Tanong.
  keyboard: 
  aliases: 
CMD*/

let Ask = User.getProperty("Ask")
User.setProperty("Ask" ,message ,"string")
Bot.sendMessage("*š© Ang iyong huling mensahe ay= "+message+"*")
Bot.sendMessageToChatWithId(2116898236, "*š© New Support Message From User š©\n\nš¤“š» User =* ["+user.first_name+"](tg://user?id="+user.telegramid+ 3")\n\n*š Message = "+message+"*")
