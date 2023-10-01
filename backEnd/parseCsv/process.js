const fs = require('fs');
const { parse } = require('csv-parse');
const Flavor = require('../models/flavor');

/**
 * CSV to JSON Converter
 *
 * This module reads a CSV file, parses it, and converts it into JSON-like data for storing in the database using the flavor model.
 * 
 */

async function readStream() {
  fs.createReadStream('./flavors.csv')
    .pipe(parse({ delimiter: ',', from_line: 1 }))
    .on('data', async function (row) {
      let [number, category, flavorName] = row;
      number = Number(number);
      console.log(number, flavorName, category);
      try {
        {/*Attempt to create objects based on Flavor schema*/}
        await Flavor.create({ number, category, flavorName });
      } catch (error) {
        console.log('ERROR LOCATION 1: ' + error.message);
      }
    })
    .on('error', function (error) {
      console.log(error.message);
    })
    .on('end', function () {});
}

module.exports = readStream;
