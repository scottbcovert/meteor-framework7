Package.describe({
  "summary": "Framework7, the Full Featured HTML Framework For Building iOS 7 Apps."
});

Package.on_use(function (api) {

  api.add_files("lib/framework7/dist/js/framework7.js", "client");
  api.add_files("lib/framework7/dist/js/my-app.js", "client");
  
  api.add_files("lib/framework7/dist/css/framework7.min.css", "client");

});