const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('../models/userModel');
const About = require('../models/aboutModel');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose.set('strictQuery', false);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => console.log('DB connection successful!'));

const data = JSON.parse(fs.readFileSync(`${__dirname}/data.json`, 'utf-8'));

const importData = async () => {
  try {
    await About.create(data, { validateBeforeSave: false });
    console.log('Data succesfully loaded!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

const deleteData = async () => {
  try {
    await User.deleteMany();
    console.log('Data succesfully deleted!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}

console.log(process.argv);
