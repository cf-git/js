/*!
 * jQuery CF-lib
 * https://github.com/
 * Copyright 2017 CF<is.captain.fail@gmail.com>
 * Released under the MIT license
 * Milestone: A
 * Version: 1.00
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
        },
        check: function () {
            return this.each(function () {
                this.checked = true;
            });
        },
        uncheck: function () {
            return this.each(function () {
                this.checked = false;
            });
        },
        cursorCurrentPos: function () {
            let input = this.get(0), sel, selLen;
            if (!input) return;
            if ('selectionStart' in input) {
                return input.selectionStart;
            } else if (document.selection) {
                input.focus();
                sel = document.selection.createRange();
                selLen = document.selection.createRange().text.length;
                sel.moveStart('character', -input.value.length);
                return sel.text.length - selLen;
            }
        },
        extractParam: function (attrName) {
            switch (attrName) {
                case 'value':
                    switch (this[0].tagName) {
                        case 'select':
                            result = [];
                            for (let i = 0, il = this[0].length; i < il; i++) {
                                if (this[0][i].selected) {
                                    result.push(this[0][i].value);
                                }
                            }
                            if (!this[0].multiple) {
                                return result[0];
                            }
                            return result;
                            break;
                        default:
                            return this[0].value;
                    }
                    break;
                case 'text':
                    return this[0].innerText;
                    break;
                case 'html':
                    return this[0].innerHTML;
                    break;
                default:
                    return this[0].getAttribute(attrName);
                    break;
            }
        },
        injectParam: function (attrName, value) {
            this.each(function () {
                switch (attrName) {
                    case 'value':
                        switch (this.tagName) {
                            case 'select':
                                this.setAttribute(attrName, 'value');
                                this[attrName] = value;
                                for (let i = 0, il = this[0].length; i < il; i++) {
                                    if (this[i].value === value) {
                                        this[i].setAttribute('selected', 'selected');
                                        this[i].selected = true;
                                    }
                                }
                                break;
                            default:
                                this.setAttribute(attrName, 'value');
                                this[attrName] = value;
                                break;
                        }
                        break;
                    case 'text':
                        this.innerText = value;
                        break;
                    case 'html':
                        this.innerHtml = value;
                        break;
                    default:
                        this.setAttribute(attrName, value);
                        this[attrName] = value;
                        break;
                }
            });
            return this;
        }
    });
})(jQuery);