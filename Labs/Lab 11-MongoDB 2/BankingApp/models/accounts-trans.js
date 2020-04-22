const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    accountNo: {
        type: Schema.Types.ObjectId,
        ref: 'Account',
        required: [true, 'account id is a required field']
    },
    transType: {
        type: String,
        enum: ['Deposit', 'Withdraw'],
        required: [true, 'Transaction type is required field']
    },
    amount: {
        type: Number,
        min: [0, 'Amount can not be negative'],
        required: [true, 'amount is required field']
    }
})

transactionSchema.statics.getAllTransGroupedByAccNo = async function (acctNo) {
    return await Transaction.aggregate()
        .match({
            accountNo : acctNo
        })
        .group({
            _id: {accountNo: "$accountNo", transType: "$transType"},
            amounts: {
                $push: "$amount"
            }
        })
        .project({
        _id : "$_id.accountNo",
            transType :  "$_id.transType",
            totalAmount : {
            $reduce : {
                input : "$amounts",
                    initialValue : 0,
            in : {$add : ["$$value", "$$this"]}
            }
        }
    }).sort({
            _id : 1
        })

    // .project({
    //     _id : ""
    // })
    // .sort({
    //     _id : 1
    // });


    // ])
}

// 123
//    total withdrawal : 1000
//    total deposit 600

const Transaction = mongoose.model('Transaction', transactionSchema);
module.exports = Transaction;