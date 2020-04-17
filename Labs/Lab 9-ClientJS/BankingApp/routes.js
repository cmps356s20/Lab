const express = require('express')
const accountService = require('./services/account-service')


const router = express.Router();

router.get('/accounts',accountService.getAccounts )
      .post('/accounts', accountService.addAccount);

router.route('/accounts/:accountNo')
    .get(accountService.getAccount)
    .put(accountService.updateAccount)
    .delete(accountService.deleteAccount);

router.route('/accounts/:accountNo/trans')
    .post(accountService.addTransaction);

module.exports = router;

