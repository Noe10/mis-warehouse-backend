const  modelGoods = require('../models/goods');
module.exports = {
    async createGoods(socket,data){
       let resul = await modelGoods.create(data);
    console.log("datos registrados correctamente", resul);
    
    },
    async getAll(){
        let resul = await modelGoods.getAll();
        console.log('Listando informacion', resul);
        
    },
    async searchGoods( data){
        let { id } = data;
        let resul = await modelGoods.search(id);
        if(resul.lenght > 0 ){
            console.log('the information is ',{resul});
        }else{
            console.log('don´t exist infomation');
            
        }
    },
    async UpdateGoods(data){
        let resul = await modelGoods.update(data);
        console.log('datos actualizados correctamente', resul);
        
    }, 
    async DeleteGoogs(data){
        let resul = await modelGoods.delete(data);
        console.log('datos eliminados correctamente', resul);
        
    }

}