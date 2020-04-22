const fs = require('fs-extra')
const path = require('path')
const Account = require('../models/account')
const Transaction = require('../models/accounts-trans')

class AccountRepository {

    constructor() {
        this.accountFilePath = path.join(__dirname, '../data/accounts.json');
    }

    async getAccounts(acctType) {
       return await Account.getAccounts(acctType);
    }

    //gets account by accountNO
    async getAccount(accountNo) {
        const account = await Account.findOne({_id: accountNo})
    }

    async addAccount(account) {
        const newAccount = await Account.create(account);
        return await newAccount.countDocuments();
    }

    async deleteAccount(accountNo) {
        return await Account.deleteOne({_id: accountNo})
    }

    async deleteAllAccounts() {
        return await Account.delete()
    }

    async updateAccount(account) {
        //Account.update({_id: account._id}, {$set: account})
        return await Account.findByIdAndUpdate(account._id, account);

        // try {
        //     const accounts = await this.getAccounts();
        //     const index = accounts.findIndex(acct => acct.accountNo == account.accountNo);
        //     if (index >= 0) {
        //         accounts[index] = {...accounts[index], ...account};
        //         return await this.saveAccounts(accounts);
        //     }
        //
        //     return -1;
        // } catch (err) {
        //     throw err;
        // }
    }

    async sumBalance() {
        // try {
        //     const accounts = await this.getAccounts();
        //     return accounts.reduce((sum, account) => sum + account.balance, 0);
        // } catch (e) {
        //     throw err;
        // }
    }

    async chargeFees() {
        // try {
        //     const accounts = await this.getAccounts();
        //     for (const acct of accounts) {
        //         //console.log('acct instanceof CurrentAccount', acct instanceof CurrentAccount);
        //         if (acct instanceof CurrentAccount) {
        //             acct.deductFee()
        //         }
        //     }
        //     await this.saveAccounts(accounts);
        // } catch (err) {
        //     throw err;
        // }
    }

    async distributeBenefits(benefitRate) {
        // try {
        //     const accounts = await this.getAccounts();
        //     // Go through all the Saving accounts and distribute the benefit using a 5% benefit.
        //     // Should not use filter and map for this as this will NOT update the original array
        //     for (const acct of accounts) {
        //         //console.log('acct instanceof SavingAccount', acct instanceof SavingAccount);
        //         if (acct instanceof SavingAccount) {
        //             acct.addBenefit(benefitRate);
        //         }
        //     }
        //     await this.saveAccounts(accounts);
        // } catch (err) {
        //     throw err;
        // }
    }

    //Save accounts to accounts.json file
    async saveAccounts(accounts) {
        //return await fs.writeJSON(this.accountsFilePath, accounts);
    }

    async getTransaction(accountNo){
        const trans =  await Transaction.find({accountNo}).populate('accountNo');
        return trans.map(tran=>{
            const newTrans = tran.toObject();
            newTrans.account = tran.accountNo;
            delete newTrans.accountNo;
            return newTrans;
        })

    }
    async addTransaction(transaction) {
        console.log(transaction);
        // transaction.accountNo = parseInt(transaction.accountNo);
        transaction.amount = parseInt(transaction.amount);
        try {
            const account = await this.getAccount(transaction.accountNo);
            if (transaction.transType == 'Deposit') {
                account.balance += (transaction.amount);
            } else {
                account.balance -= (transaction.amount);
            }
            const trans = await Transaction.create(transaction);
            await this.updateAccount(account);
            return trans;
        } catch (err) {
            throw err;
        }
    }

    async initDB(){
        //testing
        // const sumBalance = await Account.sumBalance();
        // sumBalance.forEach(s=> console.log(s.totalBalance))

        const accountTrans = await Transaction.getAllTransGroupedByAccNo();
        accountTrans.forEach(account=>{
            console.log(account);
        })

        Account.countDocuments().then(async count=>{
            if(count==0){
                const accounts = await fs.readJSON(this.accountFilePath);
                accounts.forEach(account=>this.addAccount(account));
                console.log('No accounts were not found so initializing the DB from JSON file')
            }
            else{
                console.log('DB is already initialized.')
            }
        });
    }
}

module.exports = new AccountRepository();