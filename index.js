//require('browser-logger');

require(['./bear.js'], function(bear){
  document.body.appendChild(bear[0]);
  
});

console.log(__dirname);
console.log(__filename);

