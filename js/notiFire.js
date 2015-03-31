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

// notifire 
function notifire(config) {
	// initialize default object
	var defaults = {
		types: 'info',
		width: 200,
		height: 50,
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

	// modify notifire div
	div.className += ' ' + defaults.types;
	div.style.width = defaults.width + 'px';
	div.style.height = defaults.height + 'px';
	var x = div.clientHeight; // request property that requires layout to force a layout
	div.className += ' ease';
	switch(defaults.position) {
		case 'right':
			div.style['margin-left'] = window.innerWidth - defaults.width - 16 + 'px';
			console.log(window.innerWidth);
			break;
		case 'left':
			div.style['margin-left'] = '5px';
			break;
		case 'center':
			div.style['margin-left'] = 'auto';
			div.style['margin-right'] = 'auto';
			break;
	}

	if (!isNaN(defaults.timeout)) {
		notifireDismiss(div, defaults);
	}
}


// dismiss notifire
function notifireDismiss(div, defaults) {
	setTimeout(function() {
		console.log(div.className);
		div.className = div.className.replace(' ease','');
		setTimeout(function() {
			document.body.removeChild(div);
		}, 500);
	}, defaults.timeout);
}