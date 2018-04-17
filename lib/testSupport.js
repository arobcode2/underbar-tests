mocha.setup('bdd');
window.expect = chai.expect;

window.onload = function() {
  window.mochaPhantomJS ? mochaPhantomJS.run() : mocha.run();
};