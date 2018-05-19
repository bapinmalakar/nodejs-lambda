'use strict';

module.exports.api1  = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      app: 'Lambda Demo',
      version: 'V1.0',
      message: 'Success api1',
      input: event.httpMethod,
      path: event.path
    }),
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
module.exports.api2 = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      app: 'Lambda Demo',
      version: 'V1.0',
      message: 'Success api2',
      input: event.httpMethod,
      path: event.path
    }),
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Success ', event });
};
