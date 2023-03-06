fetch("https://fakestoreapi.com/products" , {

    method:'get',
   
     }).then((response) => response.json())
    .then(data =>{
      for (const prods of data) {
         let card = `
         <div class="card" >
         <img src="${prods.image}" class="card-img-top" alt="...">
         <div class="card-body">
         <h2 class="card-title">${prods.title}</h2>
         <p class="card-text">${prods.description} </p> 
         <h1 class="card-text">${prods.price} ₾</h1>
         <a href="#" data-id="${prods.id}" class="btn ">სრულად ნახვა</a>
         </div>
       </div>
         `
    
  
         document.querySelector('#loads').innerHTML += card
         
         document.querySelectorAll('[data-id]').forEach(el=>{
            el.addEventListener('click', function(e){
                e.preventDefault();
                let id = this.getAttribute('data-id');
                 localStorage.setItem('id', id);
                 window.location.href  = 'detal.html'
            })
         })
      }
      } )
  
 