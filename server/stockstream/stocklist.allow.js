Stocklist.allow({
    
   insert: function (userid, list) {
       return false;
   },
   
   update: function (userid, list, field, modifier) {
       return false;
   },
   
   remove: function (userid, list) {
       return false;
   }
    
});