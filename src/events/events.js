const { loadEvents, listEvents } = require('@util/utilEvents');

const events = {
    auth: require('@events/auth'),
    goods: require('@events/goods')
}

listEvents(events);

module.exports = function (socket) {

    loadEvents(events, socket);

}