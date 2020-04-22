const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    accountNo : {
        type : Schema.Types.ObjectId,
        ref : 'Account',
        required : [true , 'account id is a required field']
    },
    transType : {
        type : String,
        enum : ['Deposit', 'Withdraw'],
        required : [true , 'Transaction type is required field']
    },
    amount : {
        type : Number,
        min : [0, 'Amount can not be negative'],
        required : [true , 'amount is required field']
    }
})

module.exports =  mongoose.model('Transaction', transactionSchema);
