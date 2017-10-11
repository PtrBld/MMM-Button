/* global Module */

/* Magic Mirror
 * Module: MMM-Button
 *
 * MIT Licensed.
 */

Module.register('MMM-Button',{	
	requiresVersion: "2.1.0",
	defaults: {
		buttonPIN: 5,
		notificationMessage: "BUTTON_PRESSED",
		//time in miliseconds before another button click is recognized
		clickDelay: 500,		
	},	
	// Override socket notification handler.
	socketNotificationReceived: function(notification, payload) {
		if (notification === this.config.notificationMessage){
			this.sendNotification(this.config.notificationMessage, payload)
		}
	},	
	start: function() {
		this.sendSocketNotification('BUTTON_CONFIG', this.config);
		Log.info('Starting module: ' + this.name);
	}
});
