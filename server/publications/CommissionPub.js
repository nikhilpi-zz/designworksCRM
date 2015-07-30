Meteor.publish('Commissions', function () {
  if(Roles.userIsInRole(this.userId, ['admin'])){
    return Commission.find();
  } else {
    return Commission.find({client: Meteor.userId});
  }
  
});
