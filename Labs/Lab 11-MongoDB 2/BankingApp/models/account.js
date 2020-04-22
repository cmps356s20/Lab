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

accountSchema.methods.countNumberOfDocuments = async function(){
    const totalDocuments = await Account.countDocuments();
    return totalDocuments;
}

accountSchema.statics.getAccounts = async function(acctType){

        console.log('here');
        if (acctType!=null && acctType != 'All')
            return await Account.find({acctType})
        else
            return await Account.find();
}

accountSchema.virtual("minimumBalance").get(function () {
    if(this.acctType == 'Saving') return 1000;
})

//work on a single document
accountSchema.virtual("monthlyFee").get(function () {
    if(this.acctType == 'Current') return 15;
})

accountSchema.virtual('accountNo').get(function (){
    return this._id;
})
accountSchema.virtual('interestRate').get(function (){
    return this.balance * 0.5;
})

const Account = mongoose.model('Account', accountSchema);
module.exports = Account;

// class to access the methods of the class

class Student {
    static getName(){
        return 'Ali';
    }
    getAge(){
        return '22'
    }
}

Student.getName()