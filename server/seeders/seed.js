const db = require('../config/conrtoller');
const { Profile } = require('../models');
const profileSeeds = require('./unkownSeeds.json');

db.once('open', async () => {
  try {
    await Profile.deleteMany({});
    await Profile.create(profileSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});