function dominio(url) {
  return "http://" + url;
}
let novaUrl = dominio("twitter.com");
console.log(novaUrl); // imprime "http://twitter.com"
