"use strict";

const apiKeys = require('./apiKeys');
const events = require('./events');

apiKeys.retrieveKeys();
events.init();