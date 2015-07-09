if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);
  Template.registerHelper('formatDate', function(date) {
    return moment(date).format("MMMM Do YYYY, h:mm:ss a");
  });
  Template.registerHelper('whoOwns', function(author) {
    if (author == Meteor.user().emails[0].address) {
      return 'mine';
    } else {
      return 'others';
    }
  });

  Template.chatRoom.helpers({
    msgs: function() {
      return Messages.find({}, {sort: {created: 1}})
    }

  })

Template.chatRoom.onRendered(function () {
  $('#chat-container').animate({scrollTop:99999}, '500', 'swing');
});

  Template.chatRoom.events({
    'click #send-message': function () {
      var CurrentDate = moment().format();
      Messages.insert({message: $('#your-message').val(), author: Meteor.user().emails[0].address, created: CurrentDate});
      $('#your-message').val('');
      $('#chat-container').animate({scrollTop:99999}, '500', 'swing');
    }
  })
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
