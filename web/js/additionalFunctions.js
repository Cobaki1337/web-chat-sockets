//Check empty field function
function isEmptyField(str) {
    if(str===undefined){
        return true;
    }
    return str.trim() === '';
}

//Post data to server function
function postToServer(){
    var mess = document.getElementById("message").value;
    if (!isEmptyField(mess)) {
        var jsonObj = {
            login: document.getElementById("login").value,
            message: document.getElementById("message").value
        };
        ws.send(JSON.stringify(jsonObj));
        document.getElementById("message").value = '';
    }
}