/*****************************************************************************/
/* History: Event Handlers and Helpers .js*/
/*****************************************************************************/
Template.History.events({
});

Template.History.helpers({
  bets:function(){

    var list_history = _.pluck(Bets.find({status:"RESOLVED"}).fetch(), '_id');
    var user_history_bets = UserBets.find({user_id: Meteor.userId(), bet_id: {$in: list_history}}, {sort: {resolved_at: -1}}).fetch();
    user_history_bets.forEach(function(x) {
        var b = Bets.findOne(x.bet_id);
        
        var correct_answer = (b.actual_result > 0) ? b.outcomes[b.actual_result - 1].text : "<Other>";
        var user_answer = (x.skipped == true) ? "<Skipped>" : b.outcomes[x.answer - 1].text;
        var profit = -x.wager;
        if (!x.skipped && x.answer == b.actual_result && x.answer > 0) {
            profit += b.outcomes[x.answer - 1].odds * x.wager;
        } 
        _.extend(x, {question: b.question, status_update: b.status_update, actual_result: b.actual_result, 
                     is_correct: (x.answer == b.actual_result), user_answer: user_answer, correct_answer: correct_answer,
                     profit: profit});
    });
    return user_history_bets;
  }
});

/*****************************************************************************/
/* History: Lifecycle Hooks */
/*****************************************************************************/
Template.History.created = function () {
};

Template.History.rendered = function () {
};

Template.History.destroyed = function () {
};