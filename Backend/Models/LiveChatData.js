const mongoose = require('mongoose');
const schemaOptions = {
  strict: false,
  timestamps: true,
};

const ChatSchema = new mongoose.Schema(
    {
 name:{
type:String,
minLength : 3,
maxLength :30,
},
message:{
    type:String,
    minLength:1,
    maxLength:300,
},
date: {
    year: currentDate.getFullYear(),
    month: currentDate.getMonth() + 1, // Months are zero-based, so adding 1 to get the actual month
    day: currentDate.getDate()
  },
  time: {
    hour: currentDate.getHours(),
    minute: currentDate.getMinutes(),
    second: currentDate.getSeconds()
  },
agentID:{
    type: Int32Array,
    ref: 'agent.agentid',
    required: true
},
userID:{
    type: Int32Array,
    ref: 'user.userid',
    required: true
}
}
);

module.exports = mongoose.model('LiveChatData', ChatSchema);
