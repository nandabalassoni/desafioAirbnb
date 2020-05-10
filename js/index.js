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

/**
 * Faz o cálculo dos itens que irão ser mostrados na página.
 * 
 * @param {array} items 
 * @param {number} pageActual 
 * @param {number} limitItems 
 * @return Array result Contendo os Objetos a serem mostrados.
 */
function pagination(items, pageActual = 1, limitItems = 8) {
  let result = [],
      totalPage = Math.ceil(items.length / limitItems ),
      count = ( pageActual * limitItems ) - limitItems,
      delimiter = count + limitItems;

  if (pageActual <= totalPage){
      for(let i=count; i<delimiter; i++){
          if(items[i] != null){
              result.push(items[i]);
          }
          count++;
       }
  }
  return result;
};

/**
 * Imprime o HTML na página.
 * 
 * @param Array paginate Array de objetos contendo os elementos a serem mostrados.
 * @return void
 */
function listCards(paginate = []) { 
  let html = "";
  paginate.forEach(element => {
      html += `
          <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3">
              <div class="card m-auto border-0">
                  <div class="content__card-image">
                      <img src="${element.photo}" class="card-img-top" alt="${element.property_type}">
                  </div>
                  <div class="card-body">
                      <h5 class="card-title">${element.property_type}</h5>
                      <p class="card-text content__card-description">${element.name}</p>
                      <p class="card-text content__card-price"><strong>R$ ${format_number(element.price, 2, "", ".")}</strong><span>,00</span>/diária</p>
                      <a href="#">Reservar</a>
                  </div>
              </div>
          </div>
      `;
  });
  document.getElementsByClassName("content")[0].innerHTML = html;
}

/**
 * Imprime o HTML dos links da paginação na página.
 * 
 * @param {array} items Array de objetos contendo os elementos a serem mostrados.
 * @param {number} pageActual Index da paginação atual.
 * @return void
 */
function paginateLink(items, pageActual = 1) {
  let html = "",
      totalLink = Math.ceil(items.length / 8),
      disabledBack = pageActual == 1 ? "disabled" : "",
      disabledNext = pageActual == totalLink ? "disabled" : "",
      indexProgressBack = pageActual != 1 ? pageActual - 1 : 1;
      indexProgressNext = pageActual != totalLink ? pageActual + 1 : pageActual;
}
