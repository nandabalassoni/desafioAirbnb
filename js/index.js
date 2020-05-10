const URL = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72";
var dados = [];

// Realizando requisição com a API.
function sendRequestAPI(url, method = "GET", async = true) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        dados = JSON.parse(this.responseText)
        infoHeader(dados.length)
        paginate(1)
      }
    };
    xhttp.open(method, url, async)
    xhttp.send()
}