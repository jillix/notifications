M.wrap('github/lucaboieru/notifications/dev/notifications.js', function (require, module, exports) {
var Bind = require('github/jillix/bind');
var Events = require('github/jillix/events');

module.exports = function (config) {

    var self = this;
    self.config = config;
    self.config.options = self.config.options || {};
    self.config.popup = self.config.popup || {};
    self.config.options.nofade = self.config.options.nofade || false;
    self.config.popup.target = self.config.popup.target || ".notifications";
    self.config.popup.template = self.config.popup.template || ".popup-template";
    self.$ = {};
    self.config.binds = self.config.binds || [];
    
    // close event
    //$(document).on("click", , function ( ) {});
    
    self.on("notifications.show", showNotification);

    Events.call(self, config);
};

function showNotification (notification) {
    
    var self = this;

    var target = $(self.config.popup.target);
    var elem;
    
    switch (notification.type) {
    case "success":
        elem = $(self.config.popup.template).clone();
        target.prepend(elem.addClass(notification.type).removeClass(self.config.popup.template.substring(1)).removeClass("hided").html(notification.message));
        break;
    case "error":
        elem = $(self.config.popup.template).clone();
        target.prepend(elem.addClass(notification.type).removeClass(self.config.popup.template.substring(1)).removeClass("hided").html(notification.message));
        break;
    case "info":
        elem = $(self.config.popup.template).clone();
        target.prepend(elem.addClass(notification.type).removeClass(self.config.popup.template.substring(1)).removeClass("hided").html(notification.message));
    }

    setTimeout(function () {
        if (self.config.options.nofade === false) {
            elem.fadeOut(1000, function () {
                elem.remove();
            });
        } else {
            elem.remove();
        }
        // the amount of time the notification is displayed
    }, notification.timeout * 1000 || self.config.options.timeout * 1000 || 5000);
}


return module; });
