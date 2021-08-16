const db = require('../config/connection');
const { User, Trip } = require('../models');
const userSeeds = require('./userSeeds.json');
const tripSeeds = require('./tripSeeds.json');

db.once('open', async () => {
  try {
    await Trip.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);

    for (let i = 0; i < tripSeeds.length; i++) {
      const { _id, tripAuthor } = await Trip.create(tripSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: tripAuthor },
        {
          $addToSet: {
            trip: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
