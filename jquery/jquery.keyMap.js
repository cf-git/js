/*!
 * jQuery Key Map plugin
 * https://github.com/
 * Copyright 2017 CF<is.captain.fail@gmail.com>
 * Released under the MIT license
 * Milestone: B1
 * Version: 0.13
 */

let keyMap = {
    "8": ["BackSpace", "backspace", "backSpace"],
    "9": "Tab",
    "13": "Enter",
    "16": "Shift",
    "17": "Ctrl",
    "18": "Alt",
    "19": ["Pause", "Break"],
    "20": ["CapsLock", "Caps"],
    "27": ["Esc", "Escape"],
    "32": ["Space", "Пробел"],
    "33": "PageUp",
    "34": "PageDown",
    "35": "End",
    "36": "Home",
    "37": "LeftArrow",
    "38": "UpArrow",
    "39": "RightArrow",
    "40": "DownArrow",

    "45": "Insert",
    "46": "Delete",
    "48": "0",
    "49": "1",
    "50": "2",
    "51": "3",
    "52": "4",
    "53": "5",
    "54": "6",
    "55": "7",
    "56": "8",
    "57": "9",
    "65": "A",
    "66": "B",
    "67": "C",
    "68": "D",
    "69": "E",
    "70": "F",

    "71": "G",
    "72": "H",
    "73": "I",
    "74": "J",
    "75": "K",
    "76": "L",
    "77": "M",
    "78": "N",
    "79": "O",
    "80": "P",
    "81": "Q",
    "82": "R",
    "83": "S",
    "84": "T",
    "85": "U",
    "86": "V",
    "87": "W",
    "88": "X",

    "89": "Y",
    "90": "Z",
    "91": "LeftWindows",
    "92": "RightWindows",
    "93": "Applications",
    "96": "NumPad0",
    "97": "NumPad1",
    "98": "NumPad2",
    "99": "NumPad3",
    "100": "NumPad4",
    "101": "NumPad5",
    "102": "NumPad6",
    "103": "NumPad7",
    "104": "NumPad8",
    "105": "NumPad9",
    "106": "NumPad*",
    "107": "NumPad+",
    "109": "NumPad-",

    "110": "NumPad.",
    "111": "NumPad/",
    "112": "F1",
    "113": "F2",
    "114": "F3",
    "115": "F4",
    "116": "F5",
    "117": "F6",
    "118": "F7",
    "119": "F8",
    "120": "F9",
    "121": "F10",
    "122": "F11",
    "123": "F12",
    "144": ["NumLock", "Num"],
    "145": ["ScrollLock"],
    "154": "PrintScreen",
    "157": "Meta",


    "186": [";", "Semicolon"],
    "187": ["=", "Equal"],
    "188": [",", "Coma"],
    "189": ["-", "Minus"],
    "190": [".", "Point"],
    "191": ["/", "Slash"],
    "192": ["~", "Tilde"],
    "219": "[",
    "220": ["\\", "BackSlash"],
    "221": "]",
    "222": "'"
};
jQuery.fn.extend({
    keyMap: function () {
        this.each(function (i, t) {
            let $this = $(t);
            $this.off('keydown.keyMap').on('keydown.keyMap', function (e) {
                EQ = keyMap[e.keyCode];
                if (!$.isArray(EQ)) {
                    EQ = [EQ];
                }
                for (
                    let i = 0, il = EQ.length, name = EQ[0];
                    i < il;
                    name = EQ[++i]
                ) {
                    if (e.shiftKey && keyMap[e.keyCode] !== 'Shift') {
                        name = 'Shift' + name;
                    }
                    if (e.ctrlKey && keyMap[e.keyCode] !== 'Ctrl') {
                        name = 'Ctrl' + name;
                    }
                    if (e.altKey && keyMap[e.keyCode] !== 'Alt') {
                        name = 'Alt' + name;
                    }
                    if (name !== keyMap[e.keyCode]) {
                        name = name[0].toUpperCase() + name.substring(1)
                    }
                    if (name !== undefined) {
                        $this.trigger(name);
                    }
                }
            });
        });
    }
});
