let getdata=JSON.parse(localStorage.getItem("products"))
console.log(getdata)
displaydata(getdata)

function displaydata(getdata){

      getdata.forEach(function(el,index){

            let prodiv=document.createElement("div")
            prodiv.className="prodiv"

            let img1=document.createElement("img")
            img1.setAttribute("src",el.image)
            img1.className="image"

            let type2=document.createElement("h4")
            type2.innerText="Type : "+el.type;
            
            let desc2=document.createElement("p")
            desc2.innerText= "Discription : "+el.desc;

            let price2=document.createElement("h4")
            price2.innerText= "Price : "+el.price;

            let btn=document.createElement("button")
           btn.setAttribute("class","rproduct")
            btn.innerText="Remove"

            btn.addEventListener("click",function(){
                  rproduct(el,index)
            })

            prodiv.append(img1,type2,desc2,price2,btn)
            document.querySelector("#all_products").append(prodiv)

      })

      function rproduct(el,index){
            getdata.splice(index,1);
            localStorage.setItem("products",JSON.stringify(getdata))

            window.location.reload()

      }

}
document.querySelector("#add_more_product").addEventListener("click",addproducts)

function addproducts(){

      window.location.href="index.html"
}