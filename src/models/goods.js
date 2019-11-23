const database = require('../models/database.js');

module.exports = {

    async getAll() {
        let dbo = await database.getDbo();

        let data = dbo.collection('goods').find();

        console.log(data);
        
        return goods;
    },

    async search(_id) {
        for (const g of goods) {
            if(_id === g._id)
                return g;
        }
    },

    async create(g) {
        goods.push(g);
    },

    async update(g) {
        for (const i in goods) {
            if(goods[i]._id === g._id)
                goods[i] = g;
        }
    },

    async delete(_id) {
        for (const i in goods) {
            if(goods[i]._id === _id)
                delete goods[i];
        }

    }

}