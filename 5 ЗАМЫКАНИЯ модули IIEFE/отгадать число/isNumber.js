// 'use srtict'

(function() {
  window.isNumber = function(n) { 
    return !isNaN(parseFloat(n) && isFinite(n));
  };
}) ();


