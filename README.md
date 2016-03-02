## Synopsis

A very simple wrapper for XMLHttpRequest to use it quickly without JQuery. For now it only supports GET and POST. Also a simple function to grab inputs from an HTML form and URI encode them. Requires PromiseJS (https://www.promisejs.org/).

## Code Example

```javascript
var ajax = require('HttpRequest.js');

var responsePromise = ajax.post(
	    'http://url-you-want.com/',
	    ajax.generateURIEncodedString(event.target)
	).then(
        function(responseText) {
            // do something when response is ok
        },
        function(responseText) {
            // do something when response is not ok (status >= 400)
        }
    );
```
