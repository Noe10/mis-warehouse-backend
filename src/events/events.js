const { loadEvents, listEvents } = require('../util/utilEvents');

const events = {
    goods: require('../events/goods')
}

listEvents(events);

module.exports = function (socket) {

    loadEvents(events, socket);

}