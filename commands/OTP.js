/*CMD
  command: OTP
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var OTP = Libs.Random.randomInt(12000,99999)
Api.sendMessage({ chat_id: "@pinoy_activity_channel" , text: "*šš» Hello "+user.first_name+"\n\nš Name = "+user.first_name+"\nš OTP = "+OTP+"\n\nāļø Enter Your OTP In @"+bot.name+" To Verify Yourself In Bot.*" , parse_mode: "Markdown" })
User.setProperty("OTP", OTP, "string")
Bot.sendMessage("*āļø Enter Your OTP From Below Channel To Verify Yourself.\n\nš Channel Link = @pinoy_activity_channel*")
Bot.runCommand("Verify")
