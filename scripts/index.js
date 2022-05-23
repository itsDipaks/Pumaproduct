//store the products array in localstorage as "products"
function Constructproduct(type1,desc1,price1,img1)
{
      this.type=type1;
      this.desc=desc1;
      this.price=price1;
      this.image=img1
}

document.querySelector("#products").addEventListener("submit",productsfunction)
function productsfunction(){
    event.preventDefault()


      let type1=products.type.value;
      let desc1=products.desc.value;
      let price1=products.price.value;
      let img1=products.image.value;



      let product= new Constructproduct(type1,desc1,price1,img1)

      let data=JSON.parse(localStorage.getItem("products"))|| []
      data.push(product)
      localStorage.setItem("products",JSON.stringify(data))

      document.querySelector("")

      

}
document.querySelector("#showproduct").addEventListener("click",showdata)
function showdata(){
      window.location.href="inventory.html"
}