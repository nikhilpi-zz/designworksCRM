Template['commissions'].helpers({
  settings: function () {
    return {
      collection: Commission,
      // fields: [
      //   {key: 'name', label: 'Name'},
      //   {
      //     key: 'disabled', 
      //     label: 'Disabled',
      //     fn: function (value, object) { return value ? "True" : "False"; }
      //   },
      //   {
      //     key: 'numItems',
      //     label: 'Number of Items',
      //     fn: function (value, object) { return Item.find({service: object._id}).count(); }
      //   },
      //   { 
      //     key: 'edit', 
      //     label: 'Edit', 
      //     tmpl: Template.editServiceBtn
      //   },
      // ]
    }
  }
});

Template['commissions'].events({
  'click #new-commision': function (event, template) {
    var cId = Commission.insert({
      client: Meteor.userId(),
    });
    Router.go('commission', {_id: cId});
  },
});
