Meteor.publish('Client', function () {
  return Client.find();
});
