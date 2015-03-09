# chriswessels:slideout

A smart-package that bundles [Slideout.js](https://github.com/mango/slideout) for touch slideout navigation for your mobile web apps.

## Demo

<img src="https://i.imgur.com/AWgwlVW.gif" alt="Slideout.js demo">

## Installation

In your Meteor.js project directory, run

    $ meteor add chriswessels:slideout

## Usage

This package just handles bundling the Slideout.js library into your Meteor.js project.

For usage extended instructions, please see the Slideout.js README Usage section: [https://github.com/Mango/slideout/blob/master/README.md#usage](https://github.com/Mango/slideout/blob/master/README.md#usage)

### Meteor-specific

It isn't immediately obvious in the Slideout.js README, but you may want to add the following meta tags into your `<head>`:

```html
<meta http-equiv="cleartype" content="on">
<meta name="MobileOptimized" content="320">
<meta name="HandheldFriendly" content="True">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
```

Also, the `Slideout` object instantiation code should go into a `Meteor.startup` in your client-only code:

```javascript
// client/app.js
Meteor.startup(function () {
  var slideout = new Slideout({
    'panel': document.getElementById('panel'),
    'menu': document.getElementById('menu'),
    'padding': 256,
    'tolerance': 70
  });
});
```

## License

Please see the `LICENSE` file for more information.
