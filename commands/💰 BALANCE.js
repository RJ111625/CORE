/*CMD
  command: ð° BALANCE
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var balance = Libs.ResourcesLib.userRes("balance")
var lib = Libs.ReferralLib
var refList = lib.currentUser.refList.get();
Bot.sendMessage("*ð¤´ User : "+user.first_name+"\n\nð° Iyong Balance : "+balance.value().toFixed(2)+" PHP\n\nð¨âð¨âð¦âð¦MAG REFER AT UMIPON NG MARAMI*")
