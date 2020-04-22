const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const options = {
    toJSON : {
        virtuals : true
    }
}
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
}, options);

accountSchema.virtual('accountNo').get(function (){
    return this._id;
})
accountSchema.virtual('interestRate').get(function (){
    return this.balance * 0.5;
})

const Account = mongoose.model('Account', accountSchema);
module.exports = Account;
