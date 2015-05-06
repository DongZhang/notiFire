/*
 * notiFire 
 * by @dongzhang
 */

var wrapper = document.createElement('div');
wrapper.className = 'notifire-frame';
document.body.appendChild(wrapper);

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
		types: 'default',
		width: 200,
		height: 50,
		color: 'black',
		borderStyle: 'solid',
		borderWidth: 0,
		borderColor: '#ddd',
		position: 'left',
		msg: 'This is message by default',
		timeout: 5000
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
	var span = document.createElement('span');
	div.className = 'notifire';
	span.innerHTML = defaults.msg;
	div.appendChild(span);
	wrapper.appendChild(div);

	// modify notifire div by config
	div.className += ' ' + defaults.types;
	div.style.width = defaults.width + 'px';
	div.style.height = defaults.height + 'px';
	div.style.color = defaults.color;
	var x = div.clientHeight; // request property that requires layout to force a layout

	// modify notifire div by customized position option
	switch(defaults.position) {
		case 'right':
			div.style['margin-left'] = document.body.clientWidth - 5 + 'px';
			div.style['margin-right'] = '-' + (defaults.width - 5) + 'px';
			div.style['transition'] = 'transform 0.5s';
			div.style['transform'] = 'translateX(-' + defaults.width + 'px)';
			div.style['-webkit-transition'] = 'transform 0.5s';
			div.style['-webkit-transform'] = 'translateX(-' + defaults.width + 'px)';
			break;
		case 'left':
			div.style['margin-left'] = '-' + (defaults.width - 5) + 'px';
			div.style['transition'] = 'transform 0.5s';
			div.style['transform'] = 'translateX(' + defaults.width + 'px)';
			div.style['-webkit-transition'] = 'transform 0.5s';
			div.style['-webkit-transform'] = 'translateX(' + defaults.width + 'px)';
			break;
	}

	if (defaults.backgroundColor) {
		div.style.backgroundColor = defaults.backgroundColor;
	}
	if (defaults.borderWidth !== 0) {
		div.style['border-style'] = defaults.borderStyle;
		div.style['border-width'] = defaults.borderWidth + 'px';
	}
	if (defaults.borderColor) {
		div.style['border-color'] = defaults.borderColor;
	}
	if (defaults.opacity) {
		div.style.opacity = defaults.opacity;
	}
	if (!isNaN(defaults.timeout)) {
		notifireDismiss(div, defaults);
	} else {
		div.addEventListener('click', function() {notifireDismiss(div, defaults);});
	}
}

// dismiss notifire
function notifireDismiss(div, defaults) {
	setTimeout(function() {
		div.style['transform'] = '';
		div.style['-webkit-transform'] = '';
		setTimeout(function() {
			wrapper.removeChild(div);
		}, 500);
	}, defaults.timeout);
}