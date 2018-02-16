/*!
 * jQuery parseSheet function
 * https://github.com/
 * Copyright 2017 CF<is.captain.fail@gmail.com>
 * Released under the MIT license
 * Milestone: A
 * Version: 1.05
 */
(function($){
    $.fn.extend({
        parseSheet: function (string, multipleSeparator) {
            let sheet, cache = {}, rli, rll,
                sheets = [], si, sl;
            if (!string) {
                return string;
            }
            if (multipleSeparator !== undefined) {
                cache.strings = string.split(multipleSeparator).map($.trim).filter(String);
            } else {
                cache.strings = [string];
            }
            for (si = 0, sl = cache.strings.length; si < sl; si++) {
                sheet = {};
                cache.ruleList = cache.strings[si].split(';').map($.trim);
                if (!cache.ruleList[cache.ruleList.length - 1]) {
                    cache.ruleList.pop();
                }
                for (rli = 0, rll = cache.ruleList.length; rli < rll; rli++) {
                    cache.rule = cache.ruleList[rli].split(':').map($.trim);
                    if (cache.rule[1] && cache.rule[1].indexOf(',') > -1) {
                        sheet[cache.rule[0]] = cache.rule[1].split(',').map($.trim);
                    } else {
                        sheet[cache.rule[0]] = cache.rule[1];
                    }
                }
                sheets.push(sheet);
            }
            return sheets;
        }
    });
})(jQuery);