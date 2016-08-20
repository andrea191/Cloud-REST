'use strict';

var util = require('util');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var sensorSchema = mongoose.Schema({
  sensor_id: String,
  sensor_type: String,
  sensor_status: String
});

var Sensor = mongoose.model('Sensor', sensorSchema);

exports.getSensors = function(args, res, next) {
  Sensor.find(function(err,sensors){
    if (err) {
      res.json(err);
      return console.error(err)
    };
    var sensorsList = [];
    for (var i in sensors) {
      sensorsList.push({
        "sensor_id" : sensors[i]['sensor_id'],
        "sensor_type" : sensors[i]['sensor_type'],
        "sensor_status" : sensors[i]['sensor_status']
      });
    };
    res.json(sensorsList);
  })
  
}

exports.getSensorsByType = function(args, res, next) {
  /**
   * parameters expected in the args:
  * type (String)
  * args.'parameter's name'.value, i.e. args.type.value
    parameters:
      - name: "type"
        in: "path"
        description: "The type of sensor"
        required: true
        type: "string"

  **/
  Sensor.find(function(err,sensors){
    if (err) {
      res.json(err);
      return console.error(err)
    };
    var sensorsList = [];
    for (var i in sensors) {
      if (sensors[i]['sensor_type']==args.type.value){
        sensorsList.push({
          "sensor_id" : sensors[i]['sensor_id'],
          "sensor_type" : sensors[i]['sensor_type'],
          "sensor_status" : sensors[i]['sensor_status']
        });
      }
    };
    res.json(sensorsList);
  });
}

