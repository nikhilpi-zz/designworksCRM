Template['services'].helpers({
  Service: function () {
    return Service;
  },
  settings: function () {
    return {
      collection: Service,
      fields: [
        {key: 'name', label: 'Name'},
        {
          key: 'disabled', 
          label: 'Disabled',
          fn: function (value, object) { return value ? "True" : "False"; }
        },
        {
          key: 'numItems',
          label: 'Number of Items',
          fn: function (value, object) { return Item.find({service: object._id}).count(); }
        },
        { 
          key: 'edit', 
          label: 'Edit', 
          tmpl: Template.editServiceBtn
        },
      ]
    }
  }
});

Template['services'].events({
});
