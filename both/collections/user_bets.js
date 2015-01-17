UserBets = new Mongo.Collection("user_bets");



var schema = new SimpleSchema({
    user_id: {
        type: String,
        label: "User that submitted this bet",
        max:50
    },
    bet_id: {
        type: String,
        label: "Bet that this realates to",
        max:50,
    },
    wager: {
        type: Number,
        label: "Chips bet on this option",
        min:0
    },
    answer: {
        type: String,
        label: "Question",
        max: 300
    },
    skipped:{
        type:Boolean,
        label:"True if this question was skipped",
    },
    was_result_displayed:{
        type:Boolean,
        label:"true if the result status message has been seen"
    },
    submitted_at: {
        type: Date,
        label: "Last date this book was checked out",
        optional: true
    }
});

UserBets.attachSchema(schema);