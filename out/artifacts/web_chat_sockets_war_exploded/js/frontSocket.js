var ws = new WebSocket("ws://localhost:8080/ServerSocket");
ws.onopen = function(){
};
ws.onmessage = function(mess) {
    var data = JSON.parse(mess.data);
    var messageList = document.getElementById('messages-list');
    var message = document.createElement('div');
    message.setAttribute('class','list-group-item');
    var author = document.createElement('div');
    author.setAttribute('class', 'author');
    author.setAttribute('style','font-weight: bold; color: red');
    author.innerHTML = isEmptyField(data['login'])?'Guest':data['login'];
    var content = document.createElement('div');
    content.setAttribute('class', 'content');
    content.innerHTML = data['message'];
    message.appendChild(author);
    message.appendChild(content);
    messageList.appendChild(message);
};
ws.onclose = function (p1) {  };