'use strict';

/**
 * ficus service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ficus.ficus');
