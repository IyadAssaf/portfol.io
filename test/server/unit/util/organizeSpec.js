'use strict';

var lib, mock;

beforeEach(function () {
    lib = new (require(process.cwd() + '/app/util/organize'))();
});

/*!
 * @method byDay
 */
describe('byDay', function () {

    describe('grouping a list of ordered events by day', function () {

        beforeEach(function () {
            // mock feed - ordered
            mock = require('../resources/mockFeedOrdered.json');
        });

        it('should change the structure have an array of objects with sub arrays', function () {

            var result = lib.byDay(mock);
            result.should.be.an('array');

            var dateKeyArr = [];

            for(var i in result) {
                var dateObj = result[i];

                for(var key in dateObj) {

                    dateKeyArr.push(key);

                    // key should be a date string - 39 chars
                    key.length.should.equal(39);

                    // sub array should exist
                    dateObj[key].should.be.an('array');
                }
            }

            // check if all of the date keys are in order
            var futureDate;
            for(var e in dateKeyArr) {
                var date = new Date(dateKeyArr[e]);
                futureDate = futureDate ? (date < futureDate).should.equal(true) && date: date;
            }

        });

        it('should throw an error if .date is not provided for every item', function () {

            // remove the date to see if the error is thrown
            for(var i in mock) {
                delete mock[i].date;
            }

            /*jshint -W068 */
            (function () {
                lib.byDay(mock);
            }).should.throw(Error);
        });
    });
});
