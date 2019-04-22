/** 
*  transaction model
*  Describes the characteristics of each attribute in a transaction resource.
*
* @author Meghna Reddy Kunta
*
*/

// see <https://mongoosejs.com/> for more information
const mongoose = require('mongoose')

const TransactionSchema = new mongoose.Schema({
  _id: { type: Number, required: true },
  transactionDate: { type: Date, required: true, default: Date.now() },
  transactionType: { type: String, enum: ['NA', 'balance enquiry', 'withdraw', 'deposit'], required: true, default: 'NA' },
  transactionAmount: { type: Number, required: true, default: 0.0, min: 0.0, max: 100000 },
  // accountId: { type: Number, required: true, unique: true, default: 555 },
  // categoryID: { type: Number, required: true }
})

module.exports = mongoose.model('Transaction', TransactionSchema)
