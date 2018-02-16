/*!
 * jQuery rDelay plugin
 * https://github.com/
 * Copyright 2017 CF<is.captain.fail@gmail.com>
 * Released under the MIT license
 * Milestone: A
 * Version: 1.05
 */

(function($){
    let rDelayContainer = {};
    $.fn.extend({
        rDelay: function(callback, delay, id){
            if (delay === undefined) {
                delay = 500;
            }
            if (rDelayContainer[id] !== undefined) {
                window.clearTimeout(rDelayContainer[id]);
            }
            rDelayContainer[id] = window.setTimeout((function($this){
                return function(){
                    callback.call($this);
                }
            })(this), delay);
            return 
        }
    });
})(jQuery);