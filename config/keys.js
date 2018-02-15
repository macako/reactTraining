//keys.js -figure out what set of credentials to return
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./prod');
} else {
  module.exports = require('./dev');
}
