/** Load events object into socket */
function loadEvents(events, socket) {
    for (const key in events) {
        for (const evt in events[key]) {
            const fn = events[key][evt];
            const event = key+":"+evt;
            socket.on(event, (data) => {
                fn(socket, data);
            })
        }
    }
    
}
/** list events */
function listEvents(events) {
    console.log("Cargando eventos disponibles: ");
    for (const key in events) {
        for (const evt in events[key]) {
            const event = key+":"+evt;
            console.log("Evento: ", event);
        }
    }
}
module.exports = {
    loadEvents,
    listEvents
};