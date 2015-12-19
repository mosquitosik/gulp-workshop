"use strict";
var GulpConfig = (function(){
  function GulpConfig(argument) {
    this.vendors = {
      js: [],
      css: [],
      fonts: []
    };

    this.app = {
      js: [],
      css: [],
      fonts: [],
      index: ['./src/index.html']
    };
  }
  return GulpConfig;

})();

module.exports = GulpConfig;
