

let productData= JSON.parse(localStorage.getItem("products")) || []

productData.map(function(elem,index){
    let div = document.createElement("div");

    let img = document.createElement("img");
    img.src = elem.image;

    let h1 = document.createElement("h4")
    h1.innerText = elem.type;

    let h2 = document.createElement("h4");
    h2.innerText = elem.desc;

    let h3 = document.createElement("h4");
    h3.innerText = elem.price;

    let rmvbtn = document.createElement("button")
    rmvbtn.setAttribute("id" , "remove_product")
    rmvbtn.innerText= "Remove Product";
    rmvbtn.addEventListener("click", function(){
        rmvbtnfunction(elem,index);
    })

   div.append(img,h1,h2,h3,rmvbtn)

   document.getElementById("all_products").append(div);

    
    
})

function   rmvbtnfunction(elem,index){

    productData.splice(index,1)
    localStorage.setItem("products",JSON.stringify(productData))
    window.location.reload()
}
