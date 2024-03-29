/*****************************************************************************/
/* Login: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.MobileLogin.events({
  "submit form":function(event){
    var form = $(event.target)
    var username = form.find("[name='username']").val();
    var password = form.find("[name='password']").val();

    Meteor.loginWithPassword(username, password, onLogin);

    function onLogin(error){
      if (error){
        onError(error)
      } else {
        App.track("Login Successful");
        var next_page = Session.get('next_page') || 'mobile.landing'
        Router.go(next_page);
      }
    }

    function onError(error){
      console.log(error)
      App.track("Login Failed", {error:error});
      $('#error').show().css({visibility:'visible'});
      $('#error .message').text(error.reason);
    }

    // Stop the form from submitting
    return false;
  }
});
