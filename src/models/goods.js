let goods = [
    {
        _id: 'abc1',
        name: "leche",
        category: "lacteos",
        stock: 50,
        proveedor: 'bbb2',
        details: {
            expiration: '2020-10-11'
        }
    },
    {
        _id: 'abc2',
        name: "chocolate",
        category: "dulces",
        stock: 12,
        proveedor: 'bbb2',
        details: {
            expiration: '2020-10-11'
        }
    },
    {
        _id: 'abc3',
        name: "papas",
        category: "verduras",
        stock: 31,
        proveedor: 'ccc3',
        details: {
            expiration: '2020-10-11'
        }
    }
]

module.exports = {

    async getAll() {
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