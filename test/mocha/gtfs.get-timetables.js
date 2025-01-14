/* eslint-env mocha */

const should = require('should');

const { openDb, closeDb } = require('../../lib/db');
const config = require('../test-config.js');
const gtfs = require('../..');

describe('gtfs.getTimetables():', () => {
  before(async () => {
    await openDb(config);
    await gtfs.import(config);
  });

  after(async () => {
    await closeDb();
  });

  it('should return empty array if no timetables (GTFS-to-HTML timetables)', async () => {
    const timetableId = 'fake-timetable-id';

    const results = await gtfs.getTimetables({
      timetable_id: timetableId
    });
    should.exists(results);
    results.should.have.length(0);
  });
});
