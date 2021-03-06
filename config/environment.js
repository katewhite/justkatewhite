/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'justkatewhite',
    podModulePrefix: 'justkatewhite/pods',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    // Set or update content security policies
    contentSecurityPolicy: {
      'font-src': "'self' data:",
      'style-src': "'self' 'unsafe-inline' use.typekit.net p.typekit.net performance.typekit.net",
      'img-src': "'self' ",
      'connect-src': "'self' ",
      'script-src': "'self' 'unsafe-inline' use.typekit.net performance.typekit.net"
    },

    // webFontConfig: {
    //     typekit: {
    //         id: 'yvu8mhq'
    //     }
    // },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
