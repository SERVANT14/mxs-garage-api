'use strict';
const trackImage = require('./track-image');
const track = require('./track');
const authentication = require('./authentication');
const user = require('./user');

module.exports = function() {
  const app = this;


  app.configure(authentication);
  app.configure(user);
  app.configure(track);
  app.configure(trackImage);
};
