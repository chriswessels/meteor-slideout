Package.describe({
  name: 'chriswessels:slideout',
  version: '0.1.6',
  // Brief, one-line summary of the package.
  summary: 'A touch slideout navigation menu for your mobile web apps',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/chriswessels/meteor-slideout',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  /* Add Slideout.js */
  api.addFiles('lib/dist/slideout.min.js', 'client');
  api.addFiles('export.js', 'client');
  api.export('Slideout');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('chriswessels:slideout');
  api.addFiles('test.js', 'client');
});
