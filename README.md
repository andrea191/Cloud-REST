# Cloud - RESTful APIs
Generated using [swagger-codegen](https://github.com/swagger-api/swagger-codegen), following the [OpenAPI-Spec](https://github.com/OAI/OpenAPI-Specification).
To see how to make this your own, look here:
[README](https://github.com/swagger-api/swagger-codegen/blob/master/README.md)
This project leverages the mega-awesome [swagger-tools](https://github.com/apigee-127/swagger-tools) middleware which does most all the work.

##MongoDB
Database's name: Sensor
Collection's name: sensors
Schema: 'sensor_id', 'sensor_type', 'sensor_status'

##APIs
1) Return the list of the all sensors
2) Return the list of the all sensors belong to the type

##Swagger
The response is composed by an array, whose is composed by three string fields

### Running the server
First run the MongoDB server, then to run the server, run:

```
npm start
```
or
```
nodemon
```

To view the Swagger UI interface:

```
http://localhost:10010/docs
```
To view the Swagger doc:

```
http://localhost:10010/api-docs
```

