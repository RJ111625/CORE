/*CMD
  command: šØāšØāš¦āš¦ Mag-Refer
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let stat = Bot.getProperty(""+user.telegramid+"");

if (stat=="ban"){
Bot.sendMessage("*You're Ban*");
}else{

let res = Libs.ResourcesLib.userRes("referral");
let reflink=Libs.ReferralLib.currentUser.getRefLink("pinoy_earning_bot","ME");
let lib = Libs.ReferralLib
var refList = lib.currentUser.refList.get();
Bot.sendMessage("*āÆļø Total Invites : "+refList.length+" Users\n\nāļø Per Referral 0.2PHP\n\nš Referral Link ā¬ļø\n"+reflink+"*");

}

Api.sendMessage({text: 'Keyboard Removed',reply_markup: JSON.stringify({hide_keyboard: false})})
