/*
 * notiFire 
 * by @dongzhang
 */

// helper function to extend obj1 by obj2
function extend(obj1, obj2) {
	for (var property in obj2) {
		obj1[property] = obj2[property];
	}
}

// notifire function
function notifire(config) {
	// initialize default object
	var defaults = {
		type: 'info',
		width: 400,
		height: 100,
		position: 'right',
		msg: 'This is message by default',
		timeout: 5000,
		callback: null
	};
	extend(defaults, config);

	// check other config options
	if (typeof defaults.callback !== 'function') {
		defaults.callback = null;
	}
	if (defaults.width === '100%') {
		defaults.width = screen.width;
	}

	// create message element and append to body
	var div = document.createElement('div');
	var p = document.createElement('p');
	div.className = 'notifire';
	p.innerHTML = defaults.msg;
	div.appendChild(p);
	document.body.appendChild(div);
}