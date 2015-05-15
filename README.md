# notiFire
notiFire is a simple library that providing message notification. No jQuery needed!!

### Examples
See example.html

### Usage
##### Simple message:
```
// include notiFire.css in the head
<link href="css/notiFire.css" type="text/css" rel="stylesheet">

// include notiFire.js at the end of body
<script src="js/notiFire.js" type="text/javascript"></script>

// there you go!
notifire({
    msg: 'this is a test message'
});
```

##### Parameters
<b>&bull; msg</b> - (string, required): the content of your message

<b>&bull; types</b> - (string): choose from 'success', 'info', 'warning', 'danger' or 'default'. Each type have a different background color

<b>&bull; width</b> - (integer): width of the notificatoin message in px

<b>&bull; height</b> - (integer): height of the notificatoin message in px

<b>&bull; color</b> - (string): color of the text message, could be CSS default colors or hex colors

<b>&bull; borderStyle</b> - (string): the border-style of the message div, should be valid border-style value

<b>&bull; borderWidth</b> - (integer): border-width of the message div in px

<b>&bull; borderColor</b> - (string): the border-color of the message div, could be CSS default colors or hex colors

<b>&bull; backgroundColor</b> - (string): the backgroudn-color of the message div, could be CSS default colors or hex colors

<b>&bull; opacity</b> - (float): the opacity value of the message div

<b>&bull; position</b> - (string): 'left' or 'right'

<b>&bull; timeout</b> - (integer): how long do you need to display the message, in ms. 'false' if don't need auto-disappear

<b>&bull; callback</b> - (function): the callback function to trigger when clicking the message to close it

##### Full Example:
```
notifire({
	msg: 'See how callback is fired',
	types: 'info',
	width: 300,
	height: 200,
	color: 'white',
	borderStyle: 'solid',
	borderWidth: 1,
	borderColor: '#33aaee',
	backgroundColor: 'blue',
	opacity: 0.5,
	position: 'right',
	timeout: 'false',
	callback: function() { alert('callback after full-example has been triggered.'); }
});
```
