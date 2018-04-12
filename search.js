const dns = require('dns');
dns.resolve('cantonucci.me', 'TXT', function(err, addresses) {
    console.log(err, addresses);
});
