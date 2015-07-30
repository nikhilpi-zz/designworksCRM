Meteor.publish('Items', function () {
  if(Roles.userIsInRole(this.userId, ['admin'])){
    return Item.find();
  } else {
    return Item.find({client: Meteor.userId});
  }
  
});
