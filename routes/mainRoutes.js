// Home Route
Router.route('/', {
  name: 'home',
  action: function () {
    this.render('home');
    SEO.set({ title: 'Home - ' + Meteor.App.NAME });
  }
});

Router.route('/services', {
  name: 'Services',
  waitOn: function(){
    return [Meteor.subscribe("Services"),Meteor.subscribe("Items")];
  },
  data: function(){
    return { 
      services: Service.find({})
    }
  },
  action: function () {
    this.render('services');
    SEO.set({ title: 'Services - ' + Meteor.App.NAME });
  }
});

Router.route('/commissions', {
  name: 'commissions',
  waitOn: function(){
    return [Meteor.subscribe("Commissions"),Meteor.subscribe("Items")];
  },
  data: function(){
    return { 
      services: Service.find({})
    }
  },
  action: function () {
    this.render('commissions');
    SEO.set({ title: 'Commissions - ' + Meteor.App.NAME });
  }
});

Router.route('/commissions/:_id', {
  name: 'commission',
  waitOn: function(){
    return [Meteor.subscribe("Commission",this.params._id),Meteor.subscribe("Items")];
  },
  data: function(){
    return { 
      commission: Commission.findOne({_id: this.params._id})
    }
  },
  action: function () {
    this.render('commission');
    SEO.set({ title: 'Commission - ' + Meteor.App.NAME });
  }
});