# notiFire
notiFire is a simple library that providing message notification. No jQuery needed!!

view [demo](http://dongzhang.github.io/notiFire/)

### Features
&bull; customizable message content - of course

&bull; customizable color - background / content 

&bull; customizable size / border

&bull; customizable opacity / position

&bull; trigger callback when click on the message


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
&bull; msg - (string, required): the content of your message

&bull; types - (string): choose from 'success', 'info', 'warning', 'danger' or 'default'. Each type have a different background color

&bull; width - (integer): width of the notificatoin message in px

&bull; height - (integer): height of the notificatoin message in px

&bull; color - (string): color of the text message, could be CSS default colors or hex colors

&bull; borderStyle - (string): the border-style of the message div, should be valid border-style value

&bull; borderWidth - (integer): border-width of the message div in px

&bull; borderColor - (string): the border-color of the message div, could be CSS default colors or hex colors

&bull; backgroundColor - (string): the backgroudn-color of the message div, could be CSS default colors or hex colors

&bull; opacity - (float): the opacity value of the message div

&bull; position - (string): 'left' or 'right'

&bull; timeout - (integer): how long do you need to display the message, in ms. 'false' if don't need auto-disappear

&bull; callback - (function): the callback function to trigger when clicking the message to close it

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
