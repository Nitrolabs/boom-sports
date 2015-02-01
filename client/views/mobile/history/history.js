/*****************************************************************************/
/* History: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.History.events({
});

Template.History.helpers({
  bets:function(){

    // Assaf: Return a list of bets
	/*
	return [{
	    _id: "poJ6zZ9n5L9cfg86h",
	    game_id: "T8Jpep6T4r9PgTMNj",
	    outcomes: [1,2,3,4],
	    *question: "Do you think the last play in the game will be ...",
	    status: "HIDDEN",
	    status_update: "Wow did you see that touch down",
	    submitted_at: "Sat Jan 31 2015 11:49:33 GMT-0800 (PST)",
	    title: "Last Play",

	    *user_answer: "Touch Down", //XXX Added field to be populated
	    *correct_answer: "Field Goal", //XXX Added field to be populated
	    *is_correct: true //XXX Added field to be populated if the bet was correct
		}]
  	},
	*/
    var list_history = _.pluck(Bets.find({status:"RESOLVED"}).fetch(), '_id');
    var user_history_bets = UserBets.find({user_id: Meteor.userId(), bet_id: {$in: list_history}}, {sort: {resolved_at: -1}}).fetch();
    user_history_bets.forEach(function(x) {
        var b = Bets.findOne(x.bet_id);
        console.log("x");
        console.log(x);
        console.log("b");
        console.log(b);
        
        var correct_answer = (b.actual_result > 0) ? b.outcomes[b.actual_result - 1].text : "<Other>";
        var user_answer = (x.skipped == true) ? "<Skipped>" : b.outcomes[x.answer - 1].text;
        _.extend(x, {question: b.question, status_update: b.status_update, actual_result: b.actual_result, 
                     is_correct: (x.answer == b.actual_result), user_answer: user_answer, correct_answer: correct_answer});
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