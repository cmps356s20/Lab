const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountSchema = new Schema({
    acctType : {
        type : String,
        enum : ['Saving', 'Current'],
        required : [true , "Account type is a required field"]
    },
    balance : {
        type : Number,
        min : [0 , "You can not have a negative balance inside the account"],
        required : [true, "Balance is a required field"]
    }
});

const Account = mongoose.model('Account', accountSchema);
module.exports = Account;