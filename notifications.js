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

function showNotification (notification) {
    
    var self = this;

    var target = $(self.config.popup.target);
    var elem;
    
    switch (notification.type) {
    case "success":
        elem = $(self.config.popup.template.ok).clone();
        target.prepend(elem.removeClass(self.config.popup.template.ok.substring(1)).removeClass("hided").html(notification.message));
        break;
    case "error":
        elem = $(self.config.popup.template.error).clone();
        target.prepend(elem.removeClass(self.config.popup.template.error.substring(1)).removeClass("hided").html(notification.message));
        break;
    case "info":
        elem = $(self.config.popup.template.error).clone();
        target.prepend(elem.removeClass(self.config.popup.template.error.substring(1)).removeClass("hided").html(notification.message));
    }

    setTimeout(function () {
       elem.fadeOut(1000, function () {
           elem.remove();
       });
    }, 5000);
}


return module; });
