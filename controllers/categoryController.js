var Category = require('../models/category');
var Item = require('../models/item');
var async = require('async');

// display home page
exports.index = function(req, res, next) {
  Item.find()
    .populate('category')
    .exec(function(err, list_items) {
      if (err) {
        return next(err);
      }
      //Successful, so render
      res.render('index', { title: 'Restaurant Menu', item_list: list_items });
    });
};

// Display list of all Categories.
exports.category_list = function(req, res, next) {
  Category.find({}, 'name').exec(function(err, list_categories) {
    if (err) {
      return next(err);
    }
    //Successful, so render
    res.render('categories', {
      title: 'Categories',
      category_list: list_categories
    });
  });
};

// Display category create form on GET.
exports.category_create_get = function(req, res) {
  res.send('NOT IMPLEMENTED: category create GET');
};

// Handle category create on POST.
exports.category_create_post = function(req, res) {
  res.send('NOT IMPLEMENTED: category create POST');
};

// Display category delete form on GET.
exports.category_delete_get = function(req, res) {
  res.send('NOT IMPLEMENTED: category delete GET');
};

// Handle category delete on POST.
exports.category_delete_post = function(req, res) {
  res.send('NOT IMPLEMENTED: category delete POST');
};

// Display category update form on GET.
exports.category_update_get = function(req, res) {
  res.send('NOT IMPLEMENTED: category update GET');
};

// Handle category update on POST.
exports.category_update_post = function(req, res) {
  res.send('NOT IMPLEMENTED: category update POST');
};
