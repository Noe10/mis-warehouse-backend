const user = require('../models/users');

module.exports = {

    login(socket, data) {
        const {user, pass} = data;
        
        console.log("la data de login es ", data);
    }


}