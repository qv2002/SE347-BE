const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const mongooseDelete = require('mongoose-delete');
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
    {
        id: {
            type: Number,
            unique: true,
        },
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
        },
        type: {
            type: Schema.Types.ObjectId,
            ref: 'product_types',
        },
        quantity: {
            type: Number,
            required: true,
            default: 1,
        },
        image: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

ProductSchema.plugin(mongooseDelete, { deletedAt: true, overrideMethods: 'all' });
ProductSchema.plugin(AutoIncrement, { id: 'products', inc_field: 'id' });

module.exports = mongoose.model('products', ProductSchema);
