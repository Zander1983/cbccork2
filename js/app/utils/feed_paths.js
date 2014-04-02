define(function (require) {

    "use strict";

 
    var Feeds = {};

   
    Feeds.getFeed = function(date_str) {
    
         var feeds = {};
         
            feeds[""]  = '/index.php?option=com_ninjarsssyndicator&feed_id=1&format=raw';
            feeds["news"]  = '/index.php?option=com_ninjarsssyndicator&feed_id=1&format=raw';          
            feeds["campus"]  = '/index.php?option=com_ninjarsssyndicator&feed_id=3&format=raw'; 
            feeds["academic"]  = '/index.php?option=com_ninjarsssyndicator&feed_id=4&format=raw'; 
            feeds["studentlife"]  = '/index.php?option=com_ninjarsssyndicator&feed_id=7&format=raw'; 
            feeds["extracurricular"]  = '/index.php?option=com_ninjarsssyndicator&feed_id=6&format=raw'; 
            feeds["sportsnews"]  = '/index.php?option=com_ninjarsssyndicator&feed_id=8&format=raw'; 

            return feeds[Backbone.history.fragment];

    };
   
    return Feeds;

    
});