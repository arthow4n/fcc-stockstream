Meteor.publish("symbolsList", function () {
    return Symbols.find();
});