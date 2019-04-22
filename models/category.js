/** 
*  Order Line Item model
*  Describes the characteristics of each attribute in an order line item - one entry on a customer's order.
*
* @author Sowmya Reddy Kumbham
*
*/

// see <https://mongoosejs.com/> for more information
const mongoose = require('mongoose')

const CategorySchema = new mongoose.Schema({
  _id: { type: Number, required: true },
  categoryID: { type: Number, required: true },
  categoryName: { type: String, required: true, default: 'NA' }
})

module.exports = mongoose.model('Category', CategorySchema)
