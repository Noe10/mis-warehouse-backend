const modelGoods = require('../models/goods');

module.exports = {
    async create(socket, data) {
        await modelGoods.create(data);
    },

    async getall(socket, data) {
        let result = await modelGoods.getAll();
        socket.emit(socket.event, result);
    },

    async search(socket, data) {
        let result = await modelGoods.search(data);
        socket.emit(socket.event, result);
    },

    async update(socket, data) {
        await modelGoods.update(data);
    },

    async delete(socket, data) {
        await modelGoods.delete(data);
    }
}