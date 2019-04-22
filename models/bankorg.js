/** 
*  bank organisation model
*  Describes the characteristics of each attribute in a bank organisation resource.
*
* @author Venkatesh Kunduru
*
*/

// see <https://mongoosejs.com/> for more information
const mongoose = require('mongoose')

const BankOrgSchema = new mongoose.Schema({
  _id: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true, default: 'name' },
  street1: { type: String, required: true, default: 'Street 1' },
  street2: { type: String, required: false, default: '' },
  city: { type: String, required: true, default: 'Maryville' },
  state: { type: String, required: true, default: 'MO' },
  zip: { type: String, required: true, default: '64468' },
  country: { type: String, required: true, default: 'USA' }
})

module.exports = mongoose.model('BankOrg', BankOrgSchema)
