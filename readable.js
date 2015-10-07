(function(global, factory){
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    global.readable = factory()
}(this, function () { 'use strict';

    var _readable = {};

    _readable.downStyle = function(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    };

    _readable.upStyle = function(string) {
        return string.replace(/\w\S*/g, function(str) {
            return _readable.downStyle(str);
        });
    };

    _readable.convertChars = function(string) {
        string = string.replace(/[_-]/g, ' ');
        string = string.replace(/([A-Z])/g, ' $1').toLowerCase();
        return string;
    };

    _readable.addCommas = function(number) {
        return number.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    };

    _readable.removeCommas = function(string) {
        return string.replace(/,/g, '');
    };

    _readable.toCurrency = function(number) {
        var num = parseFloat(number).toFixed(2);
        return _readable.addCommas(num);
    };

    _readable.fromCurrency = function(string, round) {
        var str, strings;
        string = _readable.removeCommas(string);

        if (round) {
            strings = string.split('.');
            str = parseInt( strings[0] );
            if (strings[1] >= 50) {
                str = str + 1;
            }
        } else {
            str = parseInt(string);
        }

        return str;
    };

    _readable.toPercentage = function(number, places) {
        var string = number.toString(),
            percentage;

        number = parseFloat(number);

        places = places || 0;
        // using strings to avoid floating point number precision
        percentage = string.slice(2,4) + '.' + string.slice(4);
        percentage = parseFloat(percentage).toFixed(places);

        return percentage + '%';
    };

    _readable.fromPercentage = function(number) {
        var string = number.toString(),
            strings = string.split('.'),
            num = '0.' + strings.join('');

        return parseFloat(num);
    };

    return _readable;

}));
