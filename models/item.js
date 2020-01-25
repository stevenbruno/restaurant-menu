var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ItemSchema = new Schema({
  name: { type: String, required: true, max: 100 },
  category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
  description: { type: String, required: false },
  price_cents: { type: Number, required: true }
});

ItemSchema.virtual('url').get(function() {
  return '/catalog/item/' + this._id;
});

ItemSchema.virtual('price_usd').get(function() {
  (this.price_cents / 100).toFixed(2);
});

//Export model
module.exports = mongoose.model('Item', ItemSchema);
