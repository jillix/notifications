var Bind = require('github/jillix/bind');
var Events = require('github/jillix/events');

module.exports = function (config) {

    var self = this;
    self.config = config;
    self.config.popup.target = self.config.popup.target || ".notification-popup-container";
    self.config.popup.template.ok = self.config.popup.template || ".popup-template-ok";
    self.config.popup.template.error = self.config.popup.template || ".popup-template-error";
    self.$ = {};
    self.config.binds = self.config.binds || [];
    
    self.on("notifications.show", showNotification);

    Events.call(self, config);
};

function showNotification (type, message) {
    
    var target = $(self.config.popup.target);
    
    if (type === "ok") {
        target.prepend($(self.config.popup.template.ok).clone().removeClass(self.config.popup.template.ok).removeClass("hided"));
    } else {
        target.prepend($(self.config.popup.template.error).clone().removeClass(self.config.popup.template.error).removeClass("hided"));
    }
}

