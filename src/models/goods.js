const database = require('../models/database.js');

module.exports = {

    async getAll() {
        let dbo = await database.getDbo();

        return await dbo.collection('goods').find().toArray();
    },

    async search(good) {
        let dbo = await database.getDbo();

        let {_id} = good;

        return await dbo.collection('goods').find({_id: new ObjectId(_id)}).toArray();
    },

    async create(good) {
        let dbo = await database.getDbo();
        try {
            await dbo.collection('goods').insertOne(good);
        } catch (error) {
            console.log(error);
            
        }
    },

    async update(good) {
        let dbo = await database.getDbo();

        let {_id} = good;
        delete good._id;

        await dbo.collection('goods').updateOne({_id:  new ObjectId(_id)},{$set: good});
    },

    async delete(good) {
        let dbo = await database.getDbo();

        let {_id} = good;
        
        await dbo.collection('goods').deleteOne({_id: new ObjectId(_id)});
    }

}