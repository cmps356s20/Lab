const Account = require('../models/account')
const Transaction = require('../models/accounts-trans')

class AccountRepository {
    //Get account from accounts.json file
    async getAccounts(acctType) {
        if (acctType && acctType != 'All')
            return await Account.find({acctType})
        else
            return await Account.find();
    }

    //gets account by accountNO
    async getAccount(accountNo) {
        return await Account.findOne({_id: accountNo})
    }

    async addAccount(account) {
        return await Account.create(account);
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

    async addTransaction(transaction) {
        transaction.amount = parseInt(transaction.amount);  //123
        const account = await this.getAccount(transaction.accountNo);  //123

        if (transaction.transType == 'Deposit') {
            account.balance += transaction.amount;
        } else {
            account.balance -= transaction.amount;
        }

        const newTransaction = await Transaction.create(transaction);
        await account.save();

        return  newTransaction;

    }
}

module.exports = new AccountRepository();