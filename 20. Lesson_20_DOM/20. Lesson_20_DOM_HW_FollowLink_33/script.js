'use strict'

let buttonSend = document.getElementById('button');
let urlInput = document.getElementById('url_input');


buttonSend.addEventListener('click', () => {
    let webAddress = urlInput.value.toLowerCase();
    if (webAddress.trim() === '') {
            alert('You put empty string');
    } else if (!webAddress.startsWith('http://') && !webAddress.startsWith('https://')) {
     let newUrl = 'http://' + webAddress;
        window.open(newUrl, '_blank');
    } else {
            window.open(webAddress, '_blank')
    }

});

