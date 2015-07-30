Item = new Mongo.Collection('Item');

Schema.Item = new SimpleSchema({
    designer: {
      type: String
    },
    service: {
      type: String,
      label: 'service',
      autoform: {
        options: function () {
          return _.map(Service.find({disabled: false}).fetch(), function (service) {
            return {label: service.name, value: service._id};
          });
        }
      }
    },
    locked: {
      type: Boolean
    },
    cost: {
      type: Number
    },
    specs: {
      type: Object
    },
    dueDate: {
      type: Date
    },
    commission: {
      type: String
    },
    addOns: {
      type: [Object]
    },
    'addOns.$.name': {
      type: String
    },
    'addOns.$.cost': {
      type: Number
    },
    'addOns.$.locked': {
      type: Boolean
    },
    createdAt: {
      type: Date,
      denyUpdate: true,
      autoValue: function() {
        if (this.isInsert) {
          return new Date;
        } else if (this.isUpsert) {
          return {$setOnInsert: new Date};
        } else {
          this.unset();
        }
      },
      autoform: {
        omit: true
      }
    }
  });

Item.attachSchema(Schema.Item);

// Collection2 already does schema checking
// Add custom permission rules if needed
if (Meteor.isServer) {
  Item.allow({
    insert : function () {
      return true;
    },
    update : function () {
      return true;
    },
    remove : function () {
      return true;
    }
  });
}
