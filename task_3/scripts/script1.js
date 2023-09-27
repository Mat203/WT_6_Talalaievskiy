function startRequest(req, outputElementId) {
    req.onload = function() {
        if (req.status >= 200 && req.status < 300) {
            var data = JSON.parse(req.responseText);
            document.getElementById(outputElementId).innerHTML = JSON.stringify(data, null, 1);
        } else {
            document.getElementById(outputElementId).innerHTML = 'Error: ' + req.status;
        }
    };
    req.onerror = function() {
        document.getElementById(outputElementId).innerHTML = 'Network Error';
    };
    req.send();
}

var req1 = new XMLHttpRequest();
req1.open('GET', 'https://api.github.com/users/Mat203', true);
startRequest(req1, 'validRequestOutput');

var req2 = new XMLHttpRequest();
req2.open('GET', 'https://api.github.com/users/non_existent_user', true);
startRequest(req2, 'errorRequestOutput');