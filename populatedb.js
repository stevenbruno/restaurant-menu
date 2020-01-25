#! /usr/bin/env node

// Get arguments passed on command line
var userArgs = process.argv.slice(2);
/*
if (!userArgs[0].startsWith('mongodb')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}
*/
var async = require('async');
var Category = require('./models/category');
var Item = require('./models/item');

var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var items = [];
var categories = [];

function categoryCreate(name, cb) {
  var category = new Category({ name: name });

  category.save(function(err) {
    if (err) {
      cb(err, null);
      return;
    }
    console.log('New Category: ' + category);
    categories.push(category);
    cb(null, category);
  });
}

function itemCreate(name, category, price_cents, description, cb) {
  itemdetail = {
    name,
    category,
    price_cents
  };

  if (description != false) itemdetail.description = description;

  var item = new Item(itemdetail);
  item.save(function(err) {
    if (err) {
      cb(err, null);
      return;
    }
    console.log('New Item: ' + item);
    items.push(item);
    cb(null, item);
  });
}

function createCategories(cb) {
  async.series(
    [
      function(callback) {
        categoryCreate('Appetizers', callback);
      },
      function(callback) {
        categoryCreate('Entrees', callback);
      },
      function(callback) {
        categoryCreate('Drinks', callback);
      }
    ],
    cb
  );
}

function createItems(cb) {
  async.parallel(
    [
      function(callback) {
        itemCreate('Shishito peppers', categories[0], 500, false, callback);
      },
      function(callback) {
        itemCreate('Iced tea', categories[2], 250, false, callback);
      },
      function(callback) {
        itemCreate(
          'Baked salmon',
          categories[1],
          2000,
          'Miso lemon glazed with a side of white rice and brussel sprouts',
          callback
        );
      }
    ],
    cb
  );
}

async.series(
  [createCategories, createItems],
  // Optional callback
  function(err, results) {
    if (err) {
      console.log('FINAL ERR: ' + err);
    } else {
      console.log('Items: ' + items);
    }
    // All done, disconnect from database
    mongoose.connection.close();
  }
);
