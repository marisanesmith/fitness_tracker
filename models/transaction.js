const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const transactionSchema = new Schema({

});

const Transaction = mongoose.model("Transacation", transactionSchema);

module.exports = Transaction;