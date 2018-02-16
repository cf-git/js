/*!
 * jQuery InjEx plugin
 * https://github.com/
 * Copyright 2017 CF<is.captain.fail@gmail.com>
 * Released under the MIT license
 * Milestone: A
 * Version: 1.03
 */
(function($){
    $.fn.extend({
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