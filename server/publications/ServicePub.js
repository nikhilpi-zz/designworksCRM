Meteor.publish('Services', function () {
  return Service.find();
});
