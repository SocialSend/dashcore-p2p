'use strict';

var spec = {
  name: 'P2P',
  message: 'Internal Error on socialsendcore-p2p Module {0}'
};

module.exports = require('socialsendcore-lib').errors.extend(spec);
