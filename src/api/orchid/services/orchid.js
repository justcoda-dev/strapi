'use strict';

/**
 * orchid service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::orchid.orchid');
