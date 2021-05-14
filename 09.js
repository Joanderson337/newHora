function carregar() {
  var msg = document.getElementById("msg");
  var image = document.getElementById("image");
  var data = new Date();
  var hora = data.getHours();
  var min = data.getMinutes();
  msg.innerHTML =  `<h5>Agora são exatemente ${adicionaZero(hora)}:${adicionaZero(min)} </h5>`;

  if(hora >= 6 && hora <=13){
    image.setAttribute("src", "./image/manha.jpg"); 
  } else if(hora < 18){
  image.setAttribute("src", "./image/tarde.jpg"); 
  } else{
    image.setAttribute("src", "./image/noite.jpg");
  }
}
function adicionaZero(value) {
  if (value < 10) {
    return "0" + value;
  }
  return value;
}

