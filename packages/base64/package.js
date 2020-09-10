Package.describe({
  summary: "Base64 encoding and decoding",
  version: '1.0.12',
});

Package.onUse(api => {
  api.export('Base64');
  api.use('ecmascript');
  api.setSideEffects(false);
  api.mainModule('base64.js');
});

Package.onTest(api => {
  api.use(['ecmascript', 'tinytest', 'ejson']);
  api.setSideEffects(false);
  api.addFiles('base64_test.js', ['client', 'server']);
});
