var schema_for_user = new SimpleSchema({
    username: {
        type: String,
        regEx: /^[a-z0-9A-Z_]{3,15}$/,
        optional: true
    },
    emails: {
        type: [Object],
        // this must be optional if you also use other login services like facebook,
        // but if you use only accounts-password, then it can be required
        optional: true,
        blackbox: true
    },

    createdAt: {
        type: Date,
        optional: true
    },
    profile: {
        type: Object,
        optional: true,
        blackbox: true
    },
    services: {
        type: Object,
        optional: true,
        blackbox: true
    },
    guest: {
        type: String,
        optional: true,
        label: "Was user created automatically for a guest. Options: 'guest', 'linked_to_fb' or empty"
    },
    // Add `roles` to your schema if you use the meteor-roles package.
    // Note that when using this package, you must also specify the
    // `Roles.GLOBAL_GROUP` group whenever you add a user to a role.
    // Roles.addUsersToRoles(userId, ["admin"], Roles.GLOBAL_GROUP);
    // You can't mix and match adding with and without a group since
    // you will fail validation in some cases.
    roles: {
        type: Object,
        optional: true,
        blackbox: true
    },
    bank_account: {
        type: Number,
        decimal: true,
        label: "User available currency"
    },
    bank_diamonds: {
        type: Number,
        decimal: false,
        label: "User Diamonds"
    },
    bank_request_more_funds: {
        type: String,
        optional: true,
        label: "User asked for more chips"
    },
    messages_queue: {
        type: [Object],
        optional: true
    },
    "messages_queue.$.mid": {
        type: String,
        optional: true,
        label: "Message ID"
    },
    "messages_queue.$.text": {
        type: String,
        optional: true,
        label: "Message to show to the user"
    },
    "messages_queue.$.was_seen": {
        type: Boolean,
        optional: true,
        label: "Did the user see the message?"
    },

    location: {
        type: Object,
        optional: true,
        label: "Location info"
    },

    "location.time": {
        type: Date,
        optional: true
    },

    "location.longitude": {
        type: Number,
        decimal: true,
        optional: true
    },

    "location.latitude": {
        type: Number,
        decimal: true,
        optional: true
    },

    user_stats: {
        type: Object,
        optional: true,
        label: "Overall user stats, from all games"
    },
    "user_stats.money_on_the_table": {
        type: Number,
        decimal: true,
        optional: true,
        label: "Total money on the table"
    },
    "user_stats.total_number_of_bets_placed": {
        type: Number,
        optional: true,
        label: "Total # of bets placed"
    },
    "user_stats.total_number_of_bets_resolved": {
        type: Number,
        optional: true,
        label: "Total # of bets resolved"
    },
    "user_stats.total_wins_in_a_row": {
        type: Number,
        optional: true,
        label: "total number of wins in a row"
    },
    "user_stats.total_number_of_bets_won": {
        type: Number,
        optional: true,
        label: "Total # of bets won"
    },
    "user_stats.bets_won_percentage": {
        type: Number,
        decimal: true,
        optional: true,
        label: "User available currency"
    },
    "user_stats.potential_winnings": {
        type: Number,
        decimal: true,
        optional: true,
        label:"Potentail winnings in best case - win all pending bets"
    },
    is_admin: {
        type: Boolean,
        optional: true,
        label: "Is user an admin"
    }
});

Meteor.users.attachSchema(schema_for_user);