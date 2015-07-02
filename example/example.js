if (Meteor.isClient) {
  // To store the slideout instance.
  var slideout;

  // Router configuration
  Router.configure({
    layoutTemplate: 'MasterLayout'
  });

  // Auto-close the menu on route stop (when navigating to a new route)
  Router.onStop(function () {
    if (slideout) {
      slideout.close();
    }
  });

  // Define some routes
  Router.route('/', { name: 'page1' });
  Router.route('/page2', { name: 'page2' });

  // Setup code for Slideout menu in MasterLayout
  Template.MasterLayout.onRendered(function () {
    var template = this;
    slideout = new Slideout({
      'panel': template.$('#content').get(0),
      'menu': template.$('#slideout-menu').get(0),
      'padding': 256,
      'tolerance': 70
    });
  });

  // Other template code

  Session.setDefault('counter', 0);

  Template.page1.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.page1.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
