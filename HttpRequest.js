(function (root, factory) {
    module.exports = factory(
        require('promise') // promises can be installed glabally in Node
    );
}(this, function(Promise) {
    
    
    function get(url) {
        return new Promise(function(succeed, fail) {
            var req = new XMLHttpRequest();
            req.open('GET', url, true);
            req.addEventListener('load', function() {
                if (req.status < 400)
                    succeed(req.responseText);
                else
                    fail(new Error('Request failed: ' + req.statusText));
            });
            req.addEventListener('error', function() {
                fail(new Error('Network error'));
            });
            req.send(null);
        });
    }
    
    function post(url, body) {
        return new Promise(function(succeed, fail) {
            var req = new XMLHttpRequest();
            req.open('POST', url, true);
            req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            req.addEventListener('load', function() {
                if (req.status < 400)
                    succeed(req.responseText);
                else
                    fail(new Error('Request failed: ' + req.statusText));
            });
            req.addEventListener('error', function() {
                fail(new Error('Network error'));
            });
            req.send(body);
        });
    }


    // Gets all the inputs from the <form> node and generates a URI encoded string to submit a POST request
    function generateURIEncodedString(formNode) {

        var string = '';
        var inputs = formNode.getElementsByTagName('input');
        for(var i=0; i<inputs.length-1; i++) {
            if(inputs[i].value != '') {
                string += inputs[i].name+'='+encodeURIComponent(inputs[i].value)+'&';
            }
        }
        return string;
    }

    
    return {
        'get': get,
        'post': post,
        'generateURIEncodedString': generateURIEncodedString
    };
}));
