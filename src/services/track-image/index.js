'use strict';

const hooks = require('./hooks');
const blobService = require('feathers-blob');
const fs = require('fs-blob-store');
const blobStorage = fs(__dirname + '/track-images');

module.exports = function () {
  const app = this;
  const multer = require('multer');
  const multipartMiddleware = multer();

  // Initialize our service with any options it requires
  app.use('/track-images', multipartMiddleware.single('image'),
    // another middleware, this time to
    // transfer the received file to feathers
    function (req, res, next) {
      req.feathers.file = req.file;
      next();
    },
    blobService({Model: blobStorage}));

  // Get our initialize service to that we can bind hooks
  const trackImageService = app.service('/track-images');

  // Set up our before hooks
  trackImageService.before(hooks.before);

  // Set up our after hooks
  trackImageService.after(hooks.after);
};
