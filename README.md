# chriswessels:slideout

A smart-package that bundles [Slideout.js](https://github.com/mango/slideout) for touch slideout navigation for your mobile web apps.

## Slideout.js

<img src="https://i.imgur.com/AWgwlVW.gif" alt="Slideout.js demo">

## Installation

In your Meteor.js project directory, run

    $ meteor add chriswessels:slideout

## Example

See example usage with `iron-router` based routing [here](https://github.com/chriswessels/meteor-slideout/tree/master/example).

Please also see the Slideout.js README: [https://github.com/Mango/slideout/blob/master/README.md#usage](https://github.com/Mango/slideout/blob/master/README.md).

### Meteor-specific Tips

This package just handles bundling the Slideout.js library into your Meteor.js project.

The `Slideout` object instantiation code should go into the rendered hook for the template that contains the DOM elements for your menu (ideally your layout):

You might want to make the slideout instance a global variable so that you can access the utility methods (like `.close()`) from your other code (e.g. routing hooks).

```javascript
Template.MasterLayout.onRendered(function () {
  var template = this;
  slideoutInstance = new Slideout({
    'menu': template.$('.menu').get(0),
    'panel': $('.content').get(0),
    'padding': 256,
    'tolerance': 70
  });
});
```

Your `<head>` should contain the following meta directives to best display your app on mobile devices:

```html
<head>
  <meta http-equiv="cleartype" content="on">
  <meta name="MobileOptimized" content="320">
  <meta name="HandheldFriendly" content="True">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
</head>
```

Also don't forget to include the CSS in the [Slideout.js README](https://github.com/Mango/slideout/blob/master/README.md). See [example](https://github.com/chriswessels/meteor-slideout/tree/master/example) too.

## Versioning

It looks like the Slideout.js team have stopped tagging new releases on Github. This is problematic as it becomes difficult to track which version of their plugin is bundled in the smart package. I will continue to release new versions of this smart package, following the scheme: `SLIDEOUT-GITHUB-TAG`_`RELEASE-NUMBER-UNDER-THAT-TAG`.

## License

Please see the `LICENSE` file for more information.
