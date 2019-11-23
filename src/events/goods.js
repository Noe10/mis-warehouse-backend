const  modelGoods = require('../models/goods');
module.exports = {
    async create(socket,data){
       let resul = await modelGoods.create(data);
    console.log("datos registrados correctamente", resul);
    
    },
    async getall(){
        let resul = await modelGoods.getAll();
        console.log('Listando informacion', resul);
        
    },
    async search( data){
        let { id } = data;
        let resul = await modelGoods.search(id);
        if(resul.lenght > 0 ){
            console.log('the information is ',{resul});
        }else{
            console.log('don´t exist infomation');
            
        }
    },
    async update(data){
        let resul = await modelGoods.update(data);
        console.log('datos actualizados correctamente', resul);
        
    }, 
    async delete(data){
        let resul = await modelGoods.delete(data);
        console.log('datos eliminados correctamente', resul);
        
    }

}