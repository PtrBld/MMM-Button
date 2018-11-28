# MMM-Button
This is an extension for the [MagicMirror](https://github.com/MichMich/MagicMirror). It can monitor a button click and change for example the visibility of some of your modules (at the moment just works with my [MMM-Podcast](https://github.com/ptrbld/MMM-Podcast) module).
Special thanks goes to [Paviro](https://github.com/paviro) as this module is heavily based on his [PIR-Sensor](https://github.com/paviro/MMM-PIR-Sensor) module.
## Installation
1. Navigate into your MagicMirror's `modules` folder and execute `git clone https://github.com/ptrbld/MMM-Button.git`. A new folder will appear navigate into it.
2. Execute `npm install` to install the node dependencies.

## Using the module
First of all connect a button to your Raspberry PI: [How to connect a button.](http://razzpisampler.oreilly.com/ch07.html)

To use this module, add it to the modules array in the `config/config.js` file:
````javascript
modules: [
	{
		module: 'MMM-Button',
		config: {
			// See 'Configuration options' for more information.
		}
	}
]
````

## Configuration options

The following properties can be configured:


<table width="100%">
	<!-- why, markdown... -->
	<thead>
		<tr>
			<th>Option</th>
			<th width="100%">Description</th>
		</tr>
	<thead>
	<tbody>
		<tr>
			<td><code>buttonPIN</code></td>
			<td>The pin your button is connected to.<br>
				<br><b>Possible values:</b> <code>int</code>
				<br><b>Default value:</b> <code>5</code>
			</td>
		</tr>
		<tr>
			<td><code>clickDelay</code></td>
			<td>The time in miliseconds before another button click is recognized<br>
				<br><b>Possible values:</b> <code>int</code>
				<br><b>Default value:</b> <code>500</code>
			</td>
		</tr>
		<tr>
			<td><code>notificationMessage</code></td>
			<td>The message broadcasted to other modules<br>
				<br><b>Possible values:</b> <code>string</code>
				<br><b>Default value:</b> <code>BUTTON_PRESSED</code>
			</td>
		</tr>
	</tbody>
</table>

## Developer Notes
This module broadcasts a `BUTTON_PRESSED` (as default; specified in the module config) notification with the payload beeing `true` you can use it to show/hide your module (e.g. [MMM-Podcast](https://github.com/ptrbld/MMM-Podcast)).

## Dependencies
- [onoff](https://www.npmjs.com/package/onoff) (installed via `npm install`)

The MIT License (MIT)
=====================

Copyright © 2016 PtrBld

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the “Software”), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

**The software is provided “as is”, without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose and noninfringement. In no event shall the authors or copyright holders be liable for any claim, damages or other liability, whether in an action of contract, tort or otherwise, arising from, out of or in connection with the software or the use or other dealings in the software.**
