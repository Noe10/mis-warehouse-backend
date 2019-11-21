const user = require('@model/user');

module.exports = {

    login(socket, data) {
        const {user, pass} = data;
        
        console.log("la data de login es ", data);
    },

    saludo(socket, data) {

        console.log("la data de saludo es ", data);
        
    },
    saludo2(socket, data) {

        console.log("la data de saludo2 es ", data);
        
    },
    saludo3(socket, data) {

        console.log("la data de saludo3 es ", data);
        
    }


}