Commission = new Mongo.Collection('Commission');

Schema.Commission = new SimpleSchema({
    client: {
      type: String
    },
    items: {
      type: [String],
      optional: true
    },
    dueDate: {
      type: Date,
      optional: true
    },
    startDate: {
      type: Date,
      optional: true
    },
    status: {
      type: String,
      defaultValue: 'specs',
      autoform: {
        options: [
          {label: "Specs Filled", value: "specs"},
          {label: "Contract Signed", value: "contract"},
          {label: "First Draft", value: "draft"},
          {label: "Complete", value: "done"},
          {label: "Revisions", value: "revisions"},
          {label: "Paid", value: "paid"},
        ]
      }
    },
    addOns: {
      type: [Object],
      optional: true
    },
    'addOns.$.name': {
      type: String
    },
    'addOns.$.cost': {
      type: Number
    },
    'addOns.$.locked': {
      type: Boolean,
      defaultValue: false
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
