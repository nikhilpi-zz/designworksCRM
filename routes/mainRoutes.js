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