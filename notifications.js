M.wrap('github/lucaboieru/notifications/dev/notifications.js', function (require, module, exports) {
var Bind = require('github/jillix/bind');
var Events = require('github/jillix/events');

module.exports = function (config) {

    var self = this;
    self.config = config;
    self.config.popup.target = self.config.popup.target || ".notifications";
    self.config.popup.template.ok = self.config.popup.template.ok || ".popup-template-ok";
    self.config.popup.template.error = self.config.popup.template.error || ".popup-template-error";
    self.$ = {};
    self.config.binds = self.config.binds || [];
    
    self.on("notifications.show", showNotification);

    Events.call(self, config);
};

function showNotification (type, message) {
    
    var self = this;

    var target = $(self.config.popup.target);
    
    if (type === "ok") {
        target.prepend($(self.config.popup.template.ok).clone().removeClass(self.config.popup.template.ok).removeClass("hided"));
    } else {
        target.prepend($(self.config.popup.template.error).clone().removeClass(self.config.popup.template.error).removeClass("hided"));
    }
}


return module; });
