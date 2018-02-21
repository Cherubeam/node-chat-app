const moment = require('moment');

const date = moment();
date.add(100, 'year').subtract(4, 'months');
console.log(date.format('MMM Do, YYYY'));

console.log(date.format('h:mm a'));
console.log(date.format('HH:mm'));
