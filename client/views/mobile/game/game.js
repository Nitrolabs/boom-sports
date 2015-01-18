/*****************************************************************************/
/* Game: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.MobileGame.events({
 'click .bet-option-button':function(tmpl, event){
 	
 	// We need to create a new user-bet, with correct bet_id and user_id
 	var user_bet_amount = Session.get('bet_amount') || 2; //TODO - update this once we have a bar
 	
 	var user_selected_answer = this.index_for_ref + 1;

 	var new_user_bet = {
 	    user_id: Meteor.userId(),
        bet_id: Session.get("user_current_bet_id"), 
        
        wager: user_bet_amount,
        answer: user_selected_answer,
        
        skipped: false,
        was_result_displayed: false,
        
        submitted_at: new Date()
    };
    console.log(new_user_bet);
    Meteor.users.update(Meteor.userId(), {$inc: {bank_account: -user_bet_amount}});
    UserBets.insert(new_user_bet);
    console.log("Done! Bet placed successfully! :)" );
 },
 
 'click .bet-skip-button':function(event){

 	// create a new user-bet, and set the skipped flag to true

 	var new_user_bet = {
 	    user_id: Meteor.userId(),
        bet_id: this._id, 
        
        wager: 0,
        answer: 0,
        
        skipped: true,
        was_result_displayed: false,
        
        submitted_at: new Date()
    };
    
 	UserBets.insert(new_user_bet);
 	
 }
});

Template.MobileGame.helpers({
    
    
});

/*****************************************************************************/
/* Game: Lifecycle Hooks */
/*****************************************************************************/
Template.MobileGame.created = function () {
};

Template.MobileGame.rendered = function () {
};

Template.MobileGame.destroyed = function () {
};