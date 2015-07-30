Service = new Mongo.Collection('Service');
Schema.Question = new SimpleSchema({
  prompt: {
    type: String,
    label: "Prompt"
  },
  responseType: {
    type: String,
    label: "Response Type",
    autoform: {
      options: [
        {label: "text", value: "text"},
        {label: "yes/no", value: "boolean"},
        {label: "number", value: "number"}
      ]
    }
  }
});

Schema.Service = new SimpleSchema({
    name: {
      type: String,
      label: "Name",
    },
    spec: {
      type: [Schema.Question],
      label: "Specifications"
    },
    disabled: {
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

Service.attachSchema(Schema.Service);

// Collection2 already does schema checking
// Add custom permission rules if needed
if (Meteor.isServer) {
  Service.allow({
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
