let httpRequest = new XMLHttpRequest();
httpRequest.open('GET', 'https://viacep.com.br/ws/60352590/json');
httpRequest.onload = function() {
    console.log(httpRequest.response);
}
httpRequest.send();