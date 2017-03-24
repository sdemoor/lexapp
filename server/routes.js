var requestHandler = require('./request-handler.js');
var express = require('express');

module.exports = function (app, express) {
  app.post('/api/addCustomer', requestHandler.addCustomer);
  app.post('/api/addProvider', requestHandler.addProvider);
  app.get('/api/getProviders', requestHandler.addResource);
  app.post('/api/users/signin', requestHandler.signin);
  app.post('/api/users/signup', requestHandler.signup)


  // app.post('/api/project', requestHandler.fetchProject);
  // app.post('/api/deliverables', requestHandler.addDeliverable);
  // app.get('/api/deliverables', requestHandler.listDeliverables);
  // app.post('/api/listRepos', requestHandler.listRepos);
  // app.delete('/api/projectList', requestHandler.deleteUserProject)
};
