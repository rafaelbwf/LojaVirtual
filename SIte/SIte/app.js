const vaz = document.getElementById(`textoVaz`);
function  filtro() {
    var fi = document.getElementById(`nenao`).value;
    console.log(fi);
    console.log("teta")
    lerAPI(fi);}
async function lerAPI(filtro = ""){
    let produtosAPI
    let url = "https://diwserver.vps.webdock.cloud/products";
    if (filtro) {
        url += `/category/${filtro}`;
      }
    response = await fetch(url);
    produtosAPI = await response.json();
    changeCard(produtosAPI);
    }
async function loadCard(){
lerAPI()
}
function changeCard(produtosAPI) {
    const totalCards = 6;
        for (let i = 1; i <= totalCards; i++) {
          document.getElementById(`Card${i}`).style.display = "none";
        }
        const produtos = produtosAPI['products']
        for (let i = 0; i < produtos.length; i++) {
          const produto = produtos[i]
          const cardIndex = i + 1;
          const cardElement = document.getElementById(`Card${cardIndex}`);
          cardElement.innerHTML = `
          <img class="card-img${(i+1)}" src="${produto.image}" alt="CARD${(i+1)}">
          <p class="titulo${(i+1)}">${produto.title}</p>
          <p class="aopa">
          <i class="fa-solid fa-star" style="color: #e5ad15;"></i>    
          <i class="fa-solid fa-star" style="color: #e5ad15;"></i>
          <i class="fa-solid fa-star" style="color: #e5ad15;"></i>    
          <i class="fa-solid fa-star" style="color: #e5ad15;"></i>
          <i class="fa-solid fa-star-half-stroke" style="color: #e5ad15;"></i>
      </p>
          <p class="preco${(i+1)}">R$${produto.price}</p>
          <a href="./detail.html" class="inf${(i+1)}" id="b${cardIndex}">Ver mais informaçôes</a>
          `
        
          cardElement.style.display = "grid";
        
          const linkElement = document.getElementById(`b${cardIndex}`);
          linkElement.addEventListener("click", function() {
            const id = produtosAPI['products'][cardIndex - 1].id;
            localStorage.setItem('d', id)
          });
        }}
        function pes(){
            localStorage.setItem('p', document.getElementById(`campoNome`).value)
        }
        function buscarPorLetras(vem, produtos) {
            var letras = vem.toLowerCase();
            var resultados = produtos.filter(function(resus) {
              var titulo = resus.title.toLowerCase();
              return titulo.includes(letras);
            });
            return resultados;
        }
        async function pes2() {
            var p = localStorage.getItem("p");
            if (p && p !== "null") {
                document.getElementById("bPp").value = p;
                var vem = document.getElementById("bPp").value;
                var resus = await fetch("https://diwserver.vps.webdock.cloud/products");
                var produtos = await resus.json();
                produtos = produtos['products']
                var resultados = buscarPorLetras(vem, produtos);
                show(resultados.length);
                serPag(resultados, resultados.length);
                localStorage.setItem("p", null);
              }
               else {
                hide();
                var t = document.getElementById("bPp").value;
                if (!t) {
                } else {
                  pes3();
                }
              }}
              async function pes3() {
                var vem = document.getElementById("bPp").value;
                var resus = await fetch("https://diwserver.vps.webdock.cloud/products");
                var produtos = await resus.json();
                produtos = produtos['products']
                var resultados = buscarPorLetras(vem, produtos);
                show(resultados.length);
                serPag(resultados, resultados.length);
              }
              function hide(){
                for(let i=1;i<=15;i++){
                    document.getElementById(`prodcar${i}`).style.display = "none";
                }
                var main=document.querySelector("html")
                main.style["overflow-y"] = "hidden";
                document.getElementById(`ProPag`).style.display = "none";
            }
            function show(pesq){
                var pesq2 = pesq
                if(pesq2==0){
                    vaz.setAttribute("style", "visibility: visible;");
                }
                else if(pesq2>15){
                    vaz.setAttribute("style", "visibility: hidden;");
                    for(let i=1;i<=15;i++){
                        document.getElementById(`prodcar${i}`).style.display = "grid";
                    }
                    var main=document.querySelector("html")
                    main.style["overflow-y"] = "visible";
                    document.getElementById(`ProPag`).style.display = "block";
                }
                else{
                 vaz.setAttribute("style", "visibility: hidden;");
                for(let i=1;i<=pesq2;i++){
                    document.getElementById(`prodcar${i}`).style.display = "grid";
                }
                var main=document.querySelector("html")
                main.style["overflow-y"] = "visible";
              }
            }
            function serPag(produtosAPI, pesq) {
                for (let i = 1; i <= pesq; i++) {
                  document.getElementById(`prodcar${i}`).innerHTML = `
                    <img src=${produtosAPI[i - 1]['image']} id="imgPR" class="prod${i}"> 
                    <p class="prodTit1">${produtosAPI[i - 1]['title']}</p>
                    <p class="precoProd1">R$${produtosAPI[i - 1]['price']}</p>
                    <button class="prodCa1">Adicionar ao Carrinho</button>
                    <button class="prodDe1">Detalhes</button>`;
                }
                console.log(document.getElementById('imgPR'));
              }
              async function detail() {
                var Proid = localStorage.getItem('d');
            console.log(Proid)
            let prod = await fetch(`https://diwserver.vps.webdock.cloud/products/${Proid}`);
            prod = await prod.json();
              change(prod);
         }
              function change(prod){
                var count=prod['rating']['count']
                var descri=prod['description']
                var img=prod['image']
                var pri=prod['price']
                var ti=prod['title']
                                
                const star1 = document.getElementById('st1')
                const star2 = document.getElementById('st2')
                const star3 = document.getElementById('st3')
                const star4 = document.getElementById('st4')
                const star5 = document.getElementById('st5')
                var clas=10;
                var gend="Fantasy, Isekai, ecchi";
                var yea=2014;
                var Aut="Fuse";
                if(clas==1){
                    star1.className="fa-regular fa-star-half-stroke fa-2xl"
                }
                else if(clas==2){
                    star1.className="fas fa-star fa-2xl"
                }
                else if(clas==3){
                    star1.className="fas fa-star fa-2xl"
                    star2.className="fa-regular fa-star-half-stroke fa-2xl"
                }
                else if(clas==4){
                    star1.className="fas fa-star fa-2xl"
                    star2.className="fas fa-star fa-2xl"
                }
                else if(clas==5){
                    star1.className="fas fa-star fa-2xl"
                    star2.className="fas fa-star fa-2xl"
                    star3.className="fa-regular fa-star-half-stroke fa-2xl"
                }
                else if(clas==6){
                    star1.className="fas fa-star fa-2xl"
                    star2.className="fas fa-star fa-2xl"
                    star3.className="fas fa-star fa-2xl"
                }
                else if(clas==7){
                    star1.className="fas fa-star fa-2xl"
                    star2.className="fas fa-star fa-2xl"
                    star3.className="fas fa-star fa-2xl"
                    star4.className="fa-regular fa-star-half-stroke fa-2xl"
                }
                else if(clas==8){
                    star1.className="fas fa-star fa-2xl"
                    star2.className="fas fa-star fa-2xl"
                    star3.className="fas fa-star fa-2xl"
                    star4.className="fas fa-star fa-2xl"
                }
                else if(clas==9){
                    star1.className="fas fa-star fa-2xl"
                    star2.className="fas fa-star fa-2xl"
                    star3.className="fas fa-star fa-2xl"
                    star4.className="fas fa-star fa-2xl"
                    star5.className="fa-regular fa-star-half-stroke fa-2xl"
                }
                else if(clas==10){
                    star1.className="fas fa-star fa-2xl"
                    star2.className="fas fa-star fa-2xl"
                    star3.className="fas fa-star fa-2xl"
                    star4.className="fas fa-star fa-2xl"
                    star5.className="fas fa-star fa-2xl"
                }
                else if(clas<=0){
                    star1.className="fa-regular fa-star fa-2xl"
                    star2.className="fa-regular fa-star fa-2xl"
                    star3.className="fa-regular fa-star fa-2xl"
                    star4.className="fa-regular fa-star fa-2xl"
                    star5.className="fa-regular fa-star fa-2xl"
                }
                else{
                    star1.className="fas fa-star fa-2xl"
                    star2.className="fas fa-star fa-2xl"
                    star3.className="fas fa-star fa-2xl"
                    star4.className="fas fa-star fa-2xl"
                    star5.className="fas fa-star fa-2xl"
                }
                document.getElementById("count").textContent=`Votos ${count}`
                document.getElementById("descr").textContent=descri
                document.getElementById("im").src=img
                document.getElementById("titl").textContent=ti
                document.getElementById("descr").style.fontSize="15px"
                document.getElementById("pri").innerText=`R$${pri}`
                }
                