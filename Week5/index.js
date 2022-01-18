module.exports = {

    events: {},

    /**
     * @param {String} event
     * @param {Object} subscriber
     * @param {Function} handler
     */
    on: function (event, subscriber, handler) {
        var target = (this.events.hasOwnProperty(event)) ? this.events[event] : this.events[event] = [];
        target.push({
            subscriber: subscriber,
            handler: handler.bind(subscriber),
        })
        // console.dir(this.events)

        return this;
    },

    /**
     * @param {String} event
     * @param {Object} subscriber
     */
    off: function (event, subscriber) {
        if (this.events.hasOwnProperty(event)) {
            this.events[event] = this.events[event].filter(function(item) {
                return item.subscriber !== subscriber
            })
        } 
        // console.dir(this.events)

        return this;
    },

    /**
     * @param {String} event
     */
    emit: function (event) {
        // console.dir(this.events)
        if (this.events.hasOwnProperty(event)) {
            this.events[event].forEach(function(element) {
                element.handler();
            });
        } 
        return this;
    }
};