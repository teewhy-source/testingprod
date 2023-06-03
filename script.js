let productdisplay = document.querySelector("#product-display");
let productname = document.querySelector("#product-name");
let productdescription = document.querySelector("#product-description");
let productprice = document.querySelector("#price")




let item = () => {
    fetch('https://fakestoreapi.com/products')
            .then(response => {
                return response.json()
            })
            .then(data => {
                // console.log(data)
                // console.log(data[0].title)
                // console.log(data[1].title)
                productdisplay.innnerText = data[0].image;
                productdescription.innerText = data[1].description;
                productname .innerText = data[0].category;
                productprice.innerText =data[1].price;
              
            });
}
item()










