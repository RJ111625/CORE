/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/



var OTP = Libs.Random.randomInt(12000,99999)
Api.sendMessage({ chat_id: "@pinoy_activity_channel" , text: "*ππ» Hello "+user.first_name+"\n\nπ Name = "+user.first_name+"\nπ OTP = "+OTP+"\n\nβοΈ Enter Your OTP In @"+bot.name+" To Verify Yourself In Bot.*" , parse_mode: "Markdown" })
User.setProperty("OTP", OTP, "string")
Bot.sendMessage("*βοΈ Enter Your OTP From Below Channel To Verify Yourself.\n\nπ Channel Link = @pinoy_activity_channel*")
Bot.runCommand("Verify")
function hello(message) {
var greetings = ""
let stat = Bot.getProperty(""+user.telegramid+"");


Bot.sendMessage(greetings + message)
}

function doTouchOwnLink() {
Bot.sendMessage("*You're Trying To Invite You're Self β*")
}

function doAttracted(channel) {
hello("Referal: " + channel)
}

function doAtractedByUser(refUser) {
hello("")
var balance = Libs.ResourcesLib.anotherUserRes("balance", refUser.telegramid)
balance.add(0.25)
Bot.sendMessageToChatWithId(refUser.chatId, "*π§ New Referral : +0.25PHP *");
}

function doAlreadyAttracted(){
Bot.sendMessage("*You Already Started The Bot β*");
}

var trackOptions = {
onTouchOwnLink: doTouchOwnLink,
onAttracted: doAttracted,
onAtractedByUser: doAtractedByUser,
onAlreadyAttracted: doAlreadyAttracted
}

Libs.ReferralLib.currentUser.track(trackOptions);

var new_user = User.getProperty ("new_user")
if(!new_user){ 
Bot.sendMessageToChatWithId(2116898236, "π¦New Userπ¦\n\nβ User = "+user.first_name+"\nπ° Username = @"+user.username+"\nπ User ID = "+user.telegramid+"\nπ User Link = ["+user.first_name+"](tg://user?id="+user.telegramid+")")
User.setProperty ("new_user",true,"boolean")
}


