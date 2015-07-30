Meteor.publish('Items', function () {
  return Item.find();
});
