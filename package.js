Package.describe({
  summary: "Smart package for bootstrap"
});

Package.on_use(function (api) {
  api.use([],'client');
  api.add_files([
    'dist/js/bootstrap.js'
  ], 'client');
});