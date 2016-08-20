'use strict';

var url = require('url');


var Sensors = require('./SensorsService');


module.exports.getSensors = function getSensors (req, res, next) {
  Sensors.getSensors(req.swagger.params, res, next);
};

module.exports.getSensorsByType = function getSensorsByType (req, res, next) {
  Sensors.getSensorsByType(req.swagger.params, res, next);
};
