/*CMD
  command: /broadcast
  help: 
  need_reply: 
  auto_retry_time: 
  folder: ADMIN PANEL
  answer: πSend Your Message For Broadcasting
  keyboard: 
  aliases: 
CMD*/

if(user.telegramid == 2116898236){
Bot.runAll({ 
command: "Broadcast",
for_chats: "private-chats",
options: {msg: message}
})
Bot.sendMessage("*π Message Sended To All Users*")
}else{
Bot.sendMessage("*π° You're Not An Admin*")
}
