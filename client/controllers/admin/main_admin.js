MainAdminController = RouteController.extend({
  waitOn: function () {
      Meteor.subscribe('admin_get_all_data');
  },

  onBeforeAction: function (route) {
    Tracker.autorun(function(){
      if (!Meteor.userId() && !Meteor.loggingIn())  {
        Session.set('next_page',route.url);
        Router.go('mobile.login');
      }
    });
    this.next();
  },


  data: function () {
  },

  action: function () {
    this.render();
  }
});