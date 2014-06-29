var tests = [];
for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    if (/Spec\.js$/.test(file)) {
      tests.push(file);
    }
  }
}

console.log(tests);
requirejs.config({
  // Karma serves files from '/base'
  baseUrl: 'src/',

  // ask Require.js to load these files (all our tests)
  deps: tests,

  callback: window.__karma__.start
});
