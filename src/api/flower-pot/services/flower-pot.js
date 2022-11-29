'use strict';

/**
 * flower-pot service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::flower-pot.flower-pot');
