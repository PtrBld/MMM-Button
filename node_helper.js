'use strict';

/* Magic Mirror
 * Module: MMM-Button
 *
 * MIT Licensed.
 */

const NodeHelper = require('node_helper');
module.exports = NodeHelper.create({
  start: function () {
    this.started = false;
  },
  // Subclass socketNotificationReceived received.
  socketNotificationReceived: function(notification, payload) {
    if (notification === 'BUTTON_CONFIG' && this.started == false) {     
		const self = this;
		this.config = payload;	  
		let GPIO = require('onoff').Gpio;
		let button = new GPIO(this.config.buttonPIN, 'in', 'both',{ persistentWatch: true, debounceTimeout: this.config.clickDelay });
		button.watch(function(err, state) {
			// check the state of the button; 1 == pressed, 0 == not pressed
			if(state == 1) {
				// send notification for broadcast
				self.sendSocketNotification(self.config.notificationMessage, true);
				console.log("button pressed");
			}
		});          
		this.started = true;
    };
  }
  
});
