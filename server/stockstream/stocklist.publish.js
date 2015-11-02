Meteor.publish("symbolsList", function () {
    return Stocklist.find({name: "stocklist"});
});