function fixData(data) {
    if(typeof data === "string"){
        try {
            return JSON.parse(data);
        } catch (error) {}
    }
    return data;
}

/** Load events object into socket */
function loadEvents(events, socket) {
    for (const key in events) {
        for (const method in events[key]) {
            const fn = events[key][method];
            const event = key+":"+method;
            socket.on(event, (data) => {
                socket.event = event;
                fn(socket, fixData(data));
            })
        }
    }
    
}
/** list events */
function listEvents(events) {
    console.log("Cargando eventos disponibles: ");
    for (const key in events) {
        for (const method in events[key]) {
            const event = key+":"+method;
            console.log("\t > ", event);
        }
    }
}
module.exports = {
    loadEvents,
    listEvents
};