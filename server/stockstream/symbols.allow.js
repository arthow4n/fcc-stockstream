Symbols.allow({
    
   insert: function (userid, symbol) {
       return _.without(_.keys(symbol), "name").length === 0 &&
               typeof symbol.name === "string" &&
               symbol.name.length <= 5 &&
               /^\d+$/g.test(symbol.name) === false;
   },
   
   update: function (userid, symbol, field, modifier) {
       return false;
   },
   
   remove: function (userid, symbol) {
       return true;
   }
    
});