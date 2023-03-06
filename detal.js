
let Id = localStorage.getItem('id')
        
function getUrl(){
  let Data =  fetch('https://fakestoreapi.com/products/' + Id);

  return Data;
}

async function getDtals(){
  

  getUrl().then(response => response.json())
  .then(resppost => {
  document.querySelector("#imgs").src = resppost.image;
  document.querySelector("h1").innerText = resppost.title;
  document.querySelector("p").innerText = resppost.description;
  document.querySelector("h2").innerText = resppost.price + '₾';
  })
   


}

getDtals();

