/** 
*  Order model
*  Describes the characteristics of each attribute in an order resource.
*
* @author Bhagya Sree Chanda
*
*/

// see <https://mongoosejs.com/> for more information
const mongoose = require('mongoose')

const AccountSchema = new mongoose.Schema({
  _id: { type: Number, required: true },
  accountId: { type: Number, required: true, unique: true, default: 555 },
  name: { type: String, required: true },
  accountCreated: { type: Date, required: true, default: Date.now() },
  accountType: { type: String, enum: ['checking', 'savings', 'current'], required: true, default: 'NA'}
  //accountType: { type: String, required: true}
})

module.exports = mongoose.model('Account', AccountSchema)
