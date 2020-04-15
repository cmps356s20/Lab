const express = require('express')
const accountService = require('./services/account-service')


const router = express.Router();

router.route('/accounts')
      .get(accountService.getAccounts )
      .post(accountService.addAccount)
      .put(accountService.updateAccount)

router.route('/accounts/:id')
    .get(accountService.getAccount)
    .delete(accountService.deleteAccount);

router.route('/accounts/:id/trans')
    .post(accountService.addTransaction);

module.exports = router;