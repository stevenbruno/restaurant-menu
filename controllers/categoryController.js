var Category = require('../models/category');

// display home page
exports.index = function(req, res) {
  res.render('index', { title: 'Restaurant Inventory' });
};

// Display list of all Categories.
exports.category_list = function(req, res) {
  res.send('NOT IMPLEMENTED: Category list');
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
