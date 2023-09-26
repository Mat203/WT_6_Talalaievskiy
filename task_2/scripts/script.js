var container = document.getElementById('button-container');

for (var i = 1; i <= 30; i++) {
    var btn = document.createElement('button');
    
    btn.innerHTML = 'September ' + i;
    
    btn.addEventListener('click', function() {
        fetchData(this.innerHTML);
    });
    
    container.appendChild(btn);
}

function fetchData(date) {
    fetch('https://api.nasa.gov/planetary/apod?api_key=BORguzBPp7h4biUGGpMlHbvCmcyADsiqOinRJZoZ&date=2023-09-' + date.split(' ')[1])
        .then(response => {
            if (!response.ok) {
                throw new Error('Network Error');
            }
            return response.json();
        })
        .then(data => {
            if (data.media_type !== 'image') {
                throw new Error('Error: there is no image');
            }
            document.getElementById('myImage').src = data.url;
            document.getElementById('myText').innerHTML = data.explanation;
            document.getElementById('message').innerHTML = 'Request Completed';
        })
        .catch(error => {
            document.getElementById('myImage').src = '';
            document.getElementById('myText').innerHTML = '';
            document.getElementById('message').innerHTML = 'Error: ' + error.message;
        });
}