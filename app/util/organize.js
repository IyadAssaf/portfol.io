'use strict';

var Organize, self;

/**
 * @class Organize
 * @desc Organize data in various ways
 */
module.exports = Organize = function () {
    self = this;
};

/**
 * @method byDate
 * @desc Groups an array of linear objects into days
 * @params data {Array of JSON} with objects having a .date key
 * @requires a valid Javascript Date() string for the .date
 */
Organize.prototype.byDay = function (data) {

    /*!
     * @desc Extend date to get the beginning of any date
     * @usage new Date().getFullDay();
     */
    Date.prototype.getFullDay = function () {
        var d = new Date(this);
        return new Date(d.getFullYear(), d.getMonth(), d.getDay());
    };

    /*!
     * Turns this:
     * [{
     *     date: "Fri Sep 05 2014 01:40:26 GMT+0100 (BST)"
     * }, {
     *     date: "Fri Sep 05 2014 01:40:22 GMT+0100 (BST)"
     * }]
     *
     * Into this:
     * [{
     *     "Fri Sep 05 2014 00:00:00 GMT+0100 (BST)": [{
     *         date: "Fri Sep 05 2014 01:40:26 GMT+0100 (BST)"
     *     }, {
     *         date: "Fri Sep 05 2014 01:40:22 GMT+0100 (BST)"
     *     }]
     * }]
     */

    var datedArray = [],
        item,
        selectedDate;

    for(var i in data) {
        item = data[i];

        item.date = item.date ? new Date(item.date) : (function () {
            throw new Error('Item does not have .date');
        })();

        if(Number(item.date.getFullDay()) !== Number(selectedDate)) {

            /*!
             * If the first of that day, create the below sturcture, add to datedArray
             * {
             *      Fri Sep 05 2014 01:40:22 GMT+0100 (BST)": [ --- Filled with induvidual data items --- ]
             * }
             */
            var dateItem = {};
            selectedDate = item.date && item.date.getFullDay();
            dateItem[selectedDate] = [item];
            datedArray.push(dateItem);

        } else {
            // Push to the same sub array for the same day
            for(var _i in datedArray) {
                var innerDateArr = (innerDateArr = datedArray[_i][selectedDate]) ? innerDateArr.push(item) && innerDateArr : null;
            }
        }
    }

    return datedArray;
};
