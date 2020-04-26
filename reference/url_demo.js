const url = require('url');

const myUrl = new URL(
	'http://peteramelang.com:8000/hello.html?id=1996&status=active'
);

// Serialized
console.log(myUrl.href);
console.log(myUrl.toString());

// Host (root domain)
console.log(myUrl.host);

// Hostname (no port)
console.log(myUrl.hostname);

// Pathname
console.log(myUrl.pathname);

// Seialized query
console.log(myUrl.searchParams);

// Add param
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

// Loop through params
myUrl.searchParams.forEach((value, name) => {
	console.log(`${name}: ${value}`);
});
