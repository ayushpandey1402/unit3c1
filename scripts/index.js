//store the products array in localstorage as "products"


function Product(t,d,p,i){
    this.type= t;
    this.desc= d;
    this.price= p;
    this.image= i;
}

function getproduct(e){
    e.preventDefault();

    let form = document.getElementById("products");
    let type= form.type.value;
    let desc = form.desc.value;
    let price = form.price.value;
    let image =  form.image.value;

    let data = new Product(type,desc,price,image);
    console.log(type,desc,price,image);
    let productData= JSON.parse(localStorage.getItem("products")) || []

     productData.push(data)
     
     localStorage.setItem("products",JSON.stringify(productData))


}