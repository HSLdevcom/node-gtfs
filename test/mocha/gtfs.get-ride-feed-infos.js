/* eslint-env mocha */

const should = require('should');

const { openDb, closeDb } = require('../../lib/db');
const config = require('../test-config.js');
const gtfs = require('../..');

describe('gtfs.getRideFeedInfos():', () => {
  before(async () => {
    await openDb(config);
    await gtfs.import(config);
  });

  after(async () => {
    await closeDb();
  });

  it('should return empty array if no ride-feed-infos (GTFS-ride)', async () => {
    const results = await gtfs.getRideFeedInfos({});
    should.exists(results);
    results.should.have.length(0);
  });
});
