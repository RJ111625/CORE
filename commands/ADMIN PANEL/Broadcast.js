/*CMD
  command: Broadcast
  help: 
  need_reply: 
  auto_retry_time: 
  folder: ADMIN PANEL
  answer: 
  keyboard: 
  aliases: 
CMD*/

var msg = options.msg

Bot.sendMessage("*📢 Admin Message ~ #msg\n➖➖➖➖➖➖➖➖➖➖➖➖\n\n"+msg+"*")
