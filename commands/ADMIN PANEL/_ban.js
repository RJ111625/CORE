/*CMD
  command: /ban
  help: 
  need_reply: true
  auto_retry_time: 
  folder: ADMIN PANEL
  answer: *๐Send Telegram User Id To Ban User*
  keyboard: 
  aliases: 
CMD*/

var key = "2116898236"
if (user.telegramid== key){
Bot.setProperty(""+message+"" , "ban" , "string");
Bot.sendMessage("*๐ User " +message+ " Has Been Banned Successfully*");
}else{
return
}
