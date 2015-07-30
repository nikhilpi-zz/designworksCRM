Commission = new Mongo.Collection('Commission');

Schema.Commission = new SimpleSchema({
    client: {
      type: String
    },
    items: {
      type: [String]
    },
    dueDate: {
      type: Date
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
      denyUpdate: true
    }
  });

Commission.attachSchema(Schema.Commission);

// Collection2 already does schema checking
// Add custom permission rules if needed
if (Meteor.isServer) {
  Commission.allow({
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
